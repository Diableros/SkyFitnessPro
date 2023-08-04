import { UserState } from '../types'
import { Action } from './enums'

export type UserAction =
  | {
      type: Action.Login
      payload: UserState
    }
  | {
      type: Action.Logout
      payload: UserState
    }
  | {
      type: Action.UpdateEmail
      payload: string
    }

export type UserReducer = (state: UserState, action: UserAction) => UserState
