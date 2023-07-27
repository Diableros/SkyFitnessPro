import { UserAction } from './enums'

export type UserActionType =
  | {
      type: UserAction.Login
      payload: boolean
    }
  | {
      type: UserAction.Logout
      payload: boolean
    }
