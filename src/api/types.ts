import { EndpointPath } from './enums'

export type Credentials = {
  email: string
  password: string
}

export type LoginRequest = Credentials & {
  clientType: 'CLIENT_TYPE_WEB'
  returnSecureToken: true
}

export type SignUpResponse = {
  kind: string
  localId: string
  email: string
  displayName: string
  idToken: string
  refreshToken: string
  expiresIn: string
}

export type LoginResponse = SignUpResponse & {
  registered: boolean
}

export type AuthErrorResponse = {
  error: {
    code: number
    message: string
    errors: Record<string, string>[]
  }
}

export type Endpoint = {
  endpointPath: EndpointPath
  param?: string
  auth?: boolean
}

export type Course = {
  _id: string
  description: string
  directions: string[]
  fitting: string[]
  nameEN: string
  nameRU: string
  order: number
  workouts: string[]
}

export type Workout = {
  _id: string
  name: string
  video: string
  exercises?: Exercise[]
}

export type Exercise = {
  name: string
  quantity: number
}

export type CourseResponse = Record<string, Course>

export type UserData = {
  refreshToken?: string
  email?: string
  name?: string
  localId?: string
}

export type CourseProgress = Record<string, number[]>

export type UserAccount = Record<string, CourseProgress>

export type UseAuth = {
  email: string
  password: string
  isSignUp?: boolean
}
