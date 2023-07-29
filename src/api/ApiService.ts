import { FirebaseOptions, initializeApp } from 'firebase/app'
import {
  child,
  DatabaseReference,
  get,
  getDatabase,
  ref,
  remove,
  set,
  update,
} from 'firebase/database'

import { ChildKey } from './enums'

class ApiService {
  private static instance: ApiService
  private db: DatabaseReference

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

    if (!this.db) throw new Error(`Firestore was not connected`)
  }

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
      console.log('Api instance created')
    }
    return ApiService.instance
  }

  getChild = async <T>(childKey: ChildKey) => {
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

  // createUser(userData) {
  //   return set(child(dbRef, 'user'), userData)
  //     .then(() => {
  //       console.log('User created successfully')
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }

  // updateUser(userData) {
  //   return update(child(dbRef, 'user'), userData)
  //     .then(() => {
  //       console.log('User updated successfully')
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }
}

export default ApiService.getInstance()
