import { styled } from 'styled-components'

import { FontSizeType } from '@/theme/themeTypes'
import { buttonPalette, buttonSize } from './constants'
import { ButtonSize, ButtonTheme } from './enums'

type ButtonProps = {
  size: ButtonSize
  buttontheme: ButtonTheme
  fontsize: keyof FontSizeType['fontSize']
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  border: none;
  border-radius: 5rem;

  padding: ${({ size }) => buttonSize[size].padding};
  min-width: ${({ size }) => buttonSize[size].minWidth};

  font-family: inherit;
  font-size: ${({ theme, fontsize }) => theme.fontSize[fontsize]};
  color: ${({ buttontheme }) => buttonPalette[buttontheme].textColor};

  background-color: ${({ buttontheme }) => buttonPalette[buttontheme].regular};

  &:hover {
    background-color: ${({ buttontheme }) => buttonPalette[buttontheme].hover};
  }

  &:active {
    background-color: ${({ buttontheme }) => buttonPalette[buttontheme].active};
  }

  cursor: pointer;
`
