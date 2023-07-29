export const enum EndpointPath {
  Courses = '/courses.json',
  Workouts = '/workouts',
  Users = '/users',

  Login = '/accounts:signInWithPassword',
  SignUp = '/accounts:signUp',

  User = '/users/:id.json',
}

export const enum QueryKey {
  Courses = 'courses',
  Login = 'login',
}
