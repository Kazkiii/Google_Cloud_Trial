import type { Auth, User } from 'firebase/auth'
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth'

export const useAuth = (auth: Auth = getAuth()) => {
  const user = ref<User | null | undefined>(auth.currentUser)
  const isAuthed = computed(() => !!user.value)
  auth.onIdTokenChanged((authUser) => (user.value = authUser))

  const checkAuthState = () => {
    if (process.server) return
    const auth = getAuth()
    onAuthStateChanged(auth, (changedUser) => {
      if (changedUser) user.value = changedUser
      else user.value = null
    })
  }

  const login = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  const logout = async () => {
    await signOut(auth)
    user.value = null
  }

  return { isAuthed, user, checkAuthState, login, logout }
}
