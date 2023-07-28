import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import UiButton from '../UiButton'
import { ButtonSize, ButtonTheme } from '../UiButton/enums'
import UiImage from '../UiImage'

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
    console.log(isHomePage)

    console.log('Пользователь вышел из профиля')
  }

  return (
    <S.Plate>
      {isLogged ? (
        <S.UserPlateBox>
          <S.UseerPlate>
            <S.Avatar />
            <S.UserName page={isHomePage}>Аылвлыволыволыво</S.UserName>
            <S.DropDownButoon onClick={() => setVisible(!visible)}>
              <UiImage
                name="dropdown_button"
                width="17px"
                height="20px"
                color={isHomePage ? 'white' : 'black'}
              />
            </S.DropDownButoon>
          </S.UseerPlate>
          <S.DropDownWraper active={visible}>
            {visible && (
              <S.LogOut
                onClick={() => handleButtonLogoutClick}
                page={isHomePage}
              >
                Выйти
              </S.LogOut>
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
  )
}

export default ProfilePlate
