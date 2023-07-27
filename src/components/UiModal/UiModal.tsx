import React from 'react'

import UiImage from '../UiImage'

import * as S from './UiModal.style'

type ChildProps = {
  onClose: () => void
}

type PropsType = {
  children: React.ReactElement<ChildProps>
  isShow?: boolean
}

const UiModal = ({ children, isShow = true }: PropsType) => {
  const [isShowModal, toggleIsShowModal] = React.useReducer(
    (state: boolean) => !state,
    isShow
  )

  const Content = children.type

  const handleCloseModal = () => {
    console.log('Call onClose func')
    toggleIsShowModal()
  }

  return isShowModal ? (
    <S.ModalScreen>
      <S.ModalContentBox>
        <S.ImageWrapper onClick={handleCloseModal}>
        <UiImage name="cross" width='20px' height='20px'/>
        </S.ImageWrapper>
        <Content onClose={handleCloseModal} />
      </S.ModalContentBox>
    </S.ModalScreen>
  ) : null
}

export default UiModal
