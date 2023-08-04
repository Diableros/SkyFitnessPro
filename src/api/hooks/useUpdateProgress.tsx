import { useMutation } from '@tanstack/react-query'

import api from '@/api/ApiService'

export type UpdateProgressOptions = {
  courseId: string
  workoutId: string
  exerciseProgressArray: number[]
}

export const useUpdateProgress = () => {
  const {
    mutate: UpdateProgress,
    data: exercises,
    isLoading,
    error,
  } = useMutation<boolean, Error, UpdateProgressOptions>(
    ({ courseId, workoutId, exerciseProgressArray }) =>
      api.updateUserProgress(courseId, workoutId, exerciseProgressArray)
  )

  return { UpdateProgress, exercises, isLoading, error }
}
