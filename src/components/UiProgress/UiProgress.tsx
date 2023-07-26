import { useState } from 'react'

import ProgressInput from './components/ProgressInput'
import UiButton from '../UiButton'
import { ButtonSize, ButtonTheme } from '../UiButton/enums'
import UiImage from '../UiImage'

import * as S from './UiProgress.style'

import { mockData } from '@/pages/Home/mockData'

const UiProgressForm = () => {
  const [filled, setIsFilled] = useState(false)

  const example = mockData[2].exercises[0].workoutTWO

  const [inputValue, setInputValue] = useState('')

  const handleSendSuccess = () => {
    setIsFilled(true)
  }

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <S.ProgressWrapper>
      {!filled ? (
        <>
          <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
          {example.map((item, index) => {
            return (
              <>
                <S.ProgressLabelText key={index-1}>
                  Сколько повторений вы сделали из упражнения: {item}?
                </S.ProgressLabelText>
                <ProgressInput name={`input-${index}`} type='number' key={index + 1} placeholder={'Введите значение'} value={inputValue} onChange={inputHandler} />
              </>
            )
          })}
          <UiButton
            buttonType="submit"
            size={ButtonSize.L}
            title="Отправить"
            buttonTheme={ButtonTheme.PurpleBright}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation
             console.log(inputValue)
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
