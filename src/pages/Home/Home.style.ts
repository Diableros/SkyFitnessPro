import { styled } from 'styled-components'

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  flex-grow: 1;

  padding-top: 6.25rem;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.purpleNormal};
`
export const ContentWrapper = styled.div`
  position: relative;
  width: 1160px;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
`
export const CardsContainer = styled.div`
  flex-grow: 1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  justify-content: center;
  align-content: start;
  gap: 2rem;
`
export const Header = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: 0.9;

  margin-bottom: 3.25rem;
`
export const PreHeader = styled.span`
  color: ${({ theme }) => theme.colors.white50};
  font-family: inherit;
  font-size: 20px;
  margin-bottom: 1rem;
`
export const CloudWrapper = styled.div`
  position: absolute;
  right: -60px;
  top: 0px;
`
