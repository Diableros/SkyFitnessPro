import { UserState } from '../types'
import { Action } from './enums'

export type UserAction = {
  type: Action.Login
  payload: boolean
}

export type UserReducer = (state: UserState, action: UserAction) => UserState
