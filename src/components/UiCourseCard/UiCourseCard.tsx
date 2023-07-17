// import UiImage from '../UiImage'

import { useNavigate } from 'react-router-dom'

import { ButtonSize, ButtonTheme } from '../UiButton/enums'
import UiButton from '../UiButton/UiButton'
import UiImage from '../UiImage'
import svg from '../UiImage/constants'

import * as S from './UiCourseCard.style'

import { Course } from '@/pages/Home/mockData'

//fetch func? + navigation

type PropsType = {
  course: Course
  isHomePage?: boolean
}

const UiCourseCard = ({
  course: { nameRU, nameEN, order },
  isHomePage,
}: PropsType) => {
  const navigate = useNavigate()

  const width = '360px'
  const height = '480px'

  const handleCardClick = () => {
    if (isHomePage) {
      console.log('click on card')
      navigate(`/courses/${order}`)
    }
  }

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log('click on button')
    navigate(`/courses/${order}`)
  }

  const imageName = `card${nameEN}` as keyof typeof svg

  return (
    <>
      <S.CourseCard
        onClick={handleCardClick}
        cardWidth={width}
        cardHeight={height}
      >
        <S.CourseName>{nameRU}</S.CourseName>
        <UiImage name={'cardYoga'} width={width} height={height} />
        {!isHomePage ? (
          <UiButton
            title="Перейти"
            onClick={handleButtonClick}
            buttonTheme={ButtonTheme.Salad}
            fontSize="s"
            size={ButtonSize.S}
          />
        ) : null}
      </S.CourseCard>
    </>
  )
}

export default UiCourseCard
