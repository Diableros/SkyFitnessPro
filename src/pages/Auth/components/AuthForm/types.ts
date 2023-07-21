import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form'

import { FieldsList } from './enums'

export type AuthFields = {
  email: string
  password: string
  passwordConfirm?: string
}

export type InputObjectType = {
  type: 'email' | 'password'
  name: FieldsList
  placeholder: string
  inputError?: FieldError
  register?: UseFormRegister<AuthFields>
  registerOptions: RegisterOptions
}

export type Fields = {
  [key in FieldsList]: InputObjectType
}
