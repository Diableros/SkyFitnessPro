import React from 'react'

import { FontSizeType } from '@/theme/themeTypes'
import { ButtonSize, ButtonTheme } from './enums'

import * as S from './UiButton.style'

type PropsType = {
  title: string
  onClick?: (event: React.MouseEvent) => void
  size?: ButtonSize
  buttonTheme?: ButtonTheme
  fontSize?: keyof FontSizeType['fontSize']
  outlined?: boolean
}

const UiButton = ({
  title,
  onClick,
  size = ButtonSize.L,
  buttonTheme = ButtonTheme.PurpleBright,
  fontSize = 's',
  outlined = false,
}: PropsType) => {
  return (
    <S.Button
      onClick={onClick}
      buttontheme={buttonTheme}
      size={size}
      fontSize={fontSize}
      outlined={outlined}
    >
      {title}
    </S.Button>
  )
}

export default UiButton
