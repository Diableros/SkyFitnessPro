import { Outlet, useLocation, useNavigate } from 'react-router-dom'

// import DraftNavigate from './components/DraftNavigate'
import UiImage from '@/components/UiImage'
import ProfilePlate from '@/layout/MainLayout/components/ProfilePlate'

import { LinkPath, RouterPath } from '@/router/enums'

import * as S from './MainLayout.style'

const MainLayout = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isLogoBlack =
    pathname.includes(LinkPath.Course) ||
    pathname.includes(RouterPath.Profile) ||
    pathname.includes(LinkPath.Workout)

  const isLogoInteractive = pathname !== RouterPath.Home

  return (
    <S.Layout>
      <S.LogoWrapper>
        <UiImage
          onClick={
            isLogoInteractive ? () => navigate(RouterPath.Home) : undefined
          }
          name={isLogoBlack ? 'logoBlack' : 'logoWhite'}
          width="220px"
        />
      </S.LogoWrapper>
      <ProfilePlate visible={pathname !== RouterPath.Auth} />
      <Outlet />
      {/* <DraftNavigate /> */}
    </S.Layout>
  )
}

export default MainLayout
