import React, { useState } from 'react'

import CredsInput from './components/InputForm'
import UiButton from '@/components/UiButton'
import UiImage from '@/components/UiImage'

import { useChangeCreds } from '@/api/hooks/useChangeCreds'

import { InputErrorText, InputName, InputType } from './enums'

import * as S from './CredsChangeForm.style'

type PropsType = {
  formType: InputType
  modalClose: () => void
}

const CredsChangeForm = ({ formType, modalClose }: PropsType) => {
  const [newLogin, setNewLogin] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [password, setPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const { updateCreds: changeCredsFn, data, isLoading } = useChangeCreds()

  React.useEffect(() => {
    if (data) modalClose()
  }, [data])

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 8) {
      setError(InputErrorText.ShortPassword)
    } else if (e.target.value.length > 20) {
      setError(InputErrorText.LongPassword)
    } else {
      setError(null)
    }
    if (e.target.name === InputName.Password) {
      setPassword(e.target.value)
    } else if (e.target.name === InputName.ConfirmPassword) {
      setNewPassword(e.target.value)
    } else {
      setError('Ошибка формы')
    }
  }

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setError(InputErrorText.ShortLogin)
    } else if (e.target.value.length > 64) {
      setError(InputErrorText.LongLogin)
    } else {
      setError(null)
    }
    setNewLogin(e.target.value)
  }

  const handleDataSend = (e: React.FormEvent) => {
    // отправка данных на сервер
    //if 200 => замена компонента на сообщение "Новый парооль сохранен"

    e.stopPropagation()

    if (formType === InputType.Password) {
      if (password !== newPassword) {
        setError(InputErrorText.Mismatch)
        alert('Недопустимый пароль')
      } else {
        setError(null)
        changeCredsFn({ updateType: InputType.Password, newValue: newPassword })
      }
    } else if (newLogin.length > 64 || newLogin.length < 6) {
      alert('Недопустимый логин')
    } else {
      changeCredsFn({ updateType: InputType.Login, newValue: newLogin })
    }
  }

  //TODO допилисть логику отправки данных на сервер

  const title =
    formType === InputType.Password ? 'Новый пароль:' : 'Новый логин:'

  const formContent = (
    <>
      {formType === InputType.Password ? (
        <>
          <CredsInput
            placeholder="Пароль"
            onChange={handlePasswordChange}
            name={InputName.Password}
            type="password"
          />
          <CredsInput
            placeholder="Повторите пароль"
            onChange={handlePasswordChange}
            name={InputName.ConfirmPassword}
            type="password"
          />
        </>
      ) : (
        <CredsInput
          placeholder="Логин"
          onChange={handleLoginChange}
          name={InputName.Login}
          type="text"
        />
      )}

      {error ? <S.CredsFormError>{error}</S.CredsFormError> : null}
      <UiButton
        buttonType="submit"
        title={isLoading ? 'Отправляем данные' : 'Отправить'}
        onClick={handleDataSend}
      />
    </>
  )

  return (
    <S.CredsFormWrapper>
      <UiImage width="220px" height="35px" name="logoBlack" />
      <S.CredsFormHeader>{title}</S.CredsFormHeader>
      {formContent}
    </S.CredsFormWrapper>
  )
}

export default CredsChangeForm
