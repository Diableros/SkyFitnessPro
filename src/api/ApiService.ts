import { initializeApp } from '@firebase/app'
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth'
import {
  child,
  DatabaseReference,
  get,
  getDatabase,
  ref,
  set,
  update,
} from '@firebase/database'

import { FirebaseOptions } from '@firebase/app-types'

class ApiService {
  private static instance: ApiService | null = null
  private dbRef: DatabaseReference
  private auth: Auth

  private constructor() {
    const dbUrl = import.meta.env.VITE_FIREBASE_URL
    const dbApiKey = import.meta.env.VITE_FIREBASE_API_KEY

    if (!dbUrl)
      throw new Error(
        'DB_URL is undefined. Check the .env.local file in the package directory.'
      )

    const firebaseConfig: FirebaseOptions = {
      databaseURL: dbUrl,
      apiKey: dbApiKey,
    }
    const app = initializeApp(firebaseConfig)
    this.auth = getAuth(app)
    this.dbRef = ref(getDatabase(app))
  }

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
    }
    return ApiService.instance
  }

  async getData(): Promise<void> {
    return get(child(this.dbRef, '/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val())
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async getChildData(childKey: string): Promise<void> {
    return get(child(this.dbRef, childKey))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(`SUCCESS: get data from ${childKey}`)
          return snapshot.val()
        } else {
          console.warn(`Data from '${childKey}' not available.`)
          return false
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async registerUser(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        console.log('User registered successfully')
      })
      .catch((error) => {
        console.error(`I'm from catch registerUser!!!`, error)
      })
  }

  async loginUser(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        console.log('User logged in successfully')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async logoutUser(): Promise<void> {
    return signOut(this.auth)
      .then(() => {
        console.log('User logged out successfully')
      })
      .catch((error) => {
        // TODO написать функционал по очистке стейта пользака внутри класса
        console.error(error)
      })
  }
}

export default ApiService.getInstance()
