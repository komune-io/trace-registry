import { autoFormFormatter, BackAutoFormData } from '@komune-io/g2'
import { Catalogue, useCatalogueGetStructureQuery } from 'domain-components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export interface DraftFormDataParams {
    catalogue?: Catalogue
}

export const useDraftFormData = (params: DraftFormDataParams) => {
    const { catalogue } = params
    const { i18n } = useTranslation()
  const structure = useCatalogueGetStructureQuery({
      query: {
        type: catalogue?.type!,
        language: i18n.language,
      },
      options: {
        enabled: !!catalogue?.type,
      }
    })
  
    return useMemo(() => structure.data?.item?.creationForm ? autoFormFormatter(structure.data?.item?.creationForm as BackAutoFormData) : undefined, [structure.data?.item])
}
