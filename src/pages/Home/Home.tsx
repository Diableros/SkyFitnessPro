import { PageType } from '@/components/UiCourseCard/enums'
import UiCourseCard from '@/components/UiCourseCard/UiCourseCard'
import UiImage from '@/components/UiImage'
import UiLoader from '@/components/UiLoader'

import { useCourses } from '@/api/hooks'
import { Course } from '@/api/types'

import * as S from './Home.style'

const Home = () => {
  const { data, isLoading } = useCourses()

  return (
    <S.PageWrapper>
      <S.ContentWrapper>
        <S.PreHeader>Онлайн-тренировки для занятий дома</S.PreHeader>

        <S.Header>
          Начните заниматься спортом и улучшите качество жизни
        </S.Header>

        {!(data instanceof Error) && !isLoading && data ? (
          <S.CardsContainer>
            {data.map((course: Course) => (
              <UiCourseCard
                key={course._id}
                course={course}
                pageType={PageType.Home}
              />
            ))}
          </S.CardsContainer>
        ) : (
          <UiLoader color="white" />
        )}

        <S.CloudWrapper>
          <UiImage name={'cloud'} width="250px" />
        </S.CloudWrapper>
      </S.ContentWrapper>
    </S.PageWrapper>
  )
}

export default Home
