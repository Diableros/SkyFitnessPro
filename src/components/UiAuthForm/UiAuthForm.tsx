import * as React from 'react'

import { ButtonSize, ButtonTheme } from '../UiButton/enums'
import UiButton from '../UiButton/UiButton'
import UiImage from '../UiImage'

import * as S from './UiAuthForm.style'

const UiAuthForm = () => {
  const [isRegister, setIsRegister] = React.useState<boolean>(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (isRegister) {
      console.log('register handler')
      return
    }

    console.log('login handler')
  }

  return (
    <S.AuthForm onSubmit={handleSubmit}>
      <UiImage name="logoTypography" width="220px" height="35px" />

      <S.GroupWrapper>
        <S.Input placeholder="e-mail" />
        <S.Input placeholder="Пароль" />
        {isRegister ? <S.Input placeholder="Повторите пароль" /> : null}
      </S.GroupWrapper>

      <S.GroupWrapper>
        {!isRegister ? <UiButton size={ButtonSize.L} title="Войти" /> : null}
        <UiButton
          size={ButtonSize.L}
          title="Зарегистрироваться"
          buttonTheme={
            isRegister ? ButtonTheme.PurpleBright : ButtonTheme.White
          }
          outlined
        />
      </S.GroupWrapper>
    </S.AuthForm>
  )
}

export default UiAuthForm
