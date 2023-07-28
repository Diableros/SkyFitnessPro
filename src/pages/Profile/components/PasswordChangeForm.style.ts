import { styled } from 'styled-components'

export const PasswordFormWrapper = styled.div`
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 106px 41px 47px;
  position: relative;
  
  && > div > svg {
    position: absolute;
    top: 33px;
    left: 73px;
  }
`
export const PasswordFormHeader = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 20px;
`
export const PasswordFormError = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.coral};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  position: absolute;
  top: 300px;
  left: 5px;
`
