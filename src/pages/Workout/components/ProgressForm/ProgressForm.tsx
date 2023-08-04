import * as React from 'react'
import { useQueryClient } from '@tanstack/react-query'

import ProgressInput from './components/ProgressInput'
import UiButton from '@/components/UiButton'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiImage from '@/components/UiImage'

import { QueryKey } from '@/api/enums'
import { Course, Workout } from '@/api/types'
import { UpdateProgressOptions } from '@/api/hooks/useUpdateProgress'

import * as S from './ProgressForm.style'

type PropsType = {
  updateProgressFn: (options: UpdateProgressOptions) => void
  isLoading: boolean
  workouts?: Workout
  course?: Course[]
  exercises?: boolean
  modalClose: () => void
}

const ProgressForm = ({
  updateProgressFn,
  isLoading,
  workouts,
  course,
  exercises,
  modalClose,
}: PropsType) => {
  const [inputValues, setInputValues] = React.useState(Array(0))
  const queryClient = useQueryClient()

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValues((prevState) => ({
      ...prevState,
      [name]: Math.max(0, parseInt(value.slice(0, 2))),
    }))
  }

  React.useEffect(() => {
    if (exercises) {
      
      queryClient.invalidateQueries({ queryKey: [QueryKey.UserProgress] })

      const timer = setTimeout(() => {
        modalClose()
      }, 2000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [exercises])

  const formContent = (
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
        onClick={() => {
          const newValues = Object.values(inputValues)
          updateProgressFn({
            courseId: course ? course[0]._id : '',
            workoutId: workouts?._id || '',
            exerciseProgressArray: newValues,
          })
        }}
      />
    </>
  )

  const resultContent = (
    <>
      <S.ImageHeader>Ваш прогресс засчитан!</S.ImageHeader>
      <UiImage width="444px" height="360px" name="okHand" />
    </>
  )

  return (
    <S.ProgressWrapper>
      {exercises ? resultContent : formContent}
    </S.ProgressWrapper>
  )
}
export default ProgressForm
