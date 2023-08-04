import React, { useState } from 'react'

import CredsInput from './components/InputForm'
import UiButton from '@/components/UiButton'
import UiImage from '@/components/UiImage'

import { Action, useUserContext } from '@/context'
import { useChangeCreds } from '@/api/hooks/useChangeCreds'

import { InputErrorText, InputName, InputType } from './enums'

import * as S from './CredsChangeForm.style'

type PropsType = {
  formType: InputType
  modalClose: () => void
}

const CredsChangeForm = ({ formType, modalClose }: PropsType) => {
  const [, dispatch] = useUserContext()
  const [newLogin, setNewLogin] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [password, setPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const {
    updateCreds: changeCredsFn,
    data,
    isLoading,
    error: queryError,
  } = useChangeCreds()

  React.useEffect(() => {
    let timer: NodeJS.Timeout

    if (data) {
      dispatch({ type: Action.UpdateEmail, payload: newLogin })

      timer = setTimeout(() => {
        modalClose()
      }, 2000)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [data])

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 8) {
      setError(InputErrorText.ShortPassword)
    } else if (e.target.value.length > 64) {
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
    e.stopPropagation()

    if (formType === InputType.Password) {
      if (password !== newPassword) {
        setError(InputErrorText.Mismatch)
      } else {
        setError(null)
        changeCredsFn({ updateType: InputType.Password, newValue: newPassword })
      }
    } else if (newLogin.length > 64) {
      setError(InputErrorText.LongLogin)
    } else if (newLogin.length < 3) {
      setError(InputErrorText.ShortLogin)
    } else {
      changeCredsFn({ updateType: InputType.Login, newValue: newLogin })
    }
  }

  const title =
    formType === InputType.Password ? 'Новый пароль:' : 'Новый логин:'

  const formContent = (
    <>
      <S.CredsFormHeader>{title}</S.CredsFormHeader>
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

  const resultContent = (
    <S.CredsFormMessage>
      {!queryError
        ? `${formType} успешно изменен!`
        : `Не удалось изменить ${formType} по причине: ${queryError.message}`}{' '}
    </S.CredsFormMessage>
  )

  return (
    <S.CredsFormWrapper>
      <UiImage width="220px" height="35px" name="logoBlack" />
      {data || queryError ? resultContent : formContent}
    </S.CredsFormWrapper>
  )
}

export default CredsChangeForm
