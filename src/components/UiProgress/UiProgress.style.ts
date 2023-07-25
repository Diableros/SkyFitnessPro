import { styled } from 'styled-components'

export const ProgressWrapper = styled.form`
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 36px 42px 44px;
`
export const ProgressHeader = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
`

export const ProgressLabelText = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  width: 361px;
`
