import { styled } from 'styled-components'

export const Button = styled.button`
  height: 3rem;
  width: 10rem;

  background-color: ${({ theme }) => theme.colors.saladNormal};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.m};

  cursor: pointer;

  outline: none;

  border: none;
  border-radius: 1.5rem;
`
