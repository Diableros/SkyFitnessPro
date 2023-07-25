import { useNavigate } from 'react-router-dom'

import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiButton from '@/components/UiButton/UiButton'

import * as S from './DraftNavigate.style'

import { RouterPath } from '@/router/enums'

const DraftNavigate = () => {
  const navigate = useNavigate()

  return (
    <S.NavWrapper>
      {Object.entries(RouterPath).map(([title, path]) => {
        return (
          <UiButton
            key={title}
            title={title}
            onClick={() => navigate(path)}
            buttonTheme={ButtonTheme.Purple}
            size={ButtonSize.S}
            fontSize="xs"
          />
        )
      })}
    </S.NavWrapper>
  )
}

export default DraftNavigate
