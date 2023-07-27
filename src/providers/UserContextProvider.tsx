import * as React from 'react'

import { Context, INIT_USER_STATE, UserReducer, userReducer } from '@/context'

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = React.useReducer<UserReducer>(
    userReducer,
    INIT_USER_STATE
  )

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export default UserContextProvider
