import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import UiButton from '../../../../components/UiButton'
import { ButtonSize, ButtonTheme } from '../../../../components/UiButton/enums'
import UiImage from '../../../../components/UiImage'

import { Action } from '@/context'
import { useUserContext } from '@/context'

import { RouterPath } from '@/router/enums'

import * as S from './ProfilePlate.style'

type PropsType = {
  visible: boolean
}

const ProfilePlate = ({ visible }: PropsType) => {
  const { logged: isLogged, dispatch } = useUserContext()
  const [isLogoutShow, setIsLogoutShow] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  console.log(visible)

  const isHomePage = pathname === RouterPath.Home

  const handleButtonLoginClick = () => {
    navigate(`${RouterPath.Auth}`)
  }

  const handleButtonLogoutClick = () => {
    console.log(isHomePage)

    dispatch({
      type: Action.Login,
      payload: false,
    })

    navigate(`${RouterPath.Auth}`)
  }

  return (
    <>
      {visible ? (
        <S.Plate>
          {isLogged ? (
            <S.UserPlateBox>
              <S.UseerPlate onClick={() => setIsLogoutShow(!isLogoutShow)}>
                <S.Avatar />
                <S.UserName $page={isHomePage}>User Name</S.UserName>
                <S.DropDownButoon>
                  <UiImage
                    name="dropdown_button"
                    width="17px"
                    height="20px"
                    color={isHomePage ? 'white' : 'black'}
                  />
                </S.DropDownButoon>
              </S.UseerPlate>
              <S.DropDownWraper $active={isLogoutShow}>
                {isLogoutShow ? (
                  <S.LogOut
                    onClick={() => handleButtonLogoutClick}
                    $page={isHomePage}
                  >
                    Выйти
                  </S.LogOut>
                ) : (
                  ''
                )}
              </S.DropDownWraper>
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
