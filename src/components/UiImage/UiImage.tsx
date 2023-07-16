import { ColorType } from '@/theme/themeTypes'
import svg from './constants'

import * as S from './UiImage.style'

type PropsType = {
  name: keyof typeof svg
  width?: string
  height?: string
  color?: keyof ColorType['colors']
}

const UiImage = ({ name, width, height, color }: PropsType) => {
  const Svg = svg[name]

  return (
    <S.ImageWrapper>
      <Svg width={width} height={height} color={color} />
    </S.ImageWrapper>
  )
}

export default UiImage
