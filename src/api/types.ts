import { EndpointPath } from './enums'

export type Endpoint = {
  endpointPath: EndpointPath
  param?: string
  auth?: boolean
}

type Course = {
  _id: string
  description: string
  directions: string[]
  fitting: string[]
  workouts: string[]
}

export type CourseResponse = Record<string, Course>