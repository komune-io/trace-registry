import {useCataloguesRouteParams, useCatalogueGetByIdentifierQuery} from 'domain-components'
import { CatalogueViewPage } from '../CatalogueViewPage/CatalogueViewPage'
import { useTranslation } from 'react-i18next'
import { NoMatchPage } from '@komune-io/g2'
import { useSearchParams } from 'react-router-dom'
import {CataloguesEntryPoint} from "../CataloguesEntryPoint/CataloguesEntryPoint";

interface CataloguesRouterProps {
}

export const CataloguesRouter = (_: CataloguesRouterProps) => {
  const { ids } = useCataloguesRouteParams()
  const {i18n} = useTranslation()
  const [searchParams] = useSearchParams()
  const catalogueIdentifier = ids[ids.length - 1]
  const catalogueGet = useCatalogueGetByIdentifierQuery({
    query: {
      identifier: catalogueIdentifier!,
      language: searchParams.get("language") ?? i18n.language
    },
    options:  {
      enabled: !!catalogueIdentifier
    }
  })
  if (!catalogueGet.isLoading && !catalogueGet.data?.item) return <NoMatchPage />
  if (catalogueGet.isInitialLoading || catalogueGet.isLoading || !catalogueGet?.data?.item) return <></>
  return catalogueGet.data?.item?.structure?.type === "item" ? (
    <CatalogueViewPage catalogue={catalogueGet.data.item} />
  ) : (
    <CataloguesEntryPoint catalogue={catalogueGet.data.item} />
  )
}
