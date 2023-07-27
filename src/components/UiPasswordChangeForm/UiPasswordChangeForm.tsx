import { useState } from 'react'

import PasswordFormInput from './components/PasswordFormInput'
import UiButton from '../UiButton'
import UiImage from '../UiImage'

import * as S from './UiPasswordChangeForm.style'

const UiPasswordChangeForm = () => {
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if(введенный пароль не соответствует тому, что на сервере){
        //выброс ошибки
    //}
    if (!e.target.value) {
      setError('Введите пароль')
    } else {
        setError(' ')
    }
  }

  const handleDataSend = () => {
    console.log(newPassword)
    // отправка данных на сервер
  }

  //TODO допилисть логику отправки данных на сервер

  return (
    <S.PasswordFormWrapper>
      <UiImage width="220px" height="35px" name="logoBlack" />
      <S.PasswordFormHeader>Новый пароль:</S.PasswordFormHeader>
      <PasswordFormInput
        type="password"
        name="password"
        placeholder="Пароль"
        onChange={(e) => handleChange(e)}
      />
      <PasswordFormInput
        type="password"
        name="passwordRepeat"
        placeholder="Повторите пароль"
        onChange={(e) => {
          handleChange(e)
          setNewPassword(e.target.value)
        }}
      />
      {error && <S.PasswordFormError>{error}</S.PasswordFormError>}
      <UiButton
        buttonType="submit"
        title={'Отправить'}
        onClick={handleDataSend}
      />
    </S.PasswordFormWrapper>
  )
}

export default UiPasswordChangeForm
