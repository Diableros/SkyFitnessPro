import { useNavigate } from 'react-router-dom'

import { ButtonSize, ButtonTheme } from '../UiButton/enums'
import UiButton from '../UiButton/UiButton'
import UiImage from '../UiImage'
import svg from '../UiImage/constants'

import { CardSize } from './enums'

import * as S from './UiCourseCard.style'

import { Course } from '@/pages/Home/mockData'

type PropsType = {
  course: Course
  isHomePage?: boolean
  size?: CardSize
}

const UiCourseCard = ({
  course: { nameRU, nameEN, order },
  isHomePage,
  size = CardSize.Normal,
}: PropsType) => {
  const navigate = useNavigate()

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
      <S.CourseCard isHomePage={isHomePage} onClick={handleCardClick} size={size}>
        <S.CourseName>{nameRU}</S.CourseName>
        <UiImage name={'cardYoga'} />
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
