import firebase from 'firebase/compat/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.public.FIREBASE_API_KEY,
    authDomain: config.public.FIREBASE_AUTH_DOMAIN,
    projectId: config.public.FIREBASE_PROJECT_ID,
    storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID,
    appId: config.public.FIREBASE_APP_ID,
  }
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

  if (process.env.NODE_ENV !== 'production') {
    connectAuthEmulator(getAuth(), config.public.FIREBASE_AUTH_EMULATOR_URL)
  }
})
