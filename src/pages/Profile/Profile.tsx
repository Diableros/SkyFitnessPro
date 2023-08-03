import * as React from 'react'

import CredsChangeForm from './components/CredsChangeForm/CredsChangeForm'
import { InputType } from './components/CredsChangeForm/enums'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiButton from '@/components/UiButton/UiButton'
import UiCourseCard from '@/components/UiCourseCard'
import { PageType } from '@/components/UiCourseCard/enums'
import UiModal from '@/components/UiModal'
import { mockData } from '../Home/mockData'

import { useUserContext } from '@/context'
import { useChangeCreds } from '@/api/hooks/useChangeCreds'

import * as S from './Profile.style'

import { user } from './mockUserData'

const { coursesId } = user
const userCourses = mockData.filter((course) => coursesId.includes(course._id))

const Profile = () => {
  const { user } = useUserContext()
  const [showModalType, setShowModalType] = React.useState<InputType | null>(
    null
  )

  const handleModalClose = () => {
    setShowModalType(null)
  }

  const { updateCreds, data, isLoading } = useChangeCreds()

  const credsModalContent = showModalType ? (
    <UiModal modalClose={handleModalClose}>
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
        {userCourses.length > 0
          ? userCourses.map((course) => (
              <UiCourseCard
                key={course._id}
                course={course}
                pageType={PageType.Profile}
              />
            ))
          : null}
      </S.ProfileCourses>
      {credsModalContent ? credsModalContent : null}
    </S.PageWrapper>
  )
}

export default Profile
