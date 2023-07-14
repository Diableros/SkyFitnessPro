import { styled } from 'styled-components'

export const Plate = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  width: 12rem;
  height: 3rem;

  background-color: ${({ theme }) => theme.colors.grayDark};
`
