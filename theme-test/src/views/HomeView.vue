// src/views/HomeView.vue
<template>
  <div class="color-showcase">
    <div class="card mb-4">
      <div class="card-header">
        <h4>Bootstrap Color System</h4>
        <p class="mb-0 text-muted">Click theme toggle in navbar to see dark mode variants</p>
      </div>
      <div class="card-body">
        <div class="row g-4">
          <div class="col-md-4" v-for="color in themeColors" :key="color.name">
            <div class="color-block rounded-3 shadow-sm" :class="`bg-${color.class}`">
              <div class="p-4" :class="color.textClass">
                <h5 class="text-capitalize mb-3 fw-bold">{{ color.name }}</h5>
                <div>
                  <code>.bg-{{ color.class }}</code>
                  <div class="mt-2 opacity-75">
                    <small>Text: .text-{{ color.class }}</small>
                  </div>
                </div>
              </div>
              <!-- Color value display -->
              <div class="color-info p-3 border-top" :class="color.textClass">
                <small class="d-block opacity-75">Light mode</small>
                <code>{{ color.lightHex }}</code>
                <small class="d-block mt-2 opacity-75">Dark mode</small>
                <code>{{ color.darkHex }}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const themeColors = [
  { 
    name: 'primary', 
    class: 'primary', 
    textClass: 'text-white',
    lightHex: '#2563eb',
    darkHex: '#3b82f6'
  },
  { 
    name: 'secondary', 
    class: 'secondary', 
    textClass: 'text-white',
    lightHex: '#64748b',
    darkHex: '#94a3b8'
  },
  { 
    name: 'success', 
    class: 'success', 
    textClass: 'text-white',
    lightHex: '#059669',
    darkHex: '#10b981'
  },
  { 
    name: 'danger', 
    class: 'danger', 
    textClass: 'text-white',
    lightHex: '#dc2626',
    darkHex: '#ef4444'
  },
  { 
    name: 'warning', 
    class: 'warning', 
    textClass: 'text-dark',
    lightHex: '#d97706',
    darkHex: '#f59e0b'
  },
  { 
    name: 'info', 
    class: 'info', 
    textClass: 'text-white',
    lightHex: '#0891b2',
    darkHex: '#06b6d4'
  },
  { 
    name: 'light', 
    class: 'light', 
    textClass: 'text-dark',
    lightHex: '#f8fafc',
    darkHex: '#1e293b'
  },
  { 
    name: 'dark', 
    class: 'dark', 
    textClass: 'text-white',
    lightHex: '#0A192F',
    darkHex: '#0f172a'
  },
  { 
    name: 'coral', 
    class: 'coral', 
    textClass: 'text-dark',
    lightHex: '#FF6B6B',
    darkHex: '#ff8585'
  },
  { 
    name: 'mint', 
    class: 'mint', 
    textClass: 'text-dark',
    lightHex: '#4ECCA3',
    darkHex: '#6ee7c0'
  },
  { 
    name: 'lavender', 
    class: 'lavender', 
    textClass: 'text-dark',
    lightHex: '#9B89B3',
    darkHex: '#b4a4c9'
  },
]
</script>

<style scoped>
.color-showcase {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.color-block {
  transition: all 0.3s ease;
  overflow: hidden;
}

.color-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.color-info {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Ensure code elements are easily readable */
code {
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  background: rgba(255, 255, 255, 0.1);
}
</style>