import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { ChildKey } from '@/api/enums'
import { Course } from '@/api/types'

export const useCourses = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: [ChildKey.Courses],
    queryFn: () => api.getDbChild<Course[]>(ChildKey.Courses),
    select: (data) => {
      const result = data
        ? Object.keys(data).map((key: string) => data[key as keyof typeof data])
        : // .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)
          null

      // если сортировку делать сразу после мэп, пишет ошибку у 'order', но работает в браузере и так и так
      return [].sort.call(
        result,
        ({ order: orderA }, { order: orderB }) => orderA - orderB
      )
    },
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
