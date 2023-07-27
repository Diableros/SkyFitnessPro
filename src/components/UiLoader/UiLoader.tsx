import UiImage from '../UiImage'

import { ColorType } from '@/theme/themeTypes'
import { LoaderSize } from './enums'

import * as S from './UiLoader.style'

type PropsType = {
  size?: LoaderSize
  color?: keyof ColorType['colors']
}

const UiLoader = ({ size = LoaderSize.L, color = 'white' }: PropsType) => {
  return (
    <S.LoaderWrapper>
      <UiImage name="loader" width={size} height={size} color={color} />
    </S.LoaderWrapper>
  )
}

export default UiLoader
