import { EndpointPath } from './enums'

export type Endpoint = {
  endpointPath: EndpointPath
  param?: string
  auth?: boolean
}
