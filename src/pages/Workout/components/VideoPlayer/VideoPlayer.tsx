import * as S from './VideoPlayer.style'

type PropsType = {
  title: string
  src: string
  width?: string
  height?: string
}

const VideoPlayer = ({
  title,
  src,
  width = '1160px',
  height = '640px',
}: PropsType) => {
  return (
    <S.VideoBlock>
      <S.VideoTitle>{title}</S.VideoTitle>
      <iframe
        src={src}
        width={width}
        height={height}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </S.VideoBlock>
  )
}

export default VideoPlayer
