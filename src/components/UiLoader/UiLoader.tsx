import * as React from 'react'

import UiImage from '../UiImage'

import { ColorType } from '@/theme/themeTypes'
import { LoaderSize } from './enums'

type PropsType = {
  size?: LoaderSize
  color?: keyof ColorType['colors']
}

const UiLoader = ({ size = LoaderSize.L, color = 'white' }: PropsType) => {
  return <UiImage name="loader" width={size} height={size} color={color} />
}

export default UiLoader
