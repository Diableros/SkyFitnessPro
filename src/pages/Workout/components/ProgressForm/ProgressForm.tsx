import * as React from 'react'

import ProgressInput from './components/ProgressInput'
import UiButton from '@/components/UiButton'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiImage from '@/components/UiImage'

import { Course, Workout } from '@/api/types'
import { UpdateProgressOptions } from '@/api/hooks/useUpdateProgress'

import * as S from './ProgressForm.style'

type PropsType = {
  updateProgressFn: (options: UpdateProgressOptions) => void
  isLoading: boolean
  workouts?: Workout
  course?: Course[]
  isSuccess: boolean
}

const ProgressForm = ({
  updateProgressFn,
  isLoading,
  workouts,
  course,
  isSuccess,
}: PropsType) => {
  const [filled, setIsFilled] = React.useState<boolean>(false)
  const [inputValues, setInputValues] = React.useState(Array(0))

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValues((prevState) => ({
      ...prevState,
      [name]: Math.max(0, parseInt(value.slice(0, 2))),
    }))
  }

  const handleSendSuccess = () => {
    if (!isSuccess) {
      console.log('Error')
    } else {
      setIsFilled(true)
    }
  }

  return (
    <S.ProgressWrapper>
      {!filled ? (
        <>
          <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
          {workouts?.exercises &&
            workouts.exercises.map(({ name }, index) => {
              return (
                <S.ProgressInputsBox key={index}>
                  <S.ProgressLabelText key={index + 1}>
                    Сколько повторений вы сделали из упражнения: {name}?
                  </S.ProgressLabelText>
                  <ProgressInput
                    name={`${index}`}
                    type="number"
                    key={index + 2}
                    placeholder={'Введите значение'}
                    value={inputValues[index] || ''}
                    onChange={inputHandler}
                  />
                </S.ProgressInputsBox>
              )
            })}
          <UiButton
            buttonType="submit"
            size={ButtonSize.L}
            title={isLoading ? 'Отправляем данные' : 'Отправить'}
            buttonTheme={ButtonTheme.PurpleBright}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation
              handleSendSuccess()
              const newValues = Object.values(inputValues)
              console.log(newValues)
              updateProgressFn({
                courseId: course ? course[0]._id : '',
                workoutId: workouts?._id || '',
                exerciseProgressArray: newValues,
              })
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
export default ProgressForm
