import * as React from 'react'

import AppThemeProvider from './AppThemeProvider'
import AppRouterProvider from './RouterProvider'

type PropsType = {
  children: React.ReactNode
}

const Providers = ({ children }: PropsType) => {
  return (
    <AppThemeProvider>
      <AppRouterProvider>{children}</AppRouterProvider>
    </AppThemeProvider>
  )
}

export default Providers
