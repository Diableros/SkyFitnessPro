import { UserState } from '../types'
import { Action } from './enums'

export type UserAction =
  | {
      type: Action.Login
      payload: boolean
    }
  | {
      type: Action.Logout
      payload: boolean
    }

export type UserReducer = (state: UserState, action: UserAction) => UserState
