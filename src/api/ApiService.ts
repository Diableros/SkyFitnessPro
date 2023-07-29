import {
  API_REQUEST_DELAY,
  USER_INITIAL_DATA,
  USER_INITIAL_PROGRESS,
} from './constants'
import {
  AuthErrorResponse,
  CourseResponse,
  Credentials,
  Endpoint,
  LoginResponse,
  SignUpResponse,
  UserAccount,
  UserData,
} from './types'
import { EndpointPath } from './enums'

class ApiService {
  private static instance: ApiService
  private googleIdentApiUrl?: string
  private dbUrl?: string
  private dbApiKey?: string
  public user: UserData

  private constructor() {
    this.dbUrl = import.meta.env.VITE_FIREBASE_URL
    this.dbApiKey = import.meta.env.VITE_FIREBASE_API_KEY
    this.googleIdentApiUrl = import.meta.env.VITE_GOOGLE_IDENTITY_API_URL
    this.user = USER_INITIAL_DATA

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

    // TODO  заюзать URLSearchParams
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

  private addDbUser = async (localId: UserData['localId']) => {
    return await this.dbRequest<UserAccount, Error>(
      {
        endpointPath: EndpointPath.User,
        param: localId,
        auth: true,
      },
      {
        method: 'PATCH',
        body: JSON.stringify({ ...USER_INITIAL_PROGRESS, _id: localId }),
      }
    )
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

  public login = async (credentials: Credentials): Promise<boolean> => {
    const loginResponse = await this.authRequest<LoginResponse>(
      EndpointPath.Login,
      credentials
    )

    if ('kind' in loginResponse) {
      const {
        idToken: refreshToken,
        email,
        displayName: name,
        localId,
      } = loginResponse

      this.user = { refreshToken, email, name, localId }

      console.log(`User ${localId} was logged`)
      return true
    } else {
      console.warn(loginResponse.error.message)
      return false
    }
  }

  public signUp = async ({
    email,
    password,
  }: Credentials): Promise<boolean> => {
    const signUpResponse = await this.authRequest<SignUpResponse>(
      EndpointPath.SignUp,
      { email, password }
    )

    if ('kind' in signUpResponse) {
      console.log('User registered')

      const { idToken: refreshToken, email, localId } = signUpResponse
      this.user = { refreshToken, email }

      return await this.addDbUser(localId).then((response) => {
        if ('_id' in response) {
          console.log(`User ${response._id} successfully added in DB`)
          return true
        } else {
          console.warn(response.message)
          return false
        }
      })
    } else {
      console.warn(signUpResponse.error.message)
      return false
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
