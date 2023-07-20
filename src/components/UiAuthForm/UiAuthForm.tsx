import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ButtonSize, ButtonTheme } from '../UiButton/enums'
import UiButton from '../UiButton/UiButton'
import UiImage from '../UiImage'

import { AuthRequest } from '@/api/types'

import { ButtonTitle } from './constants'
import { AuthFields } from './types'

import * as S from './UiAuthForm.style'

const UiAuthForm = () => {
  const [isSignUp, setIsSignUp] = React.useState<boolean>(false)

  const { handleSubmit } = useForm<AuthFields>({
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
        <S.Input placeholder="e-mail" name="email" />
        <S.Input placeholder="Пароль" name="password" />
        {isSignUp ? (
          <S.Input placeholder="Повторите пароль" name="repeat-password" />
        ) : null}
      </S.GroupWrapper>

      <S.GroupWrapper>
        {!isSignUp ? (
          <UiButton size={ButtonSize.L} title={ButtonTitle.LoginTitle} />
        ) : null}
        <UiButton
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
