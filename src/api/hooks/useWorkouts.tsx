import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { ChildKey } from '@/api/enums'
import { Workout } from '@/api/types'

export const useWorkouts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [ChildKey.Workouts],
    queryFn: () => api.getDbChild<Workout[]>(ChildKey.Workouts),
    select: (data) => {
      const result = data
        ? Object.keys(data).map((key: string) => data[key as keyof typeof data])
        : null

      return result
    },
    staleTime: 60 * 60 * 1000,
  })

  return {
    data,
    isLoading,
    error,
    isError,
  }
}
