import { g2Config, useFormComposable } from '@komune-io/g2'
import { Catalogue } from 'domain-components'
import { useMemo } from 'react'

interface UseMetadataFormStateParams {
    catalogue?: Catalogue
    isLoading?: boolean
    readOnly?: boolean
}

export const useMetadataFormState = (params: UseMetadataFormStateParams) => {
    const {catalogue, isLoading, readOnly} = params
   const formInitialValues = useMemo(() => catalogue ? ({
      ...catalogue,
      themes: (catalogue.themes ?? [])[0]?.id,
      license: catalogue.license?.id,
      illustrationUploaded: () => g2Config().platform.url + `/data/catalogues/${catalogue.id}/img`
    }) : undefined, [catalogue])
  
    return useFormComposable({
      isLoading,
      readOnly,
      formikConfig: {
        initialValues: formInitialValues
      }
    })
}
