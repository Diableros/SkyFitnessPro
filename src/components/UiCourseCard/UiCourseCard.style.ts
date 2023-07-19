import { styled } from 'styled-components'

import { cardSize } from './constants'
import { CardSize } from './enums'

type CourseCard = {
  size: CardSize
  isHomePage?: boolean
}

export const CourseCard = styled.div<CourseCard>`
  position: relative;

  border-radius: 30px;

  width: ${({ size }) => cardSize[size].width};
  height: ${({ size }) => cardSize[size].height};
  cursor: ${({ isHomePage }) => (isHomePage ? 'pointer' : 'default')};

  background-color: ${({ theme }) => theme.colors.white};

  & > button {
    position: absolute;
    left: 30px;
    bottom: 30px;
  }
`

export const CourseName = styled.span`
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: ${({ theme }) => theme.fontSize.l};
`
