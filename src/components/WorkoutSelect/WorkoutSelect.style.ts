import { styled } from 'styled-components'

type WorkoutSelectProps = {
  $isFinished?: boolean
}

export const SelectWrapper = styled.div`
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 36px 53px 58px;
`
export const SelectHeader = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 40px;
`
export const SelectItem = styled.div<WorkoutSelectProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 23px;
  width: 278px;
  border-radius: 26px;
  border: 1px solid
    ${({ $isFinished, theme }) =>
      !$isFinished ? theme.colors.black : theme.colors.mint};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: center;
  padding: 11px 27px 17px 27px;
  ${({ $isFinished }) => ($isFinished ? 'padding-right: 40px' : null)};
  position: relative;
  color: ${({ $isFinished, theme }) =>
    !$isFinished ? theme.colors.black : theme.colors.mint};
  cursor: pointer;

  & > div {
    position: absolute;
    top: 8px;
    right: 5px;
  }
`
