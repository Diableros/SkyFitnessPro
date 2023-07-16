import UiLoader from '@/components/UiLoader'
import { LoaderSize } from '@/components/UiLoader/enums'

import * as S from './NotFound.style'

const NotFound = () => {
  return (
    <S.PageWrapper>
      <UiLoader />
    </S.PageWrapper>
  )
}

export default NotFound
