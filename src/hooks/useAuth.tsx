import * as React from 'react'
import { Query, useQuery } from '@tanstack/react-query'

import api from '@/api/ApiService'
import { QueryKey } from '@/api/enums'
import { Credentials } from '@/api/types'

type UseAuth = (credentials: Credentials, type: 'login' | 'signup') => void

const useAuth: UseAuth = (credentials, type) => {
  const { data, isLoading, isError, error } = useQuery(
    [QueryKey.Login, credentials],
    () => api.post()
  )

  return { data, isLoading, isError, error }
}

export default useAuth
