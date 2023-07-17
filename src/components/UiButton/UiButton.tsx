import React from 'react'

import { FontSizeType } from '@/theme/themeTypes'
import { ButtonSize, ButtonTheme } from './enums'

import * as S from './UiButton.style'

type PropsType = {
  title: string
  onClick: (event: React.MouseEvent) => void
  size?: ButtonSize
  buttonTheme?: ButtonTheme
  fontSize?: keyof FontSizeType['fontSize']
}

const UiButton = ({
  title,
  onClick,
  size = ButtonSize.L,
  buttonTheme = ButtonTheme.PurpleBright,
  fontSize = 's',
}: PropsType) => {
  return (
    <S.Button
      onClick={onClick}
      buttontheme={buttonTheme}
      size={size}
      fontSize={fontSize}
    >
      {title}
    </S.Button>
  )
}

export default UiButton
