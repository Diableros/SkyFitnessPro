import { styled } from 'styled-components'

export const ProgressInput = styled.input`
  width: 361px;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  line-height: 30px;
  outline: none;
  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`
