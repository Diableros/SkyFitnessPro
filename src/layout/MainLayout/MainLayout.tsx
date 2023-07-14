import { Outlet } from 'react-router-dom'

import DraftNavigate from './components/DraftNavigate'
import ProfilePlate from '@/components/ProfilePlate'

import * as S from './MainLayout.style'

const MainLayout = () => {
  return (
    <S.Layout>
      <ProfilePlate />
      <Outlet />
      <DraftNavigate />
    </S.Layout>
  )
}

export default MainLayout
