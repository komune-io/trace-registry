import { AutoFormData, CommandWithFile, g2Config, useAutoFormState } from '@komune-io/g2'
import { Catalogue } from 'domain-components'
import { useMemo } from 'react'

interface UseMetadataFormStateParams {
  formData?: AutoFormData
  catalogue?: Catalogue
  isLoading?: boolean
  readOnly?: boolean
  onSubmit?: (command: CommandWithFile<any>, values: any) => void
}

export const useMetadataFormState = (params: UseMetadataFormStateParams) => {
  const { catalogue, isLoading, readOnly, onSubmit, formData } = params
  const formInitialValues = useMemo(() => catalogue ? ({
    ...catalogue,
    themes: catalogue.themes[0] ? [catalogue.themes[0]?.id] : undefined,
    license: catalogue.license?.id,
    ownerOrganizationId: catalogue.ownerOrganization?.id,
    parentId: catalogue.parent?.id,
    context: "edition"
  }) : undefined, [catalogue])

  return useAutoFormState({
    formData,
    onSubmit,
    downloadDocument: async (_, fieldValue: any) => g2Config().platform.url + fieldValue,
    formikConfig: {
      initialValues: formInitialValues,
    },
    isLoading,
    readOnly,
    submitOnChange: true,
    submitDebounceTime: 500
  })
}
