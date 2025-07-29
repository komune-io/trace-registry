import { CustomButton, useToggleState } from 'components'
import form from './autoForm.json'
import { useMemo } from 'react'
import { autoFormFormatter, BackAutoFormData } from '@komune-io/g2'
import { AddReferentialModal } from './AddReferentialModal'

export const DraftAddReferentialButton = () => {

  const [open, _, toggle] = useToggleState()

  const formData = useMemo(() => autoFormFormatter(form as BackAutoFormData), [form])
  return (
    <>
      <CustomButton color="info" onClick={toggle}>
        {formData.sections[0].label}
      </CustomButton>
      <AddReferentialModal
        open={open}
        onClose={toggle}
        formData={formData}
      />
    </>
  )
}
