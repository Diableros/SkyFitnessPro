import * as React from 'react'

import ExampleModalContent from './components/ExampleModalContent'
import UiModal from '@/components/UiModal'

const Sandbox = () => {
  return (
    <>
      <div>Text from Sandbox component</div>
      <UiModal>
        <ExampleModalContent />
      </UiModal>
    </>
  )
}

export default Sandbox
