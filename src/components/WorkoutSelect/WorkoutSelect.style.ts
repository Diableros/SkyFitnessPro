import { styled } from 'styled-components'

export const ComponentWrapper = styled.div`
  width: 444px;
  height: 626px;
  border-radius: 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ComponentHeader = styled.span`
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.m};
`
export const ComponentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 278px;
  height: 76px;
  border-radius: 26px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: inherit;
  text-align: center;
  & > div {
    position: absolute;
    margin-bottom: 36px;
    margin-left: 239px;
  }
`
