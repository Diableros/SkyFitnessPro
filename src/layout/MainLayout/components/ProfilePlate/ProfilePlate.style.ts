import { styled } from 'styled-components'

type ProfileProps = {
  $page?: boolean
  $active?: boolean
}

export const Plate = styled.div`
  position: absolute;
  top: 2rem;
  right: 5rem;

  width: 12rem;
  height: 3rem;

  display: flex;
  flex-wrap: nowrap;

  justify-content: flex-end;
  align-items: center;

  gap: 1rem;

  z-index: 99;
`

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grayDark};
`

export const UserName = styled.span<ProfileProps>`
  min-width: 4rem;
  max-width: 10rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 15px;
  margin-right: 12px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ $page, theme }) =>
    $page ? theme.colors.white : theme.colors.black};
`
export const DropDownButoon = styled.div<ProfileProps>`
  cursor: pointer;
`

export const UserPlate = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const UserPlateBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const dropdownMenu = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.grayNormal};
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  margin-top: 55px;
  border-radius: 10px;
  right: 0;
`

export const DropDownWrapper = styled.div<ProfileProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  position: absolute;
  top: 2rem;
  right: 0rem;
  width: 100%;

  overflow: hidden;
  transition: height 0.3s ease-in-out;
  height: ${({ $active }) => ($active ? '9rem' : '0rem')};
`
export const MenuItem = styled.div<ProfileProps>`
  width: inherit;
  text-align: right;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.7;

  color: ${({ $page, theme }) =>
    $page ? theme.colors.white : theme.colors.black};

  &:hover {
    color: ${({ theme }) => theme.colors.grayNormal};
  }
`
