import React from 'react'
import { useNavigate } from 'react-router-dom'

import CredsChangeForm from './components/CredsChangeForm/CredsChangeForm'
import { InputType } from './components/CredsChangeForm/enums'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiButton from '@/components/UiButton/UiButton'
import UiCourseCard from '@/components/UiCourseCard'
import { PageType } from '@/components/UiCourseCard/enums'
import UiLoader from '@/components/UiLoader'
import UiModal from '@/components/UiModal'
import WorkoutSelect from '@/components/WorkoutSelect'

import { useCourses, useWorkouts } from '@/api/hooks'
import { Workout } from '@/api/types'
import { useUserContext } from '@/context'
import { useChangeCreds } from '@/api/hooks/useChangeCreds'
import { useProgress } from '@/api/hooks/useProgress'

import { LinkPath } from '@/router/enums'

import * as S from './Profile.style'

const Profile = () => {
  const navigate = useNavigate()
  const { user } = useUserContext()

  const [showModalType, setShowModalType] = React.useState<InputType | null>(
    null
  )

  const { updateCreds, data, isLoading } = useChangeCreds()

  const credsModalContent = showModalType ? (
    <UiModal isShow={Boolean(showModalType)}>
      <CredsChangeForm
        formType={showModalType}
        changeCredsFn={updateCreds}
        isLoading={isLoading}
      />
    </UiModal>
  ) : null

  React.useEffect(() => {
    if (data) setShowModalType(null)
  }, [data])

  const { data: coursesAll } = useCourses()
  const { data: workoutsAll } = useWorkouts()
  const { courses, isProgressLoading } = useProgress()
  const coursesIDs = courses ? Object.keys(courses) : null
  const userCourses = coursesAll?.filter(({ _id }) => coursesIDs?.includes(_id))

  const [workoutModal, setWorkoutModal] = React.useState<Workout[] | null>(null)

  const workoutModalContent = workoutModal ? (
    <UiModal isShow={Boolean(workoutModal)}>
      <WorkoutSelect
        workouts={workoutModal}
        isFinished={true}
        onClick={(e) => handleWorkoutClick(e)}
      />
    </UiModal>
  ) : null

  const handleWorkoutClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    const target = e.target as HTMLButtonElement
    const id = target.getAttribute('data-workout-id')
    navigate(`${LinkPath.Workout}/${id}`)
  }

  const handleWorkoutModal = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement
    const card = target.parentElement
    const chosenID = card?.getAttribute('data-course-id')
    const chosenCourse = userCourses?.find(({ _id }) => _id === chosenID)
    const workoutsIDs = chosenCourse?.['workouts'] //TODO разобраться с ошибкой: Property  does not exist on type 'never'.
    const workouts = workoutsIDs
      ? workoutsAll?.filter((workout) =>
          (workoutsIDs as string[]).includes((workout as Workout)._id)
        )
      : null
    // console.log('workouts names=>', workouts)
    setWorkoutModal((workouts as Workout[]) || null)
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
      {!isProgressLoading ? (
        <S.ProfileCourses>
          {userCourses
            ? userCourses.map((course) => (
                <UiCourseCard
                  key={course['_id']} //TODO разобраться с ошибкой: Property '_id' does not exist on type 'never'.
                  course={course}
                  pageType={PageType.Profile}
                  onButtonClick={(e) => handleWorkoutModal(e)}
                />
              ))
            : null}
        </S.ProfileCourses>
      ) : (
        <UiLoader color="purpleDark" />
      )}
      {credsModalContent ? credsModalContent : null}
      {workoutModalContent ? workoutModalContent : null}
    </S.PageWrapper>
  )
}

export default Profile
