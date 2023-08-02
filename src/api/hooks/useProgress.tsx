import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { ChildKey } from '@/api/enums'

import { UserAccount } from '../types'

export const useProgress = (userID: string | undefined) => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () =>
      api.getDbChild<[string, ...UserAccount[]]>(`${ChildKey.Users}/${userID}`),
    // ответ с бд приходит в формате массива где первый элемент строка id,  а потом уже идут объекты прогресса
    staleTime: 60 * 60 * 1000,
  })
  const coursesProgress = data?.slice(1)
  console.log('курсы пользователя=>', data)

  return {
    coursesProgress,
    isLoading,
    error,
    isError,
  }
}
