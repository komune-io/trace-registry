import { CustomButton, useToggleState } from 'components'
import { useMemo } from 'react'
import { autoFormFormatter, BackAutoFormData } from '@komune-io/g2'
import { AddProtocolModal } from './AddProtocolModal'
import { useCatalogueGetBlueprintsQuery } from '../../../Catalogue'
import { useTranslation } from 'react-i18next'

interface DraftAddProtocolButtonProps {
  type?: string
}

export const DraftAddProtocolButton = (props: DraftAddProtocolButtonProps) => {
  const { type } = props
  const { i18n } = useTranslation()

  const button = useCatalogueGetBlueprintsQuery({
    query: {
      language: i18n.language
    },
    options: {
      enabled: !!type
    }
  }).data?.item?.types[type!].structure?.protocolButton

  const [open, _, toggle] = useToggleState()

  const formData = useMemo(() => {
    if (!button) return undefined
    return autoFormFormatter(button.form as BackAutoFormData)
  }, [button])

  if (!button) return null
  return (
    <>
      <CustomButton color="info" onClick={toggle}>
        {button?.label}
      </CustomButton>
      <AddProtocolModal
        open={open}
        onClose={toggle}
        formData={formData}
      />
    </>
  )
}
