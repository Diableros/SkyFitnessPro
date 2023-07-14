import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { routes } from '@/router/appRoutes'

const AppRouterProvider = ({ children }: { children: React.ReactNode }) => {
  return <RouterProvider router={createBrowserRouter(routes(children))} />
}

export default AppRouterProvider
