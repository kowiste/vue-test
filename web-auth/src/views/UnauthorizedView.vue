<template>
  <div class="text-center mt-5">
    <div class="alert alert-danger" role="alert">
      <h4 class="alert-heading">Access Denied!</h4>
      <p>You don't have permission to access this page.</p>
      <hr>
      <p class="mb-0">
        Please contact your administrator if you believe this is a mistake.
      </p>
    </div>
    
    <button @click="goHome" class="btn btn-primary mt-3">
      Go to Home Page
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => router.push('/')
</script>