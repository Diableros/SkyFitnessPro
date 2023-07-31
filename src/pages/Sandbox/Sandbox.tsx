import CredsChangeForm from '../Profile/components/CredsChangeForm'
import { InputType } from '../Profile/components/CredsChangeForm/enums'
import UiModal from '@/components/UiModal'

const Sandbox = () => {
  return (
    <>
      <div>Text from Sandbox component</div>
      <UiModal>
        <CredsChangeForm formType={InputType.Password} />
      </UiModal>
    </>
  )
}

export default Sandbox
