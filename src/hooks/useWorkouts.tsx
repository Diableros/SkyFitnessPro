import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { ChildKey, QueryKey } from '@/api/enums'
import { Workout } from '@/api/types'

const useWorkouts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [ChildKey.Workouts],
    queryFn: () => api.getChild<Workout[]>(ChildKey.Workouts),
    staleTime: 60 * 60 * 1000,
  })
  // console.log(`data =>`, data)

  return {
    data,
    isLoading,
    error,
    isError,
  }
}

export default useWorkouts
