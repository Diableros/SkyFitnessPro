import ApiService from '@/api/ApiService'

import { UserState } from './types'

export const INIT_USER_STATE: UserState = {
  user: ApiService.user,
}
