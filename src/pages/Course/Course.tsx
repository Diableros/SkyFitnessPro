import * as React from 'react'
import { useParams } from 'react-router-dom'

import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums'
import UiButton from '@/components/UiButton/UiButton'
import UiCourseCard from '@/components/UiCourseCard'
import { CardView, PageType } from '@/components/UiCourseCard/enums'
import UiImage from '@/components/UiImage'
import UiLoader from '@/components/UiLoader'
import UiModal from '@/components/UiModal'

import { useCourses } from '@/api/hooks'
import { Course } from '@/api/types'

import * as S from './Course.style'

const CoursePage = () => {
  const [currentCourse, setCurrentCourse] = React.useState<Course | null>(null)
  const [courseModal, setCourseModal] = React.useState<boolean | null>(null)
  const { courseOrder } = useParams()
  const { data, isLoading } = useCourses()

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log('click on sign up for a workout button')
    setCourseModal(true)
  }

  const resultContent = (
    <UiModal modalClose={() => setCourseModal(null)}>
      <S.CurseModalWrapper>
        <S.ImageHeader>Вы успешно записались!</S.ImageHeader>
        <UiImage width="444px" height="360px" name="okHand" />
      </S.CurseModalWrapper>
    </UiModal>
  )

  React.useEffect(() => {
    if (data && !(data instanceof Error)) {
      setCurrentCourse(
        data.filter((course) => course.order === Number(courseOrder))[0]
      )
    }
  }, [isLoading])

  const pageContent = currentCourse ? (
    <>
      <S.PageWrapper>
        <UiCourseCard
          key={currentCourse._id}
          size={CardView.Banner}
          course={currentCourse}
          pageType={PageType.Course}
        />
        <S.PrescriptionHeader>Подойдет для вас, если:</S.PrescriptionHeader>
        <S.PrescriptionBlocks>
          {currentCourse.fitting.map((item, index) => {
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
          {currentCourse.directions.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </S.DirectionBlocks>

        <S.EffectDescription>{currentCourse.description}</S.EffectDescription>
        <S.RequestBanner>
          <UiImage width="1160px" height="300px" name="handPhone" />
          <S.RequestBannerText>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
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
      {courseModal ? resultContent : null}
    </>
  ) : (
    <div>Курс не найден</div>
  )

  return !isLoading && data ? pageContent : <UiLoader color="purpleDark" />
}

export default CoursePage
