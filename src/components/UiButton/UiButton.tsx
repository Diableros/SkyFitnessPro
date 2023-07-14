import * as React from 'react'

import * as S from './UiButton.style'

type PropsType = {
  title: string
  onClick: () => void
}

const UiButton = ({ title, onClick }: PropsType) => {
  return <S.Button onClick={onClick}>{title}</S.Button>
}

export default UiButton
