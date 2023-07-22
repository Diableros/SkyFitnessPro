import UiImage from '../UiImage'

import * as S from './WorkoutSelect.style'

import { Course } from '@/pages/Home/mockData'

type PropsType = {
  course: Course
}

const WorkoutSelect = ({ course: { workouts } }: PropsType) => {
  return (
    <S.ComponentWrapper>
      <S.ComponentHeader>Выберите тренировку</S.ComponentHeader>
      {workouts.map((name, index) => {
        return (
          <S.ComponentBox key={index}>
            {name}
            <UiImage name="checkMark" width="27px" height="25px" />
          </S.ComponentBox>
        )
      })}
    </S.ComponentWrapper>
  )
}

export default WorkoutSelect
