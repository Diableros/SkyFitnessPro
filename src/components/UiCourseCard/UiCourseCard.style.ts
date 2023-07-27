import { styled } from 'styled-components'

import { cardView } from './constants'
import { CardView, PageType } from './enums'

type CourseProps = {
  size: CardView
  $pageType?: PageType
}

export const CourseCard = styled.div<CourseProps>`
  position: relative;

  border-radius: 30px;
  width: ${({ size }) => cardView[size].width};
  height: ${({ size }) => cardView[size].height};
  ${({ $pageType }) =>
    $pageType === PageType.Home ? 'cursor: pointer;' : null}
  background-color: ${({ theme }) => theme.colors.white};

  & > button {
    position: absolute;
    left: 30px;
    bottom: 30px;
  }
`

export const CardTitle = styled.span<CourseProps>`
  position: absolute;
  top: 35px;
  left: 30px;

  font-size: ${({ $pageType, theme }) =>
    $pageType === PageType.Course ? theme.fontSize.xxl : theme.fontSize.l};
  line-height: normal;
`
