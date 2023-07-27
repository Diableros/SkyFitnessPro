import { UserActionType } from './reducer/types'

export type UserState = {
  logged: boolean
}

export type UserContextType = {
  dispatch: React.Dispatch<UserActionType>
}
