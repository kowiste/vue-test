<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Company Name</router-link>
       
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
       
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item" v-if="authStore.hasResourcePermission('admin-dashboard', 'view')">
              <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item" v-if="authStore.hasResourcePermission('supervisor-dashboard', 'view')">
              <router-link class="nav-link" to="/supervisor">Supervisor</router-link>
            </li>
            <li class="nav-item" v-if="authStore.hasResourcePermission('agent-dashboard', 'view')">
              <router-link class="nav-link" to="/agent">Agent</router-link>
            </li>
          </ul>
         
          <div class="d-flex align-items-center">
            <span class="me-3" v-if="authStore.isAuthenticated">
              Welcome, {{ username }}
            </span>
            <button
              v-if="authStore.isAuthenticated"
              @click="logout"
              class="btn btn-outline-danger"
            >
              Logout
            </button>
            <button
              v-else
              @click="login"
              class="btn btn-outline-primary"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/plugin/security/store'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const username = computed(() => authStore.keycloak?.tokenParsed?.preferred_username || '')

const login = () => authStore.login()
const logout = async () => {
  await authStore.logout()
  router.push('/')
}
</script>
