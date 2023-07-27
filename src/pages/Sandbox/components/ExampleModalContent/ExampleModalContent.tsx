import UiButton from '@/components/UiButton/UiButton'

import * as S from './ExampleModalContent.style'

type PropsType = {
  onClose?: () => void
}

const ExampleModalContent = ({ onClose }: PropsType) => {
  return (
    <S.ContentWrapper>
      Text from ExampleModalContent component
      <UiButton onClick={onClose} title="Click Me!" />
    </S.ContentWrapper>
  )
}

export default ExampleModalContent
