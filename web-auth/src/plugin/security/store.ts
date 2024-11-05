import { defineStore } from 'pinia'
import Keycloak from 'keycloak-js'
import type { Role, ResourcePermission } from './types'

interface AuthState {
  keycloak?: Keycloak
  isInitialized: boolean
  roles: Set<Role>
  resourcePermissions: Map<string, Set<ResourcePermission>>
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    keycloak: undefined,
    isInitialized: false,
    roles: new Set(),
    resourcePermissions: new Map(),
  }),

  getters: {
    isAuthenticated(): boolean {
      return this.keycloak?.authenticated ?? false
    },

    token(): string | undefined {
      return this.keycloak?.token
    },

    hasRole(): (role: Role) => boolean {
      return (role: Role) => this.roles.has(role)
    },

    hasAnyRole(): (roles: Role[]) => boolean {
      return (roles: Role[]) => roles.some((role) => this.roles.has(role))
    },

    hasAllRoles(): (roles: Role[]) => boolean {
      return (roles: Role[]) => roles.every((role) => this.roles.has(role))
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
      this.updateRoles()
      this.updateResourcePermissions()
    },

    updateRoles() {
      if (!this.keycloak) return

      const realmRoles = this.keycloak.realmAccess?.roles ?? []
      const clientRoles = Object.values(
        this.keycloak.resourceAccess ?? {}
      ).flatMap((access) => access.roles)

      const allRoles = [...realmRoles, ...clientRoles]

      this.roles = new Set(
        allRoles.filter((role): role is Role =>
          ['admin', 'supervisor', 'agent'].includes(role)
        )
      )
    },

    updateResourcePermissions() {
      if (!this.keycloak) return

      // Example of parsing resource_access from token
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
