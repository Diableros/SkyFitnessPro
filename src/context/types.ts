import { UserAction } from './reducer/types'

export type UserState = {
  logged: boolean
}

export type UserContext = {
  state: UserState
  dispatch: React.Dispatch<UserAction>
}
