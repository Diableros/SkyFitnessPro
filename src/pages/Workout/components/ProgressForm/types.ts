type Directions = {
  [index: number]: string
}

type Fitting = {
  [index: number]: string
}

type Workouts = {
  [index: number]: string
}

type CourseObjectType = {
  description: string
  directions: Directions
  fitting: Fitting
  nameEN: string
  nameRU: string
  order: number
  workouts: Workouts
  _id: string
}

export type CourseType = {
  [index: number]: CourseObjectType
}
