import * as React from 'react'

import ProgressInput from './components/ProgressInput'
import UiButton from '@/components/UiButton'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiImage from '@/components/UiImage'

import { UpdateProgressOptions } from '@/api/hooks/useUpdateProgress'

import * as S from './ProgressForm.style'

import { mockData } from './mockData'

type PropsType = {
  updateProgressFn: (options: UpdateProgressOptions) => void
}

const UiProgressForm = ({ updateProgressFn }: PropsType) => {
  const [filled, setIsFilled] = React.useState<boolean>(false)
  const [inputValues, setInputValues] = React.useState({})

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValues((prevState) => ({
      ...prevState,
      [name]: Math.max(0, parseInt(value.slice(0,2)) || 0),
    }))
  }

  const example = mockData[2].workoutTWO

  const handleSendSuccess = () => {
    setIsFilled(true)
  }

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
              const newValues = Object.values(inputValues)
              console.log(newValues)
              // updateProgressFn({ courseId: , workoutId: , exerciseProgressArray: newValues})
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
