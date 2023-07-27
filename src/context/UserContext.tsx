import * as React from 'react'

import { INIT_USER_STATE } from './constants'
import { UserContextType } from './types'

export const UserContext = React.createContext<UserContextType>({
  ...INIT_USER_STATE,
  dispatch: () => {
    return null
  },
})
