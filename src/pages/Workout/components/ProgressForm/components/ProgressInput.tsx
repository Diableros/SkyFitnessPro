import * as S from './ProgressInput.style'

type ProgressInputType = {
  placeholder: string
  value: string
  type: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
}

const ProgressInput = ({
  name,
  onChange,
  type,
  placeholder,
  value,
}: ProgressInputType) => {
  return (
    <S.ProgressInput
      name={name}
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  )
}

export default ProgressInput
