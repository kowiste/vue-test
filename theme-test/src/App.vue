<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vue3 Bootstrap</a>
      <button class="btn" @click="toggleTheme">
        <i class="bi" :class="theme === 'light' ? 'bi-moon' : 'bi-sun'"></i>
        {{ theme === 'light' ? 'Dark' : 'Light' }} Mode
      </button>
    </div>
  </nav>

  <div class="container mt-4">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composable/useTheme'
import { RouterView } from 'vue-router'

const { theme, toggleTheme } = useTheme()
</script>