import useCourses from '@/hooks/useCourses'

import * as S from './Home.style'

const Home = () => {
  const { data } = useCourses()

  return (
    <S.CardsWrapper>
      {data && !(data instanceof Error)
        ? data.map(({ _id, description }) => <div key={_id}>{description}</div>)
        : // TODO вместо null добавить компонент UiLoader
          null}
    </S.CardsWrapper>
  )
}

export default Home
