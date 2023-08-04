import { CourseProgress, Workout } from '@/api/types'
import { calcProgress } from './utils'

import * as S from './UserProgress.style'

type PropsType = {
  exercises: Workout
  progress: CourseProgress | null
}

const UserProgress = ({ exercises, progress }: PropsType) => {
  const currentExercises = exercises.exercises

  const currentProgress = progress ? Object.keys(progress).map((key: string) => progress[key]) : null
  return (
    <S.ProgressBlock>
      <S.ProgressTitle>Мой прогресс по тренировке:</S.ProgressTitle>

      <S.ProgressStats>
        {(currentExercises && currentProgress)
          ? currentExercises.map(({ name, quantity }, index) => {
            const done = Number(currentProgress[index])
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
            })
          : null}
      </S.ProgressStats>
    </S.ProgressBlock>
  )
}

export default UserProgress
