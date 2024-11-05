import './assets/main.css'

import { createApp } from 'vue'
import { KeycloakPlugin } from './plugin/security/init'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(KeycloakPlugin, {
  url: 'http://localhost:7080/auth', // Try with /auth
  realm: 'myrealm',
  clientId: 'vue-client',
  initOptions: {
    checkLoginIframe: false,
    pkceMethod: 'S256',
    enableLogging: true, // Enable Keycloak logging
  },
})

app.use(router)
app.mount('#app')
