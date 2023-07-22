import { styled } from 'styled-components'

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
  padding: 140px;
`
export const ProfileDataBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const ProfileHeader = styled.div`
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-top: 75px;
`

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ProfileDataItem = styled.p`
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.s};
`

export const ProfileChangeBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`

export const ProfileCourses = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  padding-top: 60px;
  > div {
    box-shadow: -10px 10px 15px 0px rgba(0, 0, 0, 0.1),
      10px -10px 16px 0px rgba(0, 0, 0, 0.1);
  }
`
