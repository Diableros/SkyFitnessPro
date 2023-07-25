import { styled } from 'styled-components'

type ProgressProps = {
  percentage: string
}

export const ProgressBlock = styled.div`
  padding: 32px 44px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.grayLight};
`

export const ProgressTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 30px;
  text-align: center;
`

export const ProgressStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  > div:nth-child(1n) > div:last-child {
    border: 2px solid ${({ theme }) => theme.colors.progressBlue};
  }
  > div:nth-child(2n) > div:last-child {
    border: 2px solid ${({ theme }) => theme.colors.progressOrange};
  }
  > div:nth-child(3n) > div:last-child {
    border: 2px solid ${({ theme }) => theme.colors.progressPurple};
  }
  > div:nth-child(1n) > div:last-child > div {
    background-color: ${({ theme }) => theme.colors.progressBlue};
  }
  > div:nth-child(2n) > div:last-child > div {
    background-color: ${({ theme }) => theme.colors.progressOrange};
  }
  > div:nth-child(3n) > div:last-child > div{
    background-color: ${({ theme }) => theme.colors.progressPurple};
  }
`

export const ProgressStatsItem = styled.div`
  display: flex;
  align-items: center;
`

export const ProgressName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  max-width: 230px;
`

export const ProgressBar = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 40px;
  border-radius: 22px;
  overflow: hidden;

`

export const Progress = styled.div<ProgressProps>`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  width: ${({ percentage }) => percentage};
  height: 100%;
`
