import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { ChildKey } from '@/api/enums'
import { Course } from '@/api/types'

export const useCourses = () => {
  const {
    data: coursesObj,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: [ChildKey.Courses],
    queryFn: () => api.getDbChild<Record<string, Course>>(ChildKey.Courses),
    staleTime: 60 * 60 * 1000,
  })
  const data = coursesObj
    ? Object.keys(coursesObj)
        .map((key: string) => coursesObj[key])
        .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)
    : null

  return {
    data,
    isLoading,
    error,
    isError,
  }
}
