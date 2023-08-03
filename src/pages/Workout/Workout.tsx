import * as React from 'react'
import { useParams } from 'react-router-dom'

import CourseVideo from './components/CourseVideo'
import ProgressForm from './components/ProgressForm/ProgressForm'
import UserProgress from './components/UserProgress'
import UiButton from '@/components/UiButton'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiModal from '@/components/UiModal'

import { useCourses, useWorkouts } from '@/api/hooks'
import { useProgress } from '@/api/hooks/useProgress'
import { useUpdateProgress } from '@/api/hooks/useUpdateProgress'

import * as S from './Workout.styles'

import { userProgress } from './mockData'

const Workout = () => {
  const { id } = useParams()
  const { data } = useWorkouts()
  const { data: coursesData } = useCourses()

  const chosenWorkout = data?.find(({ _id }) => _id === id)
  const { courses } = useProgress()
 
  const coursesIDs = courses ? Object.keys(courses) : null
  const currentCourse = coursesData?.filter(({ _id }) => coursesIDs?.includes(_id))

  
  const [showModal, setShowModal] = React.useState<boolean>(false)
  const { UpdateProgress, exercises, isLoading, isSuccess } = useUpdateProgress()

  const progressModalContent = showModal ? (
    <UiModal isShow={Boolean(showModal)}>
      <ProgressForm
        updateProgressFn={UpdateProgress}
        isLoading={isLoading}
        workouts={chosenWorkout}
        course={currentCourse}
        isSuccess={isSuccess}
      />
    </UiModal>
  ) : null

  React.useEffect(() => {
    if (exercises) setShowModal(false)
  }, [exercises])

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
                onClick={() => setShowModal(true)}
                title="Заполнить свой прогресс"
                buttonTheme={ButtonTheme.PurpleBright}
                fontSize="s"
                size={ButtonSize.L}
              />
            </S.Workouts>

            <UserProgress exercises={userProgress} />
          </S.ProgressBlock>
        </>
      ) : null}
       {progressModalContent ? progressModalContent : null}
    </S.PageWrapper>
  )
}

export default Workout
