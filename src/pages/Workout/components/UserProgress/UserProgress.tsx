import * as S from './UserProgress.style'

type PropTypes = {
  exercises: { name: string; done: number; quantity: number }[]
}

const UserProgress = ({ exercises }: PropTypes) => {
  return (
    <S.ProgressBlock>
      <S.ProgressTitle>Мой прогресс по тренировке:</S.ProgressTitle>

      <S.ProgressStats>
        {exercises.map(({ name, done, quantity }, i) => {
          return (
            <S.ProgressStatsItem key={i}>
              <S.ProgressName>{name}</S.ProgressName>

              <S.ProgressBar>
                <S.Progress percentage={(done / quantity) * 100 + '%'}>
                  {(done / quantity) * 100 + '%'}
                </S.Progress>
              </S.ProgressBar>
            </S.ProgressStatsItem>
          )
        })}
      </S.ProgressStats>
    </S.ProgressBlock>
  )
}

export default UserProgress
