import { styled } from 'styled-components'

export const PageWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.purpleNormal};
`
