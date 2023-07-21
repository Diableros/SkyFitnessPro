import { Outlet, useLocation } from 'react-router-dom'

import DraftNavigate from './components/DraftNavigate'
import ProfilePlate from '@/components/ProfilePlate'
import UiImage from '@/components/UiImage'

import * as S from './MainLayout.style'

import { RouterPath } from '@/router/routerPath'

const MainLayout = () => {
  const { pathname } = useLocation()

  const isLogoBlack =
    pathname.includes(RouterPath.Course) ||
    pathname.includes(RouterPath.Profile) ||
    pathname.includes(RouterPath.Workout)

  return (
    <S.Layout>
      <S.LogoWrapper>
        <UiImage name={isLogoBlack ? 'logoBlack' : 'logoWhite'} width="220px" />
      </S.LogoWrapper>
      <ProfilePlate />
      <Outlet />
      <DraftNavigate />
    </S.Layout>
  )
}

export default MainLayout
