import { FieldValues } from 'react-hook-form'

import { AuthFields } from './types'
import { FieldErrorText, FieldsList } from './enums'

export const passwordsCompare = (
  confirmPassword: AuthFields[FieldsList.PasswordConfirm],
  { [FieldsList.Password]: password }: FieldValues
) => confirmPassword === password || FieldErrorText.MismatchPasswords
