import { FirebaseOptions, initializeApp } from 'firebase/app'
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
} from 'firebase/auth'
import {
  child,
  DatabaseReference,
  get,
  getDatabase,
  ref,
  update,
} from 'firebase/database'

import { USER_INITIAL_PROGRESS } from './constants'
import { ChildKey } from './enums'

class ApiService {
  private static instance: ApiService
  private db: DatabaseReference
  private auth: Auth

  private constructor() {
    const databaseURL = import.meta.env.VITE_FIREBASE_URL
    const apiKey = import.meta.env.VITE_FIREBASE_API_KEY
    const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID

    if (!databaseURL || !apiKey || !projectId)
      throw new Error(
        'Some local data is undefined. Check the .env.local file in the package directory.'
      )

    const firebaseConfig: FirebaseOptions = {
      apiKey,
      databaseURL,
      projectId,
    }

    const app = initializeApp(firebaseConfig)
    this.db = ref(getDatabase(app))
    this.auth = getAuth(app)

    if (!this.db) throw new Error(`Firebase Realtime Database was not connected`)
  }

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
      console.log('Api instance created')
    }
    return ApiService.instance
  }

  createUser = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(({ user }) => {
        console.log('User registered successfully')
        this.createUserProgress()
        return user
      })
      .catch((error) => {
        throw new Error(error)
      })
  }

  loginUser = async (email: string, password: string) => {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(({ user }) => {
        console.log('User logged in successfully')
        return user
      })
      .catch((error) => {
        throw new Error(error)
      })
  }

  logoutUser = async () => {
    return signOut(this.auth)
      .then(() => {
        console.log('User logged out successfully')
        return true
      })
      .catch((error) => {
        throw new Error(error)
      })
  }

  updateUserName = async (name: string) => {
    if (this.auth.currentUser) {
      return updateProfile(this.auth.currentUser, { displayName: name })
        .then(() => {
          console.log('Username updated successfully')
          true
        })
        .catch((error) => {
          throw new Error(error)
        })
    }
    console.log('User is not logged')
  }

  updateUserPassword = async (newPassword: string) => {
    if (this.auth.currentUser) {
      return updatePassword(this.auth.currentUser, newPassword)
        .then(() => {
          console.log('Password updated successfully')
          true
        })
        .catch((error) => {
          throw new Error(error)
        })
    }
    console.log('Not set currentUser')
  }

  createUserProgress = async () => {
    if (this.auth.currentUser) {
      const { uid } = this.auth.currentUser

      return update(child(this.db, 'users'), {
        [uid]: { ...USER_INITIAL_PROGRESS, _id: uid },
      })
        .then(() => {
          console.log('User progress created successfully')
          return true
        })
        .catch((error) => {
          throw new Error(error)
        })
    }
    console.log('Not set currentUser')
  }

  updateUserProgress = async (
    courseId: string,
    workoutId: string,
    exerciseProgressArray: number[]
  ) => {
    if (this.auth.currentUser) {
      const { uid } = this.auth.currentUser

      const updatedExercisePath = [
        ChildKey.Users,
        uid,
        ChildKey.Courses,
        courseId,
      ].join('/')

      return update(child(this.db, updatedExercisePath), {
        [workoutId]: exerciseProgressArray,
      })
        .then(() => {
          console.log('User progress updated successfully')
          return true
        })
        .catch((error) => {
          throw new Error(error)
        })
    }
    console.warn('updateUserProgress filed. Not set currentUser')
  }

  getDbChild = async <T>(childKey: ChildKey) => {
    return await get(child(this.db, childKey))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const dataObject = snapshot.val()
          const data = Object.keys(dataObject)
            .map((key) => dataObject[key])
            .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)

          return data as T
        } else {
          console.log('No data available')
          return
        }
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

export default ApiService.getInstance()
