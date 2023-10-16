import firebase from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: config.FIREBASE_AUTH_DOMAIN,
    projectId: config.FIREBASE_PROJECT_ID,
    storageBucket: config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
    appId: config.FIREBASE_APP_ID,
  }
  if (!firebase.getApps().length) firebase.initializeApp(firebaseConfig)

  if (process.env.NODE_ENV !== 'production') {
    connectAuthEmulator(getAuth(), process.env.FIREBASE_AUTH_EMULATOR_URL ?? '')
  }
})
