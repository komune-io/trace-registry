import { g2Config, useFormComposable } from '@komune-io/g2'
import { Catalogue } from 'domain-components'
import { useMemo } from 'react'

interface UseMetadataFormStateParams {
    catalogue?: Catalogue
    isLoading?: boolean
    readOnly?: boolean
    onSubmit?: (values: any) => void
}

export const useMetadataFormState = (params: UseMetadataFormStateParams) => {
    const {catalogue, isLoading, readOnly, onSubmit} = params
   const formInitialValues = useMemo(() => catalogue ? ({
      ...catalogue,
      themes: catalogue.themes[0]?.id ?? catalogue.themes,
      license: catalogue.license?.id,
      ownerOrganizationId: catalogue.ownerOrganization?.id,
      parentId: catalogue.parent?.id,
      illustrationUploaded: catalogue?.img ? () => g2Config().platform.url + catalogue.img : undefined,
    }) : undefined, [catalogue])
    return useFormComposable({
      onSubmit,
      isLoading,
      readOnly,
      formikConfig: {
        initialValues: formInitialValues,
      },
      submitOnChange: true,
      submitDebounceTime: 500
    })
}
