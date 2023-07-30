import * as React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { useUserContext } from '@/context'

import { routes } from '@/router/appRoutes'

const AppRouterProvider = ({ children }: { children: React.ReactNode }) => {
  const { user: access } = useUserContext()

  React.useEffect(() => {
    console.log('User state from router provider', access)
  }, [access])

  return (
    <RouterProvider router={createBrowserRouter(routes(children, !!access))} />
  )
}

export default AppRouterProvider
