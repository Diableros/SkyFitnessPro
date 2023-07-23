import { Navigate, RouteObject } from 'react-router-dom'

import { RouterPath } from './enums'

import MainLayout from '@/layout/MainLayout'
import Auth from '@/pages/Auth'
import Course from '@/pages/Course'
import NotFound from '@/pages/NotFound'
import Profile from '@/pages/Profile/Profile'
import Workout from '@/pages/Workout'

export const routes = (
  children: React.ReactNode,
  access = true
): RouteObject[] => {
  return [
    {
      path: RouterPath.Home,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: children,
        },
        {
          path: RouterPath.Course,
          element: <Course />,
        },
        {
          path: RouterPath.Auth,
          element: <Auth />,
        },
        {
          path: RouterPath.Profile,
          element: access ? <Profile /> : <Navigate to={RouterPath.Home} />,
        },
        {
          path: RouterPath.Workout,
          element: access ? <Workout /> : <Navigate to={RouterPath.Home} />,
        },
        {
          path: RouterPath.NotFound,
          element: <NotFound />,
        },
      ],
    },
  ]
}
