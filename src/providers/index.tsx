import * as React from 'react'

import AppThemeProvider from './Theme'

type PropsType = {
  children: React.ReactNode
}

const Providers = ({ children }: PropsType) => {
  return <AppThemeProvider>{children}</AppThemeProvider>
}

export default Providers
