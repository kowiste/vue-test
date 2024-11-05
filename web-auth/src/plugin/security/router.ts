import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from './store'
import type { ResourcePermission, Role } from './types'

export interface AuthMeta {
  requiresAuth?: boolean
  roles?: Role[]
  resource?: string
  permissions?: ResourcePermission[]
}

export async function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore()
  const meta = to.meta as AuthMeta

  if (!meta.requiresAuth) {
    return next()
  }

  if (!authStore.isAuthenticated) {
    await authStore.login(to.fullPath)
    return
  }

  // Check roles if specified
  if (meta.roles && !authStore.hasAnyRole(meta.roles)) {
    return next({ name: 'unauthorized' })
  }

  // Check resource permissions if specified
  if (meta.resource && meta.permissions) {
    const hasPermission = meta.permissions.every((permission) =>
      authStore.hasResourcePermission(meta.resource!, permission)
    )

    if (!hasPermission) {
      return next({ name: 'unauthorized' })
    }
  }

  next()
}
