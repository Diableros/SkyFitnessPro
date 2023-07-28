import React, { useState } from 'react'

import PasswordInputForm from './components/InputForm'
import UiButton from '@/components/UiButton'
import UiImage from '@/components/UiImage'

import { InputErrorText, InputName } from './enums'

import * as S from './PasswordChangeForm.style'

const PasswordChangeForm = () => {
  const [error, setError] = useState('')
  const [newPassword, setNewPassword] = useState(() => {
    return {
      password: '',
      passwordRepeat: '',
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist()

    if(e.target.value.length < 8) {
      setError(InputErrorText.Short)
    } else if(e.target.value.length > 20) {
      setError(InputErrorText.Long)
    } else {
      setError('')
    }

    setNewPassword((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleDataSend = (e: React.MouseEvent<Element, MouseEvent>) => {
    // отправка данных на сервер
    //if 200 => замена компонента на сообщение "Новый парооль сохранен"

    e.stopPropagation

    if (newPassword.password !== newPassword.passwordRepeat) {
      setError(InputErrorText.Mismatch)
    } else {
      setError('')
    }

    console.log(newPassword)
  }

  //TODO допилисть логику отправки данных на сервер

  return (
    <S.PasswordFormWrapper>
      <UiImage width="220px" height="35px" name="logoBlack" />
      <S.PasswordFormHeader>Новый пароль:</S.PasswordFormHeader>
      <PasswordInputForm
        placeholder="Пароль"
        onChange={(e) => handleChange(e)}
        name={InputName.Password}
        type='password'
      />
      <PasswordInputForm
        placeholder="Повторите пароль"
        onChange={(e) => handleChange(e)}
        name={InputName.PasswordRepeat}
        type='password'
      />
      {error && <S.PasswordFormError>{error}</S.PasswordFormError>}
      <UiButton
        buttonType="submit"
        title={'Отправить'}
        onClick={(e) => handleDataSend(e)}
      />
    </S.PasswordFormWrapper>
  )
}

export default PasswordChangeForm
