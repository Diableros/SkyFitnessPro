type ExerciseObjectType = {
  name: string
  quantity: number
}

type ExercisesType = {
  map(
    arg0: (
      { name }: any,
      index: number
    ) => import('react/jsx-runtime').JSX.Element
  ): unknown
  [index: number]: ExerciseObjectType
}

export type WorkoutsType = {
  exercises: ExercisesType
  name: string
  video: string
  _id: string
}

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
