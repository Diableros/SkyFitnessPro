import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiButton from '@/components/UiButton/UiButton'
import UiCourseCard from '@/components/UiCourseCard'
import { PageType } from '@/components/UiCourseCard/enums'
import { mockData } from '../Home/mockData'

import * as S from './Profile.style'

import { user } from './mockUserData'

const { login, password, coursesId } = user
const userCourses = mockData.filter((course) => coursesId.includes(course._id))

const Profile = () => {
  const handleClick = () => {
    // TODO открытие модалок смены логина/пароля
    alert('открылась модалка')
  }
  return (
    <S.PageWrapper>
      <S.ProfileDataBlock>
        <S.ProfileHeader>Мой профиль</S.ProfileHeader>

        <S.ProfileData>
          <S.ProfileDataItem>Логин: {login}</S.ProfileDataItem>
          <S.ProfileDataItem>Пароль: {password}</S.ProfileDataItem>
        </S.ProfileData>

        <S.ProfileChangeBtns>
          <UiButton
            title="Редактировать логин"
            buttonTheme={ButtonTheme.PurpleBright}
            fontSize="s"
            size={ButtonSize.L}
            onClick={handleClick}
          ></UiButton>

          <UiButton
            title="Редактировать пароль"
            buttonTheme={ButtonTheme.PurpleBright}
            fontSize="s"
            size={ButtonSize.L}
            onClick={handleClick}
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
                $pageType={PageType.Profile}
              />
            ))
          : null}
      </S.ProfileCourses>
    </S.PageWrapper>
  )
}

export default Profile
