import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import FormInput from './components/FormInput'
import UiButton from '@/components/UiButton'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiImage from '@/components/UiImage'

import api from '@/api/ApiService'
import { Credentials } from '@/api/types'

import formFields from './constants'
import { AuthFields } from './types'
import { ButtonTitle, FieldsList } from './enums'

import * as S from './AuthForm.style'

const UiAuthForm = () => {
  const [isSignUp, setIsSignUp] = React.useState<boolean>(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthFields>({
    mode: 'onTouched',
  })

  const onSubmit: SubmitHandler<Credentials> = (credentials) => {
    if (isSignUp) {
      api.signUp(credentials)
    } else {
      api.login(credentials)
    }
  }

  return (
    <S.AuthForm onSubmit={handleSubmit(onSubmit)}>
      <UiImage name="logoBlack" width="220px" height="35px" />

      <S.GroupWrapper>
        <FormInput
          register={register}
          inputError={errors[FieldsList.Email]}
          {...formFields[FieldsList.Email]}
        />
        <FormInput
          register={register}
          inputError={errors[FieldsList.Password]}
          {...formFields[FieldsList.Password]}
        />
        {isSignUp ? (
          <FormInput
            register={register}
            inputError={errors[FieldsList.PasswordConfirm]}
            {...formFields[FieldsList.PasswordConfirm]}
          />
        ) : null}
      </S.GroupWrapper>

      <S.GroupWrapper>
        {!isSignUp ? (
          <UiButton
            buttonType="submit"
            size={ButtonSize.L}
            title={ButtonTitle.LoginTitle}
          />
        ) : null}
        <UiButton
          buttonType={isSignUp ? 'submit' : 'button'}
          size={ButtonSize.L}
          title={ButtonTitle.SignUpTitle}
          buttonTheme={isSignUp ? ButtonTheme.PurpleBright : ButtonTheme.White}
          onClick={() => setIsSignUp(true)}
          outlined
        />
      </S.GroupWrapper>
    </S.AuthForm>
  )
}

export default UiAuthForm
