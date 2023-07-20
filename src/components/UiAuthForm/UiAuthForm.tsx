import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import FormInput from './components/FormInput'
import { ButtonSize, ButtonTheme } from '../UiButton/enums'
import UiButton from '../UiButton/UiButton'
import UiImage from '../UiImage'

import { AuthRequest } from '@/api/types'

import formFields from './constants'
import { AuthFields } from './types'
import { ButtonTitle, FieldsList } from './enums'

import * as S from './UiAuthForm.style'

const UiAuthForm = () => {
  const [isSignUp, setIsSignUp] = React.useState<boolean>(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthFields>({
    mode: 'onTouched',
  })

  const onSubmit: SubmitHandler<AuthRequest> = ({ email, password }) => {
    if (isSignUp) {
      console.log(`user sign up with email: ${email}, pass: ${password}`)
    } else {
      console.log(`user login up with email: ${email}, pass: ${password}`)
    }
  }

  return (
    <S.AuthForm onSubmit={handleSubmit(onSubmit)}>
      <UiImage name="logoTypography" width="220px" height="35px" />

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
