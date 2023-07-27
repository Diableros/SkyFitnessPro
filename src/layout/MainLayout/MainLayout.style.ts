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
  width: 1160px;
  margin: 2rem auto 0;
  & > div {
    justify-content: flex-start;
  }
`
