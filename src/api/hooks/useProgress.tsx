import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { ChildKey } from '@/api/enums'
import { useUserContext } from '@/context'

import { UserAccount } from '../types'

export const useProgress = () => {
  const { user } = useUserContext()

  const {
    data: courses,
    isLoading: isProgressLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () =>
      api.getDbChild<UserAccount>(`${ChildKey.Users}/${user?.uid}`),
    select: (data) => {
      const result = { ...data }
      delete result?._id
      return result
    },
    staleTime: 60 * 60 * 1000,
  })
  // console.log('курсы пользователя=>', courses)

  return {
    courses,
    isProgressLoading,
    error,
    isError,
  }
}
