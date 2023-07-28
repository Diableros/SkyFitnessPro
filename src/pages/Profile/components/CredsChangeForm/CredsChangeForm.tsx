import React, { useState } from 'react'

import CredsInputForm from './components/InputForm'
import UiButton from '@/components/UiButton'
import UiImage from '@/components/UiImage'

import { InputErrorText, InputName, InputType } from './enums'

import * as S from './CredsChangeForm.style'

type PropsType = {
  inputType?: InputType
}

const CredsChangeForm = ({ inputType }: PropsType) => {
  const [newLogin, setNewLogin] = useState('')
  const [error, setError] = useState('')
  const [newPassword, setNewPassword] = useState(() => {
    return {
      password: '',
      passwordRepeat: '',
    }
  })

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist()

    if (e.target.value.length < 8) {
      setError(InputErrorText.ShortPassword)
    } else if (e.target.value.length > 20) {
      setError(InputErrorText.LongPassword)
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

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setError(InputErrorText.ShortLogin)
    } else if (e.target.value.length > 10) {
      setError(InputErrorText.LongLogin)
    } else {
      setError('')
    }
    setNewLogin(e.target.value)
  }

  const handleDataSend = (e: React.MouseEvent<Element, MouseEvent>) => {
    // отправка данных на сервер
    //if 200 => замена компонента на сообщение "Новый парооль сохранен"

    e.stopPropagation

    if (inputType === InputType.Password) {
      if (newPassword.password !== newPassword.passwordRepeat) {
        setError(InputErrorText.Mismatch)
        console.log('отмена отпраки данных')
      } else {
        setError('')
        console.log(newPassword)
      } 
    } else if (newLogin.length > 10) {
      console.log('отмена отпраки данных')
    } else {
      console.log(`new login => ${newLogin}`)
    }
  }

  //TODO допилисть логику отправки данных на сервер

  const title = (inputType === InputType.Password ? 'Новый пароль:' : 'Новый логин:')

  return (
    <S.CredsFormWrapper $inputType={inputType}>
      <UiImage width="220px" height="35px" name="logoBlack" />
      <S.CredsFormHeader>{title}</S.CredsFormHeader>
      {inputType === InputType.Password ? (
        <>
          <CredsInputForm
            placeholder="Пароль"
            onChange={(e) => handlePasswordChange(e)}
            name={InputName.Password}
            type="password"
          />
          <CredsInputForm
            placeholder="Повторите пароль"
            onChange={(e) => handlePasswordChange(e)}
            name={InputName.PasswordRepeat}
            type="password"
          />
        </>
      ) : (
        <CredsInputForm
          placeholder="Логин"
          onChange={(e) => handleLoginChange(e)}
          name={InputName.Login}
          type="text"
        />
      )}

      {error && <S.CredsFormError>{error}</S.CredsFormError>}
      <UiButton
        buttonType="submit"
        title={'Отправить'}
        onClick={(e) => handleDataSend(e)}
      />
    </S.CredsFormWrapper>
  )
}

export default CredsChangeForm
