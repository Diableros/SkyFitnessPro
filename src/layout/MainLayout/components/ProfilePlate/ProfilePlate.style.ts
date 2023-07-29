import { styled } from 'styled-components'

type ProfileProps = {
  page?: boolean
  active?: boolean
}

export const Plate = styled.div`
  position: absolute;
  top: 2rem;
  right: 5rem;

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

export const UserName = styled.span<ProfileProps>`
  min-width: 4rem;
  max-width: 10rem;
  cursor: default;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 15px;
  margin-right: 12px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ page, theme }) =>
    page ? theme.colors.white : theme.colors.black};
`
export const DropDownButoon = styled.div<ProfileProps>`
  cursor: pointer;
`

export const UseerPlate = styled.div`
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
  width: 110px;
  height: 50px;
  margin-top: 55px;
  border-radius: 10px;
  right: 0;
`

export const DropDownWraper = styled.div<ProfileProps>`
  position: absolute;
  top: 45px;
  left: 115px;
  overflow: hidden;
  transition: height 0.4s ease-in-out;
  height: ${({ active }) => (active ? '3rem' : '0rem')};
`
export const LogOut = styled.div<ProfileProps>`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ page, theme }) =>
    page ? theme.colors.white : theme.colors.black};
`
