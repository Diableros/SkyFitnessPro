import { styled } from 'styled-components'

import { InputType } from './enums'

type InputProps = {
  $inputType?: InputType
}

export const CredsFormWrapper = styled.div<InputProps>`
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
export const CredsFormHeader = styled.span<InputProps>`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 20px;
`
export const CredsFormError = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.coral};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  position: absolute;
  top: 90px;
  left: 5px;
`
