import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path == '/login') return

  const { checkAuthState, user } = useAuth()
  checkAuthState()

  console.log(user.value)

  if (!user.value) return await navigateTo('/login', { replace: true })
})
