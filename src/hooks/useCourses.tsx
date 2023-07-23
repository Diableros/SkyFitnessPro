import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { QueryKey } from '@/api/enums'

const useCourses = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.Courses],
    queryFn: () => api.getCourses(),
    staleTime: 60 * 60 * 1000,
  })

  const convertData =
    data && !(data instanceof Error)
      ? Object.keys(data)
          .map((key) => data[key])
          .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)
      : data

  return {
    data: convertData,
    isLoading,
  }
}

export default useCourses
