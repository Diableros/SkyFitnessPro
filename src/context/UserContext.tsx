import * as React from 'react'

import { INIT_USER_STATE } from './constants'
import { UserContext } from './types'

export const Context = React.createContext<UserContext>({
  state: INIT_USER_STATE,
  dispatch: () => {
    return null
  },
})

export const useUserContext = () => {
  const userContext = React.useContext(Context)
  if (!userContext) {
    throw new Error('useUserContext can be accessed only under Providers')
  }
  return userContext
}
