import { styled } from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.purpleNormal};
`
