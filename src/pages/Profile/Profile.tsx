import * as React from 'react'

import CredsChangeForm from './components/CredsChangeForm/CredsChangeForm'
import { InputType } from './components/CredsChangeForm/enums'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiButton from '@/components/UiButton/UiButton'
import UiCourseCard from '@/components/UiCourseCard'
import { PageType } from '@/components/UiCourseCard/enums'
import UiLoader from '@/components/UiLoader'
import UiModal from '@/components/UiModal'

import { useCourses } from '@/api/hooks'
import { useUserContext } from '@/context'
import { useChangeCreds } from '@/api/hooks/useChangeCreds'
import { useProgress } from '@/api/hooks/useProgress'

import * as S from './Profile.style'

const Profile = () => {
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
  const { courses, isProgressLoading } = useProgress()
  const coursesIDs = courses ? Object.keys(courses) : null
  const userCourses = coursesAll?.filter(({ _id }) => coursesIDs?.includes(_id))

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
                />
              ))
            : null}
        </S.ProfileCourses>
      ) : (
        <UiLoader color="purpleDark" />
      )}
      {credsModalContent ? credsModalContent : null}
    </S.PageWrapper>
  )
}

export default Profile
