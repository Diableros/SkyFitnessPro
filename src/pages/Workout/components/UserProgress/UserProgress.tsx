import { calcProgress } from './utils'

import * as S from './UserProgress.style'

type PropsType = {
  exercises: { name: string; done: number; quantity: number }[]
}

const UserProgress = ({ exercises }: PropsType) => {
  return (
    <S.ProgressBlock>
      <S.ProgressTitle>Мой прогресс по тренировке:</S.ProgressTitle>

      <S.ProgressStats>
        {exercises.map(({ name, done, quantity }, index) => {
          return (
            <S.ProgressStatsItem $colorIndex={index} key={index}>
              <S.ProgressName>{name}</S.ProgressName>

              <S.ProgressBar>
                <S.Progress $percentage={calcProgress(done, quantity)}>
                  <span>{calcProgress(done, quantity)} %</span>
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
