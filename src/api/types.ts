export type AuthRequest = {
  email: string
  password: string
}
import { EndpointPath } from './enums'

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
