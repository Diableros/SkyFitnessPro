import * as S from './PasswordFormInput.style'

type PropsType = {
  name: string
  placeholder: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
}

const PasswordFormInput = ({ name, placeholder, onChange, type}: PropsType) => {
  return (
    <S.FormInput name={name} placeholder={placeholder} onChange={onChange} type={type} required />
  )
}

export default PasswordFormInput