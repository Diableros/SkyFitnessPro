import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { ChildKey } from '@/api/enums'
import { Course } from '@/api/types'

const useCourses = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: [ChildKey.Courses],
    queryFn: () => api.getDbChild<Course[]>(ChildKey.Courses),
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

export default useCourses
