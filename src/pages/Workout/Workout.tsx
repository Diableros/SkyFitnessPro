import UserProgress from './components/UserProgress'
import VideoPlayer from './components/VideoPlayer'
import UiButton from '@/components/UiButton'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import { mockData } from '../Home/mockData'

import * as S from './Workout.styles'

import { userProgress, workoutData } from './mockData'
const { courseId, exercises, name, video } = workoutData

const course = mockData.find((course) => course._id === courseId)

const Workout = () => {
  const handleButtonClick = () => {
    console.log('click to wride down the progress')
  }

  return (
    <S.PageWrapper>
      <S.PageHaeder>{course?.nameRU}</S.PageHaeder>
      <VideoPlayer title={name} src={video} />

      <S.ProgressBlock>
        <S.Workouts>
          <S.WorkoutsHeader>Упражнения</S.WorkoutsHeader>
          <S.WorkoutList>
            {exercises.map(({ name }, i) => (
              <li key={i}>{name}</li>
            ))}
          </S.WorkoutList>

          <UiButton
            onClick={handleButtonClick}
            title="Заполнить свой прогресс"
            buttonTheme={ButtonTheme.PurpleBright}
            fontSize="s"
            size={ButtonSize.L}
          />
        </S.Workouts>

        <UserProgress exercises={userProgress} />
      </S.ProgressBlock>
    </S.PageWrapper>
  )
}

export default Workout
