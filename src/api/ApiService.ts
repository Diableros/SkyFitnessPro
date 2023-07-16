import { CourseResponse, Endpoint } from './types'
import { EndpointPath } from './enums'

class ApiService {
  private static instance?: ApiService
  private idToken?: string
  private googleIdentApiUrl?: string
  private dbUrl?: string
  private dbApiKey?: string
  public refreshToken?: string
  public isLogged = false

  private constructor() {
    this.dbUrl = import.meta.env.VITE_FIREBASE_URL
    this.dbApiKey = import.meta.env.VITE_FIREBASE_API_KEY
    this.googleIdentApiUrl = import.meta.env.VITE_GOOGLE_IDENTITY_API_URL

    if (!this.dbUrl || !this.dbApiKey || !this.googleIdentApiUrl)
      throw new Error(
        'Some local data is undefined. Check the .env.local file in the package directory.'
      )
  }

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
      console.log('Api instance created')
    }
    return ApiService.instance
  }

  private async dbRequest<T = unknown, U = unknown>(
    { endpointPath, param, auth = false }: Endpoint,
    config: RequestInit
  ): Promise<T | U> {
    const authParam = auth ? `?auth=${this.idToken}` : ''

    const fullRequestURL = `${this.dbUrl}${
      param ? endpointPath.replace(':id', param) : endpointPath
    }${authParam}`

    const defaultHeaders = {
      'Content-Type': 'application/json',
    }

    const mergedConfig: RequestInit = {
      headers: {
        ...defaultHeaders,
        ...config.headers,
      },
      ...config,
    }

    const dbResponse = await new Promise<Response>((resolve) => {
      const timer = setTimeout(() => {
        resolve(fetch(fullRequestURL, mergedConfig))
        clearTimeout(timer)
      }, 1000)
    })

    if (!dbResponse.ok) {
      const errorResponse = await dbResponse.json()
      throw errorResponse as U
    }

    const successResponse = await dbResponse.json()
    return successResponse as T
  }

  public getCourses = () => {
    return this.dbRequest<CourseResponse, Error>(
      {
        endpointPath: EndpointPath.Courses,
      },
      { method: 'GET' }
    )
  }
}

export default ApiService.getInstance()
