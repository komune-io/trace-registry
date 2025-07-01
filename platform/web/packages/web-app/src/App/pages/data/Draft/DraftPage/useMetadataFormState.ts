import {AutoFormData, CommandWithFile, g2Config, useAutoFormState} from '@komune-io/g2'
import {Catalogue} from 'domain-components'
import {useCallback, useMemo} from 'react'
import {useCatalogueFormAdditionalContext} from "domain-components/src/Catalogue/components/UseCatalogueFormAdditionalContext";

interface UseMetadataFormStateParams {
  formData?: AutoFormData
  catalogue?: Catalogue
  isLoading?: boolean
  readOnly?: boolean
  onSubmit?: (command: CommandWithFile<any>, values: any) => void
}

export const useMetadataFormState = (params: UseMetadataFormStateParams) => {
  const { catalogue, isLoading, readOnly, onSubmit, formData } = params

  const additionalContext = useCatalogueFormAdditionalContext({
    context: "edition",
    catalogue: catalogue
  })

  const formInitialValues = useMemo(() => {
    return catalogue ? ({
      ...catalogue,
      ...additionalContext,
      themes: catalogue.themes[0] ? [catalogue.themes[0]?.id] : undefined,
      license: catalogue.license?.id,
      ownerOrganizationId: catalogue.ownerOrganization?.id,
      parentId: catalogue.parent?.id,
    }) : undefined
  }, [catalogue])

  const downloadDocument = useCallback(async (_, fieldValue: any) => {
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
