import * as React from 'react'

import CredsChangeForm from './components/CredsChangeForm/CredsChangeForm'
import { InputType } from './components/CredsChangeForm/enums'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiButton from '@/components/UiButton/UiButton'
import UiCourseCard from '@/components/UiCourseCard'
import { PageType } from '@/components/UiCourseCard/enums'
import UiLoader from '@/components/UiLoader'
import UiModal from '@/components/UiModal'
import { mockData } from '../Home/mockData'

import { useCourses } from '@/api/hooks'
import { UserAccount } from '@/api/types'
import { useUserContext } from '@/context'
import { getUserCourses } from './utils'
import { useChangeCreds } from '@/api/hooks/useChangeCreds'
import { useProgress } from '@/api/hooks/useProgress'

import * as S from './Profile.style'

import { user } from './mockUserData'

const { coursesId } = user
const userCour = mockData.filter((course) => coursesId.includes(course._id))

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

  const { data: coursesALL } = useCourses()
  const { coursesProgress, isLoading: isProgressLoading } = useProgress(
    user?.uid
  )

  getUserCourses(coursesALL, coursesProgress as UserAccount[])

  const couresesContent = !isProgressLoading ? (
    <S.ProfileCourses>
      {userCour.length > 0
        ? userCour.map((course) => (
            <UiCourseCard
              key={course._id}
              course={course}
              pageType={PageType.Profile}
            />
          ))
        : null}
    </S.ProfileCourses>
  ) : (
    <UiLoader color="purpleDark" />
  )

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
      {couresesContent}

      {/* <S.ProfileCourses>
        {userCour.length > 0
          ? userCour.map((course) => (
              <UiCourseCard
                key={course._id}
                course={course}
                pageType={PageType.Profile}
              />
            ))
          : null}
      </S.ProfileCourses> */}
      {credsModalContent ? credsModalContent : null}
    </S.PageWrapper>
  )
}

export default Profile
