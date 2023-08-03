import { User } from 'firebase/auth'

import { UserState } from '../types'
import { Action } from './enums'

export type UserAction =
  | {
      type: Action.Login
      payload: User
    }
  | {
      type: Action.Logout
      payload?: object
    }
  | {
      type: Action.UpdateEmail
      payload: string
    }

export type UserReducer = (state: UserState, action: UserAction) => UserState
