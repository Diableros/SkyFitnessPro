import * as React from 'react'
import { useQueryClient } from '@tanstack/react-query'

import ProgressInput from './components/ProgressInput'
import UiButton from '@/components/UiButton'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiImage from '@/components/UiImage'

import { QueryKey } from '@/api/enums'
import { Course, Workout } from '@/api/types'
import { useUpdateProgress } from '@/api/hooks/useUpdateProgress'

import * as S from './ProgressForm.style'

type PropsType = {
  modalClose: () => void
  workouts?: Workout
  course?: Course[]
}

const ProgressForm = ({ workouts, course, modalClose }: PropsType) => {
  const [inputValues, setInputValues] = React.useState(Array(0))

  const {
    mutate: updateProgress,
    data,
    isLoading,
    error,
    isSuccess,
  } = useUpdateProgress()

  const queryClient = useQueryClient()

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValues((prevState) => ({
      ...prevState,
      [name]: Math.max(0, parseInt(value.slice(0, 2))),
    }))
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.stopPropagation

    const newValues = Object.values(inputValues)

    updateProgress({
      courseId: course ? course[0]._id : '',
      workoutId: workouts?._id || '',
      exerciseProgressArray: newValues,
    })
  }

  React.useEffect(() => {
    let timer: NodeJS.Timeout

    if (data) {
      queryClient.invalidateQueries({ queryKey: [QueryKey.UserProgress] })

      timer = setTimeout(() => {
        modalClose()
      }, 2000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [data])

  const resultContent = (
    <>
      <S.ImageHeader>
        {isSuccess
          ? `Ваш прогресс засчитан!`
          : `Не удалось заситать прогресс: ${error?.message}`}
      </S.ImageHeader>
      {isSuccess ? (
        <UiImage width="444px" height="360px" name="okHand" />
      ) : null}
    </>
  )

  const formСontent = (
    <>
      <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
      {workouts?.exercises &&
        workouts.exercises.map(({ name }, index) => {
          return (
            <S.ProgressInputsBox key={index}>
              <S.ProgressLabelText key={index + 1}>
                {name} выполнено повторений:
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
        onClick={handleSubmit}
      />
    </>
  )

  return (
    <S.ProgressWrapper>
      {data || error ? resultContent : formСontent}
    </S.ProgressWrapper>
  )
}
export default ProgressForm
