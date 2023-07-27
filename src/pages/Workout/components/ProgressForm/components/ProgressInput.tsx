import * as S from './ProgressInput.style'

type ProgressInputType = {
  placeholder: string
  value?: string | number | readonly string[] | undefined
  type: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  max: string
}

const ProgressInput = ({ name, onChange, type, placeholder, value, max }: ProgressInputType) => {
  return <S.ProgressInput name={name} max={max} onChange={onChange} type={type} value={value} placeholder={placeholder} />
}

export default ProgressInput
