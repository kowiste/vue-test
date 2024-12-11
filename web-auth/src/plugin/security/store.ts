import { defineStore } from 'pinia'
import Keycloak from 'keycloak-js'
import type { ResourcePermission } from './types'

interface AuthState {
  keycloak?: Keycloak
  isInitialized: boolean
  resourcePermissions: Map<string, Set<ResourcePermission>>
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    keycloak: undefined,
    isInitialized: false,
    resourcePermissions: new Map(),
  }),

  getters: {
    isAuthenticated(): boolean {
      return this.keycloak?.authenticated ?? false
    },

    token(): string | undefined {
      return this.keycloak?.token
    },

    hasResourcePermission(): (
      resource: string,
      permission: ResourcePermission
    ) => boolean {
      return (resource: string, permission: ResourcePermission) => {
        const permissions = this.resourcePermissions.get(resource)
        return permissions?.has(permission) ?? false
      }
    },
  },

  actions: {
    setKeycloak(keycloak: Keycloak) {
      this.keycloak = keycloak
      this.isInitialized = true
      this.updateResourcePermissions()
    },

    updateResourcePermissions() {
      if (!this.keycloak) return

      const resourceAccess = this.keycloak.tokenParsed?.resource_access ?? {}
      this.resourcePermissions.clear()

      Object.entries(resourceAccess).forEach(
        ([resource, access]: [string, any]) => {
          const permissions = new Set<ResourcePermission>(
            access.roles
              .filter((role: string) => role.includes('-'))
              .map((role: string) => role.split('-')[1] as ResourcePermission)
          )

          if (permissions.size > 0) {
            this.resourcePermissions.set(resource, permissions)
          }
        }
      )
    },

    async login(redirectUri?: string) {
      if (this.isAuthenticated) return
      await this.keycloak?.login({
        redirectUri: redirectUri ?? window.location.origin,
      })
    },

    async logout() {
      if (!this.isAuthenticated) return
      await this.keycloak?.logout({
        redirectUri: window.location.origin,
      })
    },

    async updateToken(minValidity: number = 300): Promise<boolean> {
      if (!this.keycloak) return false
      try {
        return await this.keycloak.updateToken(minValidity)
      } catch {
        await this.login()
        return false
      }
    },
  },
})
