import * as React from 'react'

import AppThemeProvider from './AppThemeProvider'
import ReactQueryProvider from './ReactQueryProvider'
import AppRouterProvider from './RouterProvider'
import UserContextProvider from './UserContextProvider'

type PropsType = {
  children: React.ReactNode
}

const Providers = ({ children }: PropsType) => {
  return (
    <UserContextProvider>
      <ReactQueryProvider>
        <AppThemeProvider>
          <AppRouterProvider>{children}</AppRouterProvider>
        </AppThemeProvider>
      </ReactQueryProvider>
    </UserContextProvider>
  )
}

export default Providers
