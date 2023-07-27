import { useReducer, useState } from 'react'

import ProgressInput from './components/ProgressInput'
import UiButton from '../UiButton'
import { ButtonSize, ButtonTheme } from '../UiButton/enums'
import UiImage from '../UiImage'

import * as S from './UiProgress.style'

import { mockData } from '@/pages/Home/mockData'

const UiProgressForm = () => {
  const [filled, setIsFilled] = useState(false)

  const example = mockData[2].exercises[0].workoutTWO

  // const [inputValues, setInputValues] = useState({})

  // const handleSendSuccess = () => {
  //   setIsFilled(true)
  // }

  // const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   setInputValues((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }))
  // }

  //TODO закончить логику с картинкой; правильно типизировать value в инпуте/в случае с useReduser - стейт и экшн

  const initialValue = {
    value: '',
  }

  const arr: string[] = []

  return (
    <S.ProgressWrapper>
      {!filled ? (
        <>
          <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
          {example.map((item, index) => {
            const reducer = (
              state: any,
              action: { type: any; payload: any }
            ) => {
              switch (action.type) {
                case `${index}`:
                  return { ...state, value: action.payload }
                default:
                  throw new Error(`Unknown action type: ${action.type}`)
              }
            }

            const [state, dispatch] = useReducer(reducer, initialValue)
            arr.push(state)

            return (
              <>
                <S.ProgressLabelText key={index - 1}>
                  Сколько повторений вы сделали из упражнения: {item}?
                </S.ProgressLabelText>
                <ProgressInput
                  name={`${index}`}
                  type="number"
                  key={index + 1}
                  placeholder={'Введите значение'}
                  value={state.index}
                  onChange={(event) =>
                    dispatch({ type: `${index}`, payload: event.target.value })
                  }
                  max="3"
                />
              </>
            )
          })}
          <UiButton
            buttonType="submit"
            size={ButtonSize.L}
            title="Отправить"
            buttonTheme={ButtonTheme.PurpleBright}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation
              console.log(arr)

            }}
          />
        </>
      ) : (
        <>
          <S.ImageHeader>Ваш прогресс засчитан!</S.ImageHeader>
          <UiImage width="444px" height="360px" name="okHand" />
        </>
      )}
    </S.ProgressWrapper>
  )
}
export default UiProgressForm
