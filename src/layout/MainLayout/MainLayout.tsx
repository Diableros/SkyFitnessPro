import { Outlet, useLocation } from 'react-router-dom'

import DraftNavigate from './components/DraftNavigate'
import ProfilePlate from '@/components/ProfilePlate'
import UiImage from '@/components/UiImage'

import { LinkPath, RouterPath } from '@/router/enums'

import * as S from './MainLayout.style'

const MainLayout = () => {
  const { pathname } = useLocation()

  const isLogoBlack =
    pathname.includes(LinkPath.Course) ||
    pathname.includes(RouterPath.Profile) ||
    pathname.includes(RouterPath.Workout)

  return (
    <S.Layout>
      <S.LogoWrapper>
        <UiImage name={isLogoBlack ? 'logoBlack' : 'logoWhite'} width="220px" />
      </S.LogoWrapper>
      <ProfilePlate isLogged={true} isHomePage={pathname === RouterPath.Home}/>
      <Outlet />
      <DraftNavigate />
    </S.Layout>
  )
}

export default MainLayout
