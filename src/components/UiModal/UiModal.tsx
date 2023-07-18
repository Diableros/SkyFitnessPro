import React from 'react'

import * as S from './UiModal.style'

type PropsType = {
  children: React.ReactNode
}

const UiModal = ({ children }: PropsType) => {
  return <S.ModalScreen>{children}</S.ModalScreen>
}

export default UiModal
