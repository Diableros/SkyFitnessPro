import { useNavigate } from 'react-router-dom'

import UiImage from '../UiImage'

import { Exercise, Workout } from '@/api/types'
import { useProgress } from '@/api/hooks/useProgress'

import { LinkPath } from '@/router/enums'

import * as S from './WorkoutSelect.style'

type PropsType = {
  courseId: string
  workouts: Workout[]
}

const WorkoutSelect = ({ courseId, workouts }: PropsType) => {
  const navigate = useNavigate()

  const { courses } = useProgress()

  const handleWorkoutClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    const target = e.target as HTMLButtonElement
    const id = target.getAttribute('data-workout-id')
    navigate(`${LinkPath.Workout}/${id}`)
  }

  const exercises = courses ? courses[courseId] : null
  const sumsOfDone: number[] = []

  for (const key in exercises) {
    const userProgress = exercises[key]
    const sumOfDoneExercises = [].reduce.call(userProgress, (a, b) => a + b, 0)
    sumsOfDone.push(sumOfDoneExercises as number)
  }

  const isFinished = (exercises: Exercise[] = [], index: number): boolean => {
    let exerciseMax = 0
    exercises.forEach((ex) => {
      exerciseMax += ex.quantity
    })
    return sumsOfDone[index] >= exerciseMax
  }

  return (
    <S.SelectWrapper>
      <S.SelectHeader>Выберите тренировку</S.SelectHeader>
      {workouts.map(({ _id, name, exercises }, index) => {
        return (
          <S.SelectItem
            onClick={(e) => handleWorkoutClick(e)}
            $isFinished={isFinished(exercises, index)}
            key={index}
            data-workout-id={_id}
          >
            {name}
            {isFinished(exercises, index) ? (
              <UiImage name="checkMark" width="27px" height="25px" />
            ) : null}
          </S.SelectItem>
        )
      })}
    </S.SelectWrapper>
  )
}

export default WorkoutSelect
