import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/theme/constants'
import GlobalStyle from '@/theme/global.style'

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

export default AppThemeProvider
