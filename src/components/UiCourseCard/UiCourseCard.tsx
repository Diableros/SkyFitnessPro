// import UiImage from '../UiImage'

import * as S from './UiCourseCard.style'

//fetch func? + navigation

type Props = {
  title: string
  button: React.ButtonHTMLAttributes<HTMLButtonElement>
  onClick: () => void
}

const UiCourseCard = ({ title, button, onClick }: Props) => {
  return (
    <>
      <S.CourseCard>
        <S.CourseName onClick={onClick}>{title}</S.CourseName>
        {/* {data.map((card) => {
          return (
            <UiImage name={card.name} width={card.width} height={card.height} />
          )
        })} */}

        {/* {button && data.map((card) => {
          return (
            <UiImage name={card.name} width={card.width} height={card.height} />
          )
        })} */}
      </S.CourseCard>
    </>
  )
}

export default UiCourseCard
