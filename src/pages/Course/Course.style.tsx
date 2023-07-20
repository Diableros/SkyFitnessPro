import { styled } from 'styled-components'

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
  width: fit-content;
  padding: 140px 140px 95px 140px;
`
export const PrescriptionHeader = styled.div`
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 75px;
  margin-bottom: 40px;
`
export const PrescriptionBlocks = styled.div`
  display: flex;
  width: fit-content;
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
  border-radius: 1203px;
  background: ${({ theme }) => theme.colors.saladMiddle};
  display: flex;
  width: 67px;
  height: 67px;
  padding: 11px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`
export const DirectionHeader = styled.div`
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 107px;
  margin-bottom: 22px;
`
export const DirectionBlocks = styled.div`
  column-count: 2;
  
`
export const EffectDescription = styled.div`
  margin-top: 75px;
  width: 1160px;
`
export const RequestBanner = styled.div`
  margin-top: 75px;
  margin-bottom: 95px;
  width: 1160px;

  & > div > svg {
    position: absolute;
    flex-shrink: 0;
    margin-top: 300px;
  }

  & > button {
    position: absolute;
    margin-left: 52px;
    margin-top: 200px;
  }
`
export const RequestBannerText = styled.span`
  position: absolute;
  width: 823px;
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 40px;
  margin-top: 46px;
  margin-left: 52px;
`
