import React from 'react'

import { FontSizeType } from '@/theme/themeTypes'
import { ButtonSize, ButtonTheme } from './enums'

import * as S from './UiButton.style'

type PropsType = {
  title: string
  buttonType?: 'button' | 'submit'
  onClick?: (event: React.MouseEvent) => void
  size?: ButtonSize
  buttonTheme?: ButtonTheme
  fontSize?: keyof FontSizeType['fontSize']
  outlined?: boolean
}

const UiButton = ({
  title,
  buttonType = 'button',
  onClick,
  size = ButtonSize.L,
  buttonTheme = ButtonTheme.PurpleBright,
  fontSize = 's',
  outlined = false,
}: PropsType) => {
  return (
    <S.Button
      type={buttonType}
      onClick={onClick}
      $buttontheme={buttonTheme}
      size={size}
      fontSize={fontSize}
      $outlined={outlined}
    >
      {title}
    </S.Button>
  )
}

export default UiButton
