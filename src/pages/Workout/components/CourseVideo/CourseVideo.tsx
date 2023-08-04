import * as S from './CourseVideo.style'

type PropsType = {
  title: string
  src: string
}

const CourseVideo = ({ title, src }: PropsType) => {
  return (
    <S.VideoBlock>
      <S.VideoTitle>{title}</S.VideoTitle>
      <S.Video
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </S.VideoBlock>
  )
}

export default CourseVideo
