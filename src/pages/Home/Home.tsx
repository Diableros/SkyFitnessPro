import UiCourseCard from '@/components/UiCourseCard/UiCourseCard'
import UiImage from '@/components/UiImage'

import * as S from './Home.style'

import { mockData } from './mockData'

const Home = () => {
  return (
    <S.PageWrapper>
      {mockData
        ? mockData.map((course) => (
            <>
              <UiCourseCard key={course._id} course={course} />
              <UiCourseCard key={course._id} course={course} isHomePage />
            </>
          ))
        : null}
    </S.PageWrapper>
  )
}

export default Home
