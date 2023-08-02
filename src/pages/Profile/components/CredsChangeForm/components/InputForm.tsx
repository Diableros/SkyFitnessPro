import * as S from './InputForm.style'

type PropsType = {
  name: string
  placeholder: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
}

const CredsInput = ({ name, placeholder, onChange, type }: PropsType) => {
  return (
    <S.FormInput
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      required
    />
  )
}

export default CredsInput
