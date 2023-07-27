import { styled } from 'styled-components'

import { ColorType } from '@/theme/themeTypes'

type ImageWrapper = {
  color?: keyof ColorType['colors']
}

export const ImageWrapper = styled.div<ImageWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ color, theme }) => (color ? `color: ${theme.colors[color]};` : '')};
`
