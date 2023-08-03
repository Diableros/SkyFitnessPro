import React from 'react'

import UiImage from '../UiImage'

import * as S from './UiModal.style'

type PropsType = {
  children: React.ReactNode
  modalClose: () => void
}

const UiModal = ({ children, modalClose }: PropsType) => {
  return (
    <S.ModalScreen>
      <S.ModalContentBox>
        <S.ImageWrapper onClick={modalClose}>
          <UiImage name="cross" width="20px" height="20px" />
        </S.ImageWrapper>
        {children}
      </S.ModalContentBox>
    </S.ModalScreen>
  )
}

export default UiModal
