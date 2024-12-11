export interface KeycloakConfig {
  url: string
  realm: string
  clientId: string
  initOptions?: Keycloak.KeycloakInitOptions
}

export type ResourcePermission = 'view' | 'edit' | 'create' | 'delete'
