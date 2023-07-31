import { ColorType } from '@/theme/themeTypes'
import svg from './constants'

import * as S from './UiImage.style'

type PropsType = {
  name: keyof typeof svg
  width?: string
  height?: string
  color?: keyof ColorType['colors']
  onClick?: () => void
}

const UiImage = ({
  name,
  width = '100%',
  height = '100%',
  color,
  onClick,
}: PropsType) => {
  const Svg = svg[name]

  return (
    <S.ImageWrapper onClick={onClick} $isInteractive={Boolean(onClick)}>
      <Svg width={width} height={height} color={color} />
    </S.ImageWrapper>
  )
}

export default UiImage
