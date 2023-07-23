import { InputObjectType } from '../../types'

import * as S from './FormInput.style'

const INPUT_UNKNOWN_ERROR = 'Недопустимое значение'

const LoginFormInput = ({
  type,
  name,
  placeholder,
  inputError,
  register,
  registerOptions,
}: InputObjectType) => {
  if (register)
    return (
      <S.InputWrapper>
        <S.Input
          type={type}
          placeholder={placeholder}
          {...register(name, { ...registerOptions })}
        />
        {inputError ? (
          <S.InputError>
            {inputError?.message || INPUT_UNKNOWN_ERROR}
          </S.InputError>
        ) : null}
      </S.InputWrapper>
    )

  return null
}

export default LoginFormInput
