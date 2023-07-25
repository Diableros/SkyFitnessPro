import * as React from 'react'

import AppThemeProvider from './AppThemeProvider'
import ReactQueryProvider from './ReactQueryProvider'
import AppRouterProvider from './RouterProvider'

type PropsType = {
  children: React.ReactNode
}

const Providers = ({ children }: PropsType) => {
  return (
    <ReactQueryProvider>
      <AppThemeProvider>
        <AppRouterProvider>{children}</AppRouterProvider>
      </AppThemeProvider>
    </ReactQueryProvider>
  )
}

export default Providers
