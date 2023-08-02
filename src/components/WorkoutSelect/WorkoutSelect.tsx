import UiImage from '../UiImage'

import * as S from './WorkoutSelect.style'

type PropsType = {
  workouts: string[]
  isFinished: boolean
  onClick: (e: React.MouseEvent) => void
}

const WorkoutSelect = ({ workouts, isFinished, onClick }: PropsType) => {
  return (
    <S.SelectWrapper>
      <S.SelectHeader>Выберите тренировку</S.SelectHeader>
      {workouts.map((name, index) => {
        return (
          <S.SelectItem onClick={onClick} $isFinished={isFinished} key={index} data-workout-id>
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
