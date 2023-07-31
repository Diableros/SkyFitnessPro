import { useMutation } from '@tanstack/react-query'

import { InputType } from '@/pages/Profile/components/CredsChangeForm/enums'

import api from '@/api/ApiService'

export type UpdateCredsOptions = { updateType: InputType; newValue: string }

export const useChangeCreds = () => {
  const {
    mutate: updateCreds,
    data,
    isLoading,
    error,
  } = useMutation<boolean, Error, UpdateCredsOptions>(
    ({ updateType, newValue }) =>
      updateType === InputType.Login
        ? api.updateUserEmail(newValue)
        : api.updateUserPassword(newValue)
  )

  return { updateCreds, data, isLoading, error }
}
