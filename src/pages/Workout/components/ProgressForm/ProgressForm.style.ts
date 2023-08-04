import { styled } from 'styled-components'

export const ProgressWrapper = styled.div`
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 36px 42px 44px;
  position: relative;
`
export const ProgressHeader = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
`

export const ProgressLabelText = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  width: 361px;
`

export const ImageHeader = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  position: absolute;
  padding: 41px 88px 223px;
`
export const ProgressInputsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 12px;
`
