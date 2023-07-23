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
  idToken: string
  refreshToken: string
  expiresIn: string
}

export type LoginResponse = SignUpResponse & {
  registered: boolean
  displayName: string
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

export type CourseResponse = Record<string, Course>

export type UserState = {
  isLogged?: boolean
  refreshToken?: string
  email?: string
  name?: string
}
