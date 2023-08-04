import React from 'react'

import CredsChangeForm from './components/CredsChangeForm/CredsChangeForm'
import { InputType } from './components/CredsChangeForm/enums'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiButton from '@/components/UiButton/UiButton'
import UiCourseCard from '@/components/UiCourseCard'
import { PageType } from '@/components/UiCourseCard/enums'
import UiModal from '@/components/UiModal'
import WorkoutSelect from '@/components/WorkoutSelect'

import { useCourses, useWorkouts } from '@/api/hooks'
import { Workout } from '@/api/types'
import { useUserContext } from '@/context'
import { useProgress } from '@/api/hooks/useProgress'

import * as S from './Profile.style'

const Profile = () => {
  const [user] = useUserContext()

  const [showModalType, setShowModalType] = React.useState<InputType | null>(
    null
  )

  const handleModalClose = () => {
    setShowModalType(null)
  }

  const credsModalContent = showModalType ? (
    <UiModal modalClose={handleModalClose}>
      <CredsChangeForm formType={showModalType} modalClose={handleModalClose} />
    </UiModal>
  ) : null

  const { data: coursesAll } = useCourses()
  const { data: workoutsAll } = useWorkouts()
  const { courses } = useProgress()
  const coursesIDs = courses ? Object.keys(courses) : null
  const userCourses = coursesAll?.filter(({ _id }) => coursesIDs?.includes(_id))

  const [workoutModal, setWorkoutModal] = React.useState<Workout[] | null>(null)
  const [chosenCourse, setChosenCourse] = React.useState<string>('')

  const workoutModalContent = workoutModal ? (
    <UiModal modalClose={() => setWorkoutModal(null)}>
      <WorkoutSelect workouts={workoutModal} courseId={chosenCourse} />
    </UiModal>
  ) : null

  const handleWorkoutModal = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement
    const card = target.parentElement
    const chosenID = card?.getAttribute('data-course-id')
    const chosenCourse = userCourses?.find(({ _id }) => _id === chosenID)
    const workoutsIDs = chosenCourse?.workouts
    const workouts = workoutsIDs
      ? workoutsAll?.filter((workout) => workoutsIDs.includes(workout._id))
      : null
    setWorkoutModal(workouts || null)
    setChosenCourse(chosenID || '')
  }

  return (
    <S.PageWrapper>
      <S.ProfileDataBlock>
        <S.ProfileHeader>Мой профиль</S.ProfileHeader>

        <S.ProfileData>
          <S.ProfileDataItem>Логин: {user?.email}</S.ProfileDataItem>
        </S.ProfileData>

        <S.ProfileChangeBtns>
          <UiButton
            title="Изменить логин"
            buttonTheme={ButtonTheme.PurpleBright}
            fontSize="s"
            size={ButtonSize.L}
            onClick={() => setShowModalType(InputType.Login)}
          ></UiButton>

          <UiButton
            title="Изменить пароль"
            buttonTheme={ButtonTheme.PurpleBright}
            fontSize="s"
            size={ButtonSize.L}
            onClick={() => setShowModalType(InputType.Password)}
          ></UiButton>
        </S.ProfileChangeBtns>
      </S.ProfileDataBlock>

      <S.ProfileHeader>Мои курсы</S.ProfileHeader>
      <S.ProfileCourses>
        {userCourses
          ? userCourses.map((course) => (
              <UiCourseCard
                key={course._id}
                course={course}
                pageType={PageType.Profile}
                onButtonClick={(e) => handleWorkoutModal(e)}
              />
            ))
          : null}
      </S.ProfileCourses>
      {credsModalContent ? credsModalContent : null}
      {workoutModalContent ? workoutModalContent : null}
    </S.PageWrapper>
  )
}

export default Profile
