import { UserState } from './types'

export const API_REQUEST_DELAY = 3 * 1000

export const USER_INITIAL_STATE: UserState = {
  email: '',
  isLogged: false,
  name: '',
  refreshToken: '',
}
