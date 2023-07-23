import { useNavigate } from 'react-router-dom'

import { ButtonSize, ButtonTheme } from '../UiButton/enums'
import UiButton from '../UiButton/UiButton'
import UiImage from '../UiImage'
import svg from '../UiImage/constants'

import { CardView, PageType } from './enums'
import { LinkPath } from '@/router/enums'

import * as S from './UiCourseCard.style'

import { Course } from '@/pages/Home/mockData'

type PropsType = {
  course: Course
  size?: CardView
  pageType?: PageType
}

const UiCourseCard = ({
  course: { nameRU, nameEN, order },
  size = CardView.Card,
  pageType,
}: PropsType) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    if (pageType === PageType.Home) {
      navigate(`${LinkPath.Course}/${order}`)
    }
  }

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log('click on button')
    navigate(`${LinkPath.Course}/${order}`)
  }

  const svgName = `${
    pageType === PageType.Course ? 'banner' : 'card'
  }${nameEN}` as keyof typeof svg

  return (
    <>
      <S.CourseCard $pageType={pageType} onClick={handleCardClick} size={size}>
        <S.CardTitle $pageType={pageType} size={size}>
          {nameRU}
        </S.CardTitle>
        {<UiImage name={svgName} />}
        {pageType === PageType.Profile ? (
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
