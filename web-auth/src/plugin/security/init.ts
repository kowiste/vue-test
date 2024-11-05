import { type App, type Plugin } from 'vue'
import { createPinia } from 'pinia'
import Keycloak from 'keycloak-js'
import { useAuthStore } from './store'
import type { KeycloakConfig } from './types'

export const KeycloakPlugin: Plugin = {
  install(app: App, options: KeycloakConfig) {
    if (!app.config.globalProperties.$pinia) {
      app.use(createPinia())
    }

    const authStore = useAuthStore()
    const keycloak = new Keycloak({
      url: options.url,
      realm: options.realm,
      clientId: options.clientId,
    })

    keycloak
      .init({
        checkLoginIframe: false,
        pkceMethod: 'S256',
        ...options.initOptions,
       })
      .then(() => {
        authStore.setKeycloak(keycloak)

        // Set up token refresh
        setInterval(() => {
          authStore.updateToken()
        }, 60000) // Check token every minute
      })
      .catch((error) => {
        console.error('Failed to initialize Keycloak:', error)
      })
  },
}
