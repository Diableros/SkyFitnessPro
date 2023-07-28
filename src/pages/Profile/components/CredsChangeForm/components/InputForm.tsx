import * as S from './InputForm.style'

type PropsType = {
  name: string
  placeholder: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
}

const CredsInputForm = ({
  name,
  placeholder,
  onChange,
  type,
}: PropsType) => {
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

export default CredsInputForm
