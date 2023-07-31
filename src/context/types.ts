import { User } from 'firebase/auth'

import { UserAction } from './reducer/types'

export type UserState = {
  user: User | undefined
}

export type UserContext = UserState & {
  dispatch: React.Dispatch<UserAction>
}
