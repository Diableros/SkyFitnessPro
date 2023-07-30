import * as React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

// import DraftNavigate from './components/DraftNavigate'
import UiImage from '@/components/UiImage'
import ProfilePlate from '@/layout/MainLayout/components/ProfilePlate'

import { useUserContext } from '@/context'

import { LinkPath, RouterPath } from '@/router/enums'

import * as S from './MainLayout.style'

const MainLayout = () => {
  const { pathname } = useLocation()
  const { user } = useUserContext()

  const isLogoBlack =
    pathname.includes(LinkPath.Course) ||
    pathname.includes(RouterPath.Profile) ||
    pathname.includes(RouterPath.Workout)

  React.useEffect(() => {
    console.log('Control state: ', user)
  }, [])

  return (
    <S.Layout>
      <S.LogoWrapper>
        <UiImage name={isLogoBlack ? 'logoBlack' : 'logoWhite'} width="220px" />
      </S.LogoWrapper>
      <ProfilePlate visible={pathname !== RouterPath.Auth} />
      <Outlet />
      {/* <DraftNavigate /> */}
    </S.Layout>
  )
}

export default MainLayout
