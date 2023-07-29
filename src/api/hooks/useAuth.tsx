import { useQuery, UseQueryResult } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { QueryKey } from '@/api/enums'
import {
  AuthErrorResponse,
  Credentials,
  LoginResponse,
  SignUpResponse,
} from '@/api/types'

type UseAuth = (
  credentials: Credentials,
  type: 'login' | 'signup'
) => UseQueryResult

const useAuth: UseAuth = (credentials, type) => {
  return useQuery<LoginResponse | SignUpResponse, AuthErrorResponse>(
    [QueryKey.Login, credentials],
    () => api.post()
  )
}

export default useAuth
