import { UserAction } from './reducer/types'

export type UserState = {
  uid: string
  email: string
}

export type UserContext = [UserState, React.Dispatch<UserAction>]
