import { passwordsCompare } from './utils'

import { Fields } from './types'
import {
  FieldErrorText,
  FieldInputLength,
  FieldPlaceholderText,
  FieldsList,
} from './enums'

export const INPUT_UNKNOWN_ERROR = 'Недопустимое значение'

const EMAIL_REG_EXP =
  /^(([0-9A-Za-z]{1}[0-9A-Za-z.]{0,}[0-9A-Za-z]{0,})@([0-9A-Za-z]{1,}\.){1,}[0-9A-Za-z]{2,})$/

const PASSWORD_REG_EXP = /^[a-zA-Z0-9:@$#_]+$/

const passwordRequirements = {
  required: FieldErrorText.Required,
  minLength: {
    value: Number(FieldInputLength.PasswordMinLength),
    message: `${FieldErrorText.ShortPassword} (min: ${FieldInputLength.PasswordMinLength}) `,
  },
  maxLength: {
    value: Number(FieldInputLength.PasswordMaxLength),
    message: `${FieldErrorText.LongPassword} (max: ${FieldInputLength.PasswordMaxLength})`,
  },
  pattern: PASSWORD_REG_EXP,
}

const formFields: Fields = {
  email: {
    type: 'email',
    name: FieldsList.Email,
    placeholder: FieldPlaceholderText.Email,
    registerOptions: {
      required: FieldErrorText.Required,
      minLength: {
        value: Number(FieldInputLength.EmailMinLength),
        message: `${FieldErrorText.ShortEmail} (min: ${FieldInputLength.EmailMinLength})`,
      },
      maxLength: {
        value: Number(FieldInputLength.EmailMaxLength),
        message: `${FieldErrorText.LongEmail} (min: ${FieldInputLength.EmailMaxLength})`,
      },
      pattern: EMAIL_REG_EXP,
    },
  },

  password: {
    type: 'password',
    name: FieldsList.Password,
    placeholder: FieldPlaceholderText.Password,
    registerOptions: { ...passwordRequirements },
  },

  passwordConfirm: {
    type: 'password',
    name: FieldsList.PasswordConfirm,
    placeholder: FieldPlaceholderText.PasswordConfirm,
    registerOptions: {
      ...passwordRequirements,
      validate: passwordsCompare,
    },
  },
}

export default formFields
