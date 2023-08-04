import * as React from 'react'
import { useMutation } from '@tanstack/react-query'
import { User } from 'firebase/auth'

import api from '@/api/ApiService'
import { Action, useUserContext } from '@/context'
import { UserState } from '@/context/types'

import { UseAuth } from '../types'

export const useAuth = () => {
  const [, dispatch] = useUserContext()

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
      const userState: UserState = {
        uid: api.user?.uid || 'empty',
        email: api.user?.email || 'empty',
      }

      dispatch({
        type: Action.Login,
        payload: userState,
      })
    }
  }, [isSuccess])

  return { auth, data, isLoading, error, isError }
}
