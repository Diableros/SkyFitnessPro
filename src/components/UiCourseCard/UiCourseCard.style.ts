import { styled } from 'styled-components'

type CourseCard = {
  cardWidth: string
  cardHeight: string
}

export const CourseCard = styled.div<CourseCard>`
  position: relative;

  border-radius: 30px;
  border: 1px solid black;
  width: ${({ cardWidth }) => cardWidth};
  height: ${({ cardHeight }) => cardHeight};

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
