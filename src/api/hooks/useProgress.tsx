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
      api.getDbChild<Record<string, UserAccount>>(
        `${ChildKey.Users}/${user?.uid}`
      ),
    staleTime: 60 * 60 * 1000,
  })
  delete courses?._id
  // console.log('курсы пользователя=>', courses)

  return {
    courses,
    isProgressLoading,
    error,
    isError,
  }
}
