import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { ChildKey } from '@/api/enums'
import { Course } from '@/api/types'

export const useCourses = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: [ChildKey.Courses],
    queryFn: () => api.getDbChild<Course[]>(ChildKey.Courses),
    //select(data) {},
    staleTime: 60 * 60 * 1000,
  })

  //  const dataSorted = Object.keys(data)
  //         .map((key: string) => data[key])
  //         //   .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)
  //  console.log(`data =>`, data)

  return {
    data,
    isLoading,
    error,
    isError,
  }
}
