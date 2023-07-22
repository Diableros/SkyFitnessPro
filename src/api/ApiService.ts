import { API_REQUEST_DELAY, USER_INITIAL_STATE } from './constants'
import {
  AuthErrorResponse,
  CourseResponse,
  Credentials,
  Endpoint,
  LoginResponse,
  SignUpResponse,
  UserState,
} from './types'
import { EndpointPath } from './enums'

class ApiService {
  private static instance?: ApiService
  private googleIdentApiUrl?: string
  private dbUrl?: string
  private dbApiKey?: string
  public user: UserState

  private constructor() {
    this.dbUrl = import.meta.env.VITE_FIREBASE_URL
    this.dbApiKey = import.meta.env.VITE_FIREBASE_API_KEY
    this.googleIdentApiUrl = import.meta.env.VITE_GOOGLE_IDENTITY_API_URL
    this.user = USER_INITIAL_STATE

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

  private dbRequest = async <T = unknown, U = unknown>(
    { endpointPath, param, auth = false }: Endpoint,
    config: RequestInit
  ): Promise<T | U> => {
    const authParam = auth ? `?auth=${this.user.refreshToken}` : ''

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
      }, API_REQUEST_DELAY)
    })

    if (!dbResponse.ok) {
      const errorResponse = await dbResponse.json()
      throw errorResponse as U
    }

    const successResponse = await dbResponse.json()
    return successResponse as T
  }

  private authRequest = async <T = unknown, U = AuthErrorResponse>(
    endpointPath: EndpointPath,
    credentials: Credentials
  ): Promise<T | U> => {
    const fullRequestURL = `${this.googleIdentApiUrl}${endpointPath}${this.dbApiKey}`

    const defaultHeaders = {
      'Content-Type': 'application/json',
    }

    const config: RequestInit = {
      headers: {
        ...defaultHeaders,
      },
      body: JSON.stringify(credentials),
      method: 'POST',
    }

    const authResponse = await fetch(fullRequestURL, config)

    if (!authResponse.ok) {
      const errorResponse = await authResponse.json()
      throw errorResponse as U
    }

    const successResponse = await authResponse.json()
    return successResponse as T
  }

  public login = async (credentials: Credentials) => {
    const loginResponse = await this.authRequest<LoginResponse>(
      EndpointPath.Login,
      credentials
    )

    if ('kind' in loginResponse) {
      const { idToken: refreshToken, email, displayName: name } = loginResponse

      this.user = { refreshToken, email, name, isLogged: true }

      console.log('User state was successfully setted: ', this.user)
    } else {
      console.warn(loginResponse.error.message)
    }
  }

  public signUp = async ({ email, password }: Credentials) => {
    const signUpResponse = await this.authRequest<SignUpResponse>(
      EndpointPath.SignUp,
      { email, password }
    )

    if ('kind' in signUpResponse) {
      const { idToken: refreshToken, email } = signUpResponse

      this.user = { refreshToken, email, isLogged: true }

      console.log(
        'User registered! User state was successfully setted: ',
        this.user
      )
    } else {
      console.warn(signUpResponse.error.message)
    }
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
