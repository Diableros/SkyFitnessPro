import { styled } from 'styled-components'

export const PageWrapper = styled.div`
  height: 100%;
  width: 1160px;

  display: flex;
  flex-flow: column nowrap;

  padding: 140px 0;
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
  border-radius: 34px;
  background: ${({ theme }) => theme.colors.saladNormal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 67px;
  height: 67px;

  font-size: ${({ theme }) => theme.fontSize.l};
`
export const DirectionHeader = styled.div`
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 75px;
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
  position: relative;

  margin-top: 75px;

  & > button {
    position: absolute;

    left: 3.25rem;
    bottom: 3rem;
  }
`
export const RequestBannerText = styled.span`
  position: absolute;
  width: 823px;
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 40px;
  top: 46px;
  left: 52px;
`

export const ImageHeader = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  position: absolute;
  padding: 25px 88px 223px;
`
export const CurseModalWrapper = styled.div`
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 36px 42px 44px;
  position: relative;

`


