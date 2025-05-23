import { AutoFormData, CommandWithFile, g2Config, useAutoFormState } from '@komune-io/g2'
import { Catalogue } from 'domain-components'
import { useCallback, useMemo } from 'react'

interface UseMetadataFormStateParams {
  formData?: AutoFormData
  catalogue?: Catalogue
  isLoading?: boolean
  readOnly?: boolean
  onSubmit?: (command: CommandWithFile<any>, values: any) => void
}

export const useMetadataFormState = (params: UseMetadataFormStateParams) => {
  const { catalogue, isLoading, readOnly, onSubmit, formData } = params
  const formInitialValues = useMemo(() => {
    return catalogue ? ({
      ...catalogue,
      themes: catalogue.themes[0] ? [catalogue.themes[0]?.id] : undefined,
      license: catalogue.license?.id,
      ownerOrganizationId: catalogue.ownerOrganization?.id,
      parentId: catalogue.parent?.id,
      context: "edition"
    }) : undefined
  }, [catalogue])

  const downloadDocument = useCallback(async (_, fieldValue: any) => {
    console.log('downloadDocument', fieldValue)
    return g2Config().platform.url + fieldValue
  }, [])

  return useAutoFormState({
    formData,
    onSubmit,
    downloadDocument,
    initialValues: formInitialValues,
    isLoading,
    readOnly,
    submitOnChange: true,
    submitDebounceTime: 500
  })
}
