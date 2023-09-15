

export const firebase = {
  WEB_API_KEY: process.env.FIREBASE_WEB_API_KEY,
  SIGN_UP_API_URL: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
  SIGN_IN_API_URL: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
}

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}