import * as React from 'react'
import { useMutation } from '@tanstack/react-query'
import { User } from 'firebase/auth'

import api from '@/api/ApiService'
import { Action, useUserContext } from '@/context'

import { UseAuth } from '../types'

export const useAuth = () => {
  const { dispatch } = useUserContext()

  const {
    mutate: auth,
    data,
    isLoading,
    error,
    isError,
    isSuccess,
  } = useMutation<User, Error, UseAuth>(({ email, password, isSignUp }) =>
    isSignUp ? api.createUser(email, password) : api.loginUser(email, password)
  )

  React.useEffect(() => {
    if (isSuccess) {
      dispatch({
        type: Action.Login,
        payload: data,
      })
    }
  }, [isSuccess])

  return { auth, data, isLoading, error, isError }
}
