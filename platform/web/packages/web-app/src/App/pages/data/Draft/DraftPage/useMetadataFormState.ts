import {AutoFormData, CommandWithFile, useAutoFormState} from '@komune-io/g2'
import {Catalogue, downloadFormImage} from 'domain-components'
import {useMemo} from 'react'
import {useCatalogueFormContext} from "domain-components";

interface UseMetadataFormStateParams {
  formData?: AutoFormData
  catalogue?: Catalogue
  isLoading?: boolean
  readOnly?: boolean
  onSubmit?: (command: CommandWithFile<any>, values: any) => void
}

export const useMetadataFormState = (params: UseMetadataFormStateParams) => {
  const { catalogue, isLoading, readOnly, onSubmit, formData } = params

  const additionalContext = useCatalogueFormContext({
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


  return useAutoFormState({
    formData,
    onSubmit,
    downloadDocument: downloadFormImage,
    initialValues: formInitialValues,
    isLoading,
    readOnly,
    submitOnChange: true,
    submitDebounceTime: 500
  })
}
