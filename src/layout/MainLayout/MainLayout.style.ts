import { styled } from 'styled-components'

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: ${({ theme }) => theme.colors.grayExtraLight};
`

export const LogoWrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 5rem;
`
