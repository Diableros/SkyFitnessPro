import { styled } from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.purpleNormal};
`
