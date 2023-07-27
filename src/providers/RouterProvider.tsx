import * as React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { useUserContext } from '@/context'

import { routes } from '@/router/appRoutes'

const AppRouterProvider = ({ children }: { children: React.ReactNode }) => {
  const { logged: access } = useUserContext()

  return (
    <RouterProvider router={createBrowserRouter(routes(children, access))} />
  )
}

export default AppRouterProvider
