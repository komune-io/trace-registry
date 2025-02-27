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
      themes: catalogue.type !== "100m-project" ? (catalogue.themes ?? [])[0]?.id : catalogue.themes?.map((theme) => theme.id),
      license: catalogue.license?.id,
      ownerOrganizationId: catalogue.ownerOrganization?.id,
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
