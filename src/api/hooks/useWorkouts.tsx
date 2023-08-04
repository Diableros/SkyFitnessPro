import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { ChildKey } from '@/api/enums'
import { Workout } from '@/api/types'

export const useWorkouts = () => {
  const {
    data: workouts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [ChildKey.Workouts],
    queryFn: () => api.getDbChild<Record<string, Workout>>(ChildKey.Workouts),
    staleTime: 60 * 60 * 1000,
  })

  const data = workouts
    ? Object.keys(workouts).map(
        (key: string) => workouts[key as keyof typeof workouts]
      )
    : null

  return {
    data,
    isLoading,
    error,
    isError,
  }
}
