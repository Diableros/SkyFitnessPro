import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { QueryKey } from '@/api/enums'

const useCourses = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.Courses],
    queryFn: () => api.getCourses(),
    staleTime: 3600,
    refetchInterval: 0,
  })

  const convertData =
    data && !(data instanceof Error)
      ? Object.keys(data)
          .map((key) => data[key])
          .map((course) => course)
      : data

  return {
    data: convertData,
    isLoading,
  }
}

export default useCourses
