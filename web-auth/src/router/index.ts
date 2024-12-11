import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@/plugin/security/router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/AdminView.vue'),
      meta: {
        requiresAuth: true,
        resource: 'admin-dashboard',
        permissions: ['view'],
      },
    },
    {
      path: '/supervisor',
      name: 'supervisor',
      component: () => import('@/views/SupervisorView.vue'),
      meta: {
        requiresAuth: true,
        resource: 'supervisor-dashboard',
        permissions: ['view'],
      },
    },
    {
      path: '/agent',
      name: 'agent',
      component: () => import('@/views/AgentView.vue'),
      meta: {
        requiresAuth: true,
        resource: 'agent-dashboard',
        permissions: ['view'],
      },
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('@/views/UnauthorizedView.vue'),
    },
  ],
})

router.beforeEach(authGuard)
export default router
