import * as S from './ProgressInput.style'

type ProgressInputType = {
  placeholder: string
  value: string
  type: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
}

const ProgressInput = ({ name, onChange, type, placeholder, value, ...rest }: ProgressInputType) => {
  return <S.ProgressInput name={name} onChange={onChange} type={type} value={value} placeholder={placeholder} {...rest} />
}

export default ProgressInput
