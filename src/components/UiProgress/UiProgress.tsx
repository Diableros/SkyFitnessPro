import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import ProgressInput, { ProgressInputType } from './components/ProgressInput'
import UiButton from '../UiButton'
import { ButtonSize, ButtonTheme } from '../UiButton/enums'
import UiImage from '../UiImage'

import { InputPlaceholderText } from './enums'

import * as S from './UiProgress.style'

import { mockData } from '@/pages/Home/mockData'

function UiProgress() {
  const [filled, setIsFilled] = useState(false)
  const { register, handleSubmit } = useForm<ProgressInputType>()
  const onSubmit: SubmitHandler<ProgressInputType> = (data) => console.log(data)

  const example = mockData[2].exercises[0].workoutONE

  return (
      <S.ProgressWrapper onSubmit={handleSubmit(onSubmit)}>
        {!filled ? 
          <>
            <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
            {example.map((item, index) => {
              return (
                <>
                  <S.ProgressLabelText key={index+1}>
                    Сколько повторений вы сделали из упражнения: {item}?
                  </S.ProgressLabelText>
                  <ProgressInput
                    key={index}
                    placeholder={InputPlaceholderText.PlaceholderText}
                    register={register}
                    name={`ProgressResult${index}`}
                  />
                </>
              )
            })}
            <UiButton
              buttonType="submit"
              size={ButtonSize.L}
              title="Отправить"
              buttonTheme={ButtonTheme.PurpleBright}
              onClick={(e) => {
                e.stopPropagation()
                setIsFilled(true)}}
            />
          </>
          :
          <UiImage name='okHand' />
        }
      </S.ProgressWrapper> 
  )
}
export default UiProgress
