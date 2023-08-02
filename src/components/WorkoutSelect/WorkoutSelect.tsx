import { useNavigate } from 'react-router-dom'

import UiImage from '../UiImage'

import { Workout } from '@/api/types'

import { LinkPath } from '@/router/enums'

import * as S from './WorkoutSelect.style'

type PropsType = {
  workouts: Workout[]
  isFinished: boolean
}

const WorkoutSelect = ({ workouts, isFinished }: PropsType) => {
  const navigate = useNavigate()

  const handleWorkoutClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    const target = e.target as HTMLButtonElement
    const id = target.getAttribute('data-workout-id')
    navigate(`${LinkPath.Workout}/${id}`)
  }
  
  return (
    <S.SelectWrapper>
      <S.SelectHeader>Выберите тренировку</S.SelectHeader>
      {workouts.map(({ _id, name }, index) => {
        return (
          <S.SelectItem
            onClick={(e) => handleWorkoutClick(e)}
            $isFinished={isFinished}
            key={index}
            data-workout-id={_id}
          >
            {name}
            {isFinished ? (
              <UiImage name="checkMark" width="27px" height="25px" />
            ) : null}
          </S.SelectItem>
        )
      })}
    </S.SelectWrapper>
  )
}

export default WorkoutSelect
