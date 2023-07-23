import React from 'react'

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
      <Content onClose={handleCloseModal} />
    </S.ModalScreen>
  ) : null
}

export default UiModal
