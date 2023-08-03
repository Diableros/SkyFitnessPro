import { useState } from 'react'

import ProgressInput from './components/ProgressInput'
import UiButton from '@/components/UiButton'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiImage from '@/components/UiImage'

import * as S from './ProgressForm.style'

import { mockData } from './mockData'

const UiProgressForm = () => {
  const [filled, setIsFilled] = useState<boolean>(false)

  const example = mockData[2].workoutTWO

  const [inputValues, setInputValues] = useState({})

  const handleSendSuccess = () => {
    setIsFilled(true)
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValues((prevState) => ({
      ...prevState,
      [name]: Math.max(0, parseInt(value.slice(0, 2)) || 0),
    }))
  }

  //TODO:
  //      закончить логику с картинкой;
  //      правильно типизировать.

  return (
    <S.ProgressWrapper>
      {!filled ? (
        <>
          <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
          {example.map((item, index: number) => {
            return (
              <S.ProgressInputsBox key={index}>
                <S.ProgressLabelText key={index + 1}>
                  Сколько повторений вы сделали из упражнения: {item}?
                </S.ProgressLabelText>
                <ProgressInput
                  name={`${index}`}
                  type="number"
                  key={index + 2}
                  placeholder={'Введите значение'}
                  value={inputValues[`${index}`] || ''}
                  onChange={inputHandler}
                />
              </S.ProgressInputsBox>
            )
          })}
          <UiButton
            buttonType="submit"
            size={ButtonSize.L}
            title="Отправить"
            buttonTheme={ButtonTheme.PurpleBright}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation
              handleSendSuccess()
              // console.log(inputValues)
            }}
          />
        </>
      ) : (
        <>
          <S.ImageHeader>Ваш прогресс засчитан!</S.ImageHeader>
          <UiImage width="444px" height="360px" name="okHand" />
        </>
      )}
    </S.ProgressWrapper>
  )
}
export default UiProgressForm
