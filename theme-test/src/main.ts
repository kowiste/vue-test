import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import our custom Bootstrap theme
import './assets/custom.css'
// Import Bootstrap icons (optional)
import 'bootstrap-icons/font/bootstrap-icons.css'
// Import Bootstrap JavaScript
import 'bootstrap'

const app = createApp(App)
app.use(router)
app.mount('#app')
