import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import UiButton from '../UiButton'
import { ButtonSize, ButtonTheme } from '../UiButton/enums'
import UiImage from '../UiImage'

import { theme } from '@/theme/constants'
import { RouterPath } from '@/router/enums'

import * as S from './ProfilePlate.style'

type PropsType = {
  isLogged: boolean
  isHomePage: boolean
}

const ProfilePlate = ({ isLogged, isHomePage }: PropsType) => {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  const handleButtonLoginClick = () => {
    navigate(`${RouterPath.Auth}`)
  }
  const handleButtonLogoutClick = () => {
    console.log('Пользователь вышел из профиля')
  }

  return (
    <S.Plate>
      {isLogged ? (
        <S.UserPlateBox>
          <S.UseerPlate>
            <S.Avatar />
            <S.UserName page={isHomePage}>User</S.UserName>
            <S.DropDownButoon
              page={isHomePage}
              onClick={() => setVisible(!visible)}
            >
              <UiImage
                name="dropdown_button"
                width="17px"
                height="20px"
                // color={isHomePage ? theme.colors.white : theme.colors.black}
              />
            </S.DropDownButoon>
          </S.UseerPlate>
          {visible && (
            <S.dropdownMenu>
              <UiButton
                onClick={handleButtonLogoutClick}
                title="Выйти"
                buttonTheme={ButtonTheme.Purple}
                fontSize="s"
                size={ButtonSize.S}
              />
            </S.dropdownMenu>
          )}
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
  )
}

export default ProfilePlate
