export interface KeycloakConfig {
  url: string
  realm: string
  clientId: string
  initOptions?: Keycloak.KeycloakInitOptions
}

export interface UserRoles {
  admin: boolean
  supervisor: boolean
  agent: boolean
}

export type Role = keyof UserRoles
export type ResourcePermission = 'view' | 'edit' | 'create' | 'delete'
