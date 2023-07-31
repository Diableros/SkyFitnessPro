import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { ChildKey } from '@/api/enums'
import { Workout } from '@/api/types'

export const useWorkouts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [ChildKey.Workouts],
    queryFn: () => api.getDbChild<Workout[]>(ChildKey.Workouts),
    staleTime: 60 * 60 * 1000,
  })

  return {
    data,
    isLoading,
    error,
    isError,
  }
}
