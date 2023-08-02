import { useParams } from 'react-router-dom'

import CourseVideo from './components/CourseVideo'
import UserProgress from './components/UserProgress'
import UiButton from '@/components/UiButton'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'

import { useWorkouts } from '@/api/hooks'

import * as S from './Workout.styles'

import { userProgress } from './mockData'

const Workout = () => {
  const { id } = useParams()
  const { data } = useWorkouts()

  const chosenWorkout = data?.find(({ _id }) => _id === id)
  console.log(data, chosenWorkout)

  const handleButtonClick = () => {
    console.log('click to wride down the progress')
  }

  return (
    <S.PageWrapper>
      {chosenWorkout ? (
        <>
          <CourseVideo title={chosenWorkout.name} src={chosenWorkout.video} />
          <S.ProgressBlock>
            <S.Workouts>
              <S.WorkoutsHeader>Упражнения</S.WorkoutsHeader>
              <S.WorkoutList>
                {chosenWorkout?.exercises.map(({ name }, index: number) => (
                  <li key={index}>{name}</li>
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
        </>
      ) : 
        null
      }
    </S.PageWrapper>
  )
}

export default Workout
