import * as React from 'react'

import { Context, UserReducer, userReducer } from '@/context'

import { INIT_USER_STATE } from '@/context/constants'

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const userContext = React.useReducer<UserReducer>(
    userReducer,
    INIT_USER_STATE
  )

  return <Context.Provider value={userContext}>{children}</Context.Provider>
}

export default UserContextProvider
