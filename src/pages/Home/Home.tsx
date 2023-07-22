import { PageType } from '@/components/UiCourseCard/enums'
import UiCourseCard from '@/components/UiCourseCard/UiCourseCard'
import UiImage from '@/components/UiImage'

import { FontSizeType } from '@/theme/themeTypes'

import * as S from './Home.style'

import { mockData } from './mockData'

type PropsType = {
  fontSize?: keyof FontSizeType['fontSize']
}

const Home = ({ fontSize = 'xxl' }: PropsType) => {
  return (
    <S.PageWrapper>
      <S.GeneralWrapper>
        <S.HeaderWrapper>
          <S.PreHeader>Онлайн-тренировки для занятий дома</S.PreHeader>
          <S.Header fontSize={fontSize}>
            Начните заниматься спортом и улучшите качество жизни
          </S.Header>
        </S.HeaderWrapper>
        <S.CardsContainer>
          {mockData
            ? mockData.map((course) => (
                <UiCourseCard key={course._id} course={course} $pageType = {PageType.Home}/>
              ))
            : null}
        </S.CardsContainer>
        <S.CloudWrapper>
          <UiImage name={'cloud'} />
        </S.CloudWrapper>
      </S.GeneralWrapper>
    </S.PageWrapper>
  )
}

export default Home
