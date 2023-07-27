export const enum EndpointPath {
  Courses = '/courses.json',
  Workouts = '/workouts',
  Users = '/users',

  Login = '/accounts:signInWithPassword?key=',
  SignUp = '/accounts:signUp?key=',

  User = '/users/:id.json',
}

export const enum QueryKey {
  Courses = 'courses',
}
