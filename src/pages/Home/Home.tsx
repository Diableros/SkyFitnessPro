import * as React from 'react'

import { PageType } from '@/components/UiCourseCard/enums'
import UiCourseCard from '@/components/UiCourseCard/UiCourseCard'
import UiImage from '@/components/UiImage'
import UiLoader from '@/components/UiLoader'

import ApiService from '@/api/ApiService'
import { Course } from '@/api/types'
import useCourses from '@/api/hooks/useCourses'
import useWorkouts from '@/api/hooks/useWorkouts'

import * as S from './Home.style'

const Home = () => {
  const { data, isLoading } = useCourses()
  const {
    data: workData,
    isLoading: workIsLoading,
    error: workError,
    isError: workIsError,
  } = useWorkouts()

  React.useEffect(() => {
    ApiService.createUser('diablero555@gmail.com', 'NewName')
    // .then(() => {
    //   ApiService.updateUserProgress('q02a6i', '17oz5f', [6, 6, 6])
    // })
    // console.group()
    // console.log(`workData =>`, workData)
    // console.log(`workIsLoading =>`, workIsLoading)
    // console.log(`workIsError =>`, workIsError)
    // console.log(`workError =>`, workError)
    // console.groupEnd()
  }, [workData, workIsLoading, workIsError, workError])

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
