import { styled } from 'styled-components'

export const FormInput = styled.input`
  width: 279px;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  line-height: 24px;
  outline: none;
  margin-bottom: 38px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`
