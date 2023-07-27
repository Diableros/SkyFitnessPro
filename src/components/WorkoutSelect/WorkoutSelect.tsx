import { useNavigate } from 'react-router-dom'

import UiImage from '../UiImage'

import * as S from './WorkoutSelect.style'

import { Course } from '@/pages/Home/mockData'

type PropsType = {
  course: Course
  isFinished: boolean
}

const WorkoutSelect = ({ course: { workouts }, isFinished }: PropsType) => {
  const navigate = useNavigate()

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log('clicked')
    navigate('courses/exercises/')
  }

  return (
    <S.SelectWrapper>
      <S.SelectHeader>Выберите тренировку</S.SelectHeader>
      {workouts.map((name, index) => {
        return (
          <S.SelectItem
            onClick={handleButtonClick}
            $isFinished={isFinished}
            key={index}
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
