import { styled } from 'styled-components'

export const Plate = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  width: 12rem;
  height: 3rem;

  display: flex;
  flex-wrap: nowrap;

  align-items: center;

  gap: 1rem;
`

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grayDark};
`

export const UserName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
`
