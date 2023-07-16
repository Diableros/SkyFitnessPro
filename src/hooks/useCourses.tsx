import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { QueryKey } from '@/api/enums'

const useCourses = () => {
  return useQuery({
    queryKey: [QueryKey.Courses],
    queryFn: () => api.getCourses(),
    staleTime: 3600,
    refetchInterval: 0,
  })
}

export default useCourses
