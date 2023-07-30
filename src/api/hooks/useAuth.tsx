import { useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { Action, useUserContext } from '@/context'

import { QueryKey } from '../enums'

export const useAuth = (
  email: string,
  password: string,
  authType: 'login' | 'signup'
) => {
  const { dispatch } = useUserContext()

  const { data, isLoading, error, isError } = useQuery({
    queryKey: authType === 'login' ? [QueryKey.Login] : [QueryKey.SignUp],
    queryFn: () =>
      authType === 'login'
        ? api.loginUser(email, password)
        : api.createUser(email, password),
    staleTime: 60 * 60 * 1000,
    enabled: !!email && !!password && !!authType,
    onSuccess: (data) => {
      if (data) {
        console.log('User dispatched in context state')
        dispatch({
          type: Action.Login,
          payload: data,
        })
      }
    },
    retry: 0,
  })

  return { data, isLoading, error, isError }
}
