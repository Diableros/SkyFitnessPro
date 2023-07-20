import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiButton from '@/components/UiButton/UiButton'
import UiCourseCard from '@/components/UiCourseCard'
import { CardView, PageType } from '@/components/UiCourseCard/enums'
import UiImage from '@/components/UiImage'
import { mockData } from '../Home/mockData'

import * as S from './Course.style'

const courseExample = mockData[1]

const Course = () => {
  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log('click on button')
  }

  return (
    <S.PageWrapper>
      <UiCourseCard
        key={courseExample._id}
        size={CardView.Banner}
        course={courseExample}
        $pageType={PageType.Course}
      />
      <S.PrescriptionHeader>Подойдет для вас, если:</S.PrescriptionHeader>
      <S.PrescriptionBlocks>
        {courseExample.fitting.map((item, index) => {
          return (
            <S.Prescription key={index}>
              <S.PrescriptionBlocksItemIndex>
                {index + 1}
              </S.PrescriptionBlocksItemIndex>
              <S.PrescriptionBlocksItem key={index}>
                {item}
              </S.PrescriptionBlocksItem>
            </S.Prescription>
          )
        })}
      </S.PrescriptionBlocks>
      <S.DirectionHeader>Направления:</S.DirectionHeader>
      <S.DirectionBlocks>
        {courseExample.directions.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </S.DirectionBlocks>
      <S.EffectDescription>{courseExample.description}</S.EffectDescription>
      <S.RequestBanner>
        <UiImage width="1160px" height="300px" name="handPhone" />
        <S.RequestBannerText>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </S.RequestBannerText>
        <UiButton
          onClick={handleButtonClick}
          title="Записаться на тренировку"
          buttonTheme={ButtonTheme.PurpleBright}
          fontSize="s"
          size={ButtonSize.L}
        />
      </S.RequestBanner>
    </S.PageWrapper>
  )
}

export default Course
