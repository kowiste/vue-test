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
        roles: ['admin'],
      },
    },
    {
      path: '/supervisor',
      name: 'supervisor',
      component: () => import('@/views/SupervisorView.vue'),
      meta: {
        requiresAuth: true,
        roles: ['supervisor', 'admin'],
      },
    },
    {
      path: '/agent',
      name: 'agent',
      component: () => import('@/views/AgentView.vue'),
      meta: {
        requiresAuth: true,
        roles: ['agent', 'supervisor', 'admin'],
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
