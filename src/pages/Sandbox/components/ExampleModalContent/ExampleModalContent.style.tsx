import { styled } from 'styled-components'

export const ContentWrapper = styled.div`
  width: 20rem;
  height: 30rem;
  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
`
