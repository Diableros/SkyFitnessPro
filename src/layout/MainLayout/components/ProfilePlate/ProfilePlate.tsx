import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import UiButton from '@/components/UiButton'
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiImage from '@/components/UiImage'

import api from '@/api/ApiService'
import { Action } from '@/context'
import { useUserContext } from '@/context'

import { RouterPath } from '@/router/enums'

import * as S from './ProfilePlate.style'

type PropsType = {
  visible: boolean
}

const ProfilePlate = ({ visible }: PropsType) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const { user, dispatch } = useUserContext()

  const [isMenuShow, setIsMenuShow] = React.useState<boolean>(!!user)

  const isHomePage = pathname === RouterPath.Home

  const handleButtonLoginClick = () => {
    navigate(RouterPath.Auth)
  }

  const handleLogoutClick = () => {
    api.logoutUser().then(() => {
      dispatch({
        type: Action.Logout,
      })
      navigate(RouterPath.Home)
    })
  }

  return (
    <>
      {visible ? (
        <S.Plate onMouseLeave={() => setIsMenuShow(!isMenuShow)}>
          {user ? (
            <S.UserPlateBox>
              <S.UserPlate onClick={() => setIsMenuShow(!isMenuShow)}>
                <S.Avatar />
                <S.UserName $page={isHomePage}>
                  {user.displayName || user.email}
                </S.UserName>
                <S.DropDownButoon>
                  <UiImage
                    name="dropdown_button"
                    width="17px"
                    height="20px"
                    color={isHomePage ? 'white' : 'black'}
                  />
                </S.DropDownButoon>
              </S.UserPlate>
              <S.DropDownWrapper $active={isMenuShow}>
                <S.MenuItem
                  onClick={() => navigate(RouterPath.Home)}
                  $page={isHomePage}
                >
                  На главную
                </S.MenuItem>
                <S.MenuItem
                  onClick={() => navigate(RouterPath.Profile)}
                  $page={isHomePage}
                >
                  Профиль
                </S.MenuItem>
                <S.MenuItem onClick={handleLogoutClick} $page={isHomePage}>
                  Выйти
                </S.MenuItem>
              </S.DropDownWrapper>
            </S.UserPlateBox>
          ) : (
            <UiButton
              onClick={handleButtonLoginClick}
              title="Войти"
              buttonTheme={ButtonTheme.Purple}
              fontSize="s"
              size={ButtonSize.S}
            />
          )}
        </S.Plate>
      ) : (
        ''
      )}
    </>
  )
}

export default ProfilePlate
