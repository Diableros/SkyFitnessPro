export enum RouterPath {
  Home = '/',
  Course = '/course/:courseOrder',
  Auth = '/auth',
  Profile = '/profile',
  Workout = '/workout/:id',
  NotFound = '*',
  Sandbox = '/sandbox',
}

export const enum LinkPath {
  Course = '/course',
  Workout = '/workout',
}
