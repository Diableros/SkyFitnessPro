export const enum EndpointPath {
  Courses = '/courses.json',
  Workouts = '/workouts',
  Users = '/users',

  Login = '/accounts:signInWithPassword',
  SignUp = '/accounts:signUp',

  User = '/users/:id.json',
}

export const enum QueryKey {
  Auth = 'auth',
  Logout = 'logout',
  UserProgress = 'userProgress',
}

export const enum ChildKey {
  Courses = 'courses',
  Users = 'users',
  Workouts = 'workouts',
}
