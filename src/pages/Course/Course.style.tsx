import { styled } from 'styled-components'

import { FontSizeType } from '@/theme/themeTypes'

type HeaderProps = {
  fontSize: keyof FontSizeType['fontSize']
}

export const PageWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`
export const BlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  height: 1623px;
  padding-top: 140px;
  padding-left: 140px;
  padding-right: 140px;
  padding-bottom: 95px;
`
export const PrescriptionHeader = styled.div<HeaderProps>`
  font-family: inherit;
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
  margin-top: 75px;
  margin-bottom: 40px;
`
export const PrescriptionBlocks = styled.div`
  display: flex;
  width: 1160px;
  gap: 87px;
`
export const Prescription = styled.div`
  display: flex;
  gap: 24px;
`
export const PrescriptionBlocksItem = styled.li`
  list-style-type: none;
  width: 244px;
`
export const PrescriptionBlocksItemIndex = styled.div`
  border-radius: 1202.287px;
  background: #C7E957;
  display: flex;
  width: 67px;
  height: 67px;
  padding: 10.687px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13.359px;
`
export const DirectionHeader = styled.div<HeaderProps>`
  font-family: inherit;
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
  margin-top: 107px;
  margin-bottom: 22px;
`
export const DirectionBlocks = styled.div`
  column-count: 2;
  column-gap: 168px;
`
export const Effect = styled.div`
  margin-top: 75px;
  width: 1160px;
`
export const Request = styled.div`
  margin-top: 75px;
  margin-bottom: 95px;
  width: 1160px;

  & > div > svg {
    position: absolute;
    width: 1160px;
    height: 300px;
    flex-shrink: 0;
    margin-top: 300px;
  }
  
  & > button {
    position: absolute;
    margin-left: 52px;
    margin-top: 200px;
  }
`
export const RequestText = styled.span`
  position: absolute;
  width: 823px;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  margin-top: 46px;
  margin-left: 52px;
`