import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path == '/login') return

  const { checkAuthState, user } = useAuth()
  checkAuthState()

  if (!user.value) navigateTo('/login', { replace: true })
})
