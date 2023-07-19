import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiButton from '@/components/UiButton/UiButton'
import UiCourseCard from '@/components/UiCourseCard'
import { CardSize } from '@/components/UiCourseCard/enums'
import UiImage from '@/components/UiImage'
import { mockData } from '../Home/mockData'

import { FontSizeType } from '@/theme/themeTypes'

import * as S from './Course.style'

const courseExample = mockData[1]

type PropsType = {
  fontSize?: keyof FontSizeType['fontSize']
}

const Course = ({ fontSize = 'l' }: PropsType) => {

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log('click on button')
  }

  return (
    <S.PageWrapper>
      <S.BlocksWrapper>
        <UiCourseCard
          key={courseExample._id}
          size={CardSize.Large}
          course={courseExample}
          isHomePage
          isCoursePage
        />
        <S.PrescriptionHeader fontSize={fontSize}>
          Подойдет для вас, если:
        </S.PrescriptionHeader>
        <S.PrescriptionBlocks>
          {courseExample.fitting.map((item, index) => {
            return (
              <S.Prescription key={index}>
                <S.PrescriptionBlocksItemIndex>
                  {`${index + 1}`}
                </S.PrescriptionBlocksItemIndex>
                <S.PrescriptionBlocksItem key={index}>
                  {item}
                </S.PrescriptionBlocksItem>
              </S.Prescription>
            )
          })}
        </S.PrescriptionBlocks>
        <S.DirectionHeader fontSize={fontSize}>Напрвления:</S.DirectionHeader>
        <S.DirectionBlocks>
          {courseExample.directions.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </S.DirectionBlocks>
        <S.Effect>{courseExample.description}</S.Effect>
        <S.Request>
          <UiImage name='handPhone' />
          <S.RequestText>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </S.RequestText>
          <UiButton 
            onClick={handleButtonClick}
            title="Записаться на тренировку"
            buttonTheme={ButtonTheme.PurpleBright}
            fontSize="s"
            size={ButtonSize.L} 
          />
        </S.Request>
      </S.BlocksWrapper>
    </S.PageWrapper>
  )
}

export default Course
