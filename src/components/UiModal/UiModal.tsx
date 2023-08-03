import React from 'react'

import UiImage from '../UiImage'

import * as S from './UiModal.style'

type ChildProps = {
  onClose: () => void
}

type PropsType = {
  children: React.ReactElement<ChildProps>
  modalClose:()=> void
}

const UiModal = ({ children,modalClose}: PropsType) => {
 

  const Content = children.type


  return (
    <S.ModalScreen>
      <S.ModalContentBox>
        <S.ImageWrapper onClick={modalClose}>
          <UiImage name="cross" width="20px" height="20px" />
        </S.ImageWrapper>
        <Content {...children.props} onClose={modalClose} />
      </S.ModalContentBox>
    </S.ModalScreen>
  ) 
}

export default UiModal
