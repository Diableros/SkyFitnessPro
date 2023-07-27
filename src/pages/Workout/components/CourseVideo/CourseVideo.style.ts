import { styled } from 'styled-components'

export const VideoBlock = styled.div`
  margin-bottom: 75px;
`

export const VideoTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 40px;
`

export const Video = styled.iframe`
  width: 1160px;
  height: 640px;
  border: none;
`
