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

  background-color: ${({ theme }) => theme.colors.purpleNormal};
`
export const GeneralWrapper = styled.div`
  gap: 52px;
  display: flex;
  flex-direction: column;
`
export const CardsContainer = styled.div`
  height: 1004px;
  width: 1160px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purpleNormal};
`
export const HeaderWrapper = styled.div`
  width: 1160px;

  display: flex;
  width: 1160px;
  gap: 17px;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const Header = styled.span<HeaderProps>`
  width: 900px;
  color: #f4f4ff;
  font-family: inherit;
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
  font-style: normal;
  font-weight: 400;
  line-height: 54px;
  letter-spacing: -1.169px;
`
export const PreHeader = styled.span`
  color: var(--monochrome-white-20, #fff);
  font-family: inherit;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; /* 23px */
  letter-spacing: -0.05px;
`
export const CloudWrapper = styled.div`
  width: 250px;
  height: 190px;
  position: absolute;
  margin-left: 949px;
  margin-top: 5px;
`
