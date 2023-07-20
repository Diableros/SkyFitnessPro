import { styled } from 'styled-components'

import { FontSizeType } from '@/theme/themeTypes'
import { buttonPalette, buttonSize } from './constants'
import { ButtonSize, ButtonTheme } from './enums'

type ButtonProps = {
  size: ButtonSize
  $buttontheme: ButtonTheme
  fontSize: keyof FontSizeType['fontSize']
  $outlined: boolean
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  border: none;
  border-radius: 5rem;

  padding: ${({ size }) => buttonSize[size].padding};
  min-width: ${({ size }) => buttonSize[size].minWidth};

  font-family: inherit;
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
  color: ${({ $buttontheme }) => buttonPalette[$buttontheme].textColor};

  background-color: ${({ $buttontheme }) =>
    buttonPalette[$buttontheme].regular};

  &:hover {
    background-color: ${({ $buttontheme }) =>
      buttonPalette[$buttontheme].hover};
  }

  &:active {
    background-color: ${({ $buttontheme }) =>
      buttonPalette[$buttontheme].active};
  }

  ${({ $outlined, theme }) =>
    $outlined ? `border: 1px solid ${theme.colors.gray};` : ''}

  cursor: pointer;
`
