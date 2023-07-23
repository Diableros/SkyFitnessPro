import UiImage from '../UiImage'

import * as S from './WorkoutSelect.style'

import { Course } from '@/pages/Home/mockData'

type PropsType = {
  course: Course
  isFinished: boolean
}

const WorkoutSelect = ({ course: { workouts }, isFinished }: PropsType) => {
  
  return (
    <S.SelectWrapper>
      <S.SelectHeader>Выберите тренировку</S.SelectHeader>
      {workouts.map((name, index) => {
        return (
          <S.SelectBox $isFinished={isFinished} key={index}>
            {name}
            {isFinished ? <UiImage name="checkMark" width="27px" height="25px" /> : null}
          </S.SelectBox>
        )
      })}
    </S.SelectWrapper>
  )
}

export default WorkoutSelect
