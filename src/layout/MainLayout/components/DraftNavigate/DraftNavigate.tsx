import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import UiButton from '@/components/UiButton/UiButton'

import * as S from './DraftNavigate.style'

import { RouterPath } from '@/router/routerPath'

const DraftNavigate = () => {
  const navigate = useNavigate()

  return (
    <S.NavWrapper>
      {Object.entries(RouterPath).map(([title, path]) => {
        return (
          <UiButton key={title} title={title} onClick={() => navigate(path)} />
        )
      })}
    </S.NavWrapper>
  )
}

export default DraftNavigate
