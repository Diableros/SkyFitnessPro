import { Path,UseFormRegister } from 'react-hook-form'

import * as S from './ProgressInput.style'

export type ProgressInputType = {
  value: string 
}

type ProgressInputPropsType = {
  placeholder: string
  register: UseFormRegister<ProgressInputType>
  name: Path<ProgressInputType>
}

const ProgressInput = ({ placeholder, register, name }: ProgressInputPropsType) => {
  return <S.ProgressInput placeholder={placeholder} {...register(name)} />
}

export default ProgressInput
