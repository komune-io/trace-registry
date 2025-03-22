import {useCataloguesRouteParams, useCatalogueGetByIdentifierQuery} from 'domain-components'
import { CatalogueViewPage } from '../CatalogueViewPage/CatalogueViewPage'
import { useTranslation } from 'react-i18next'
import { NoMatchPage } from '@komune-io/g2'
import { useSearchParams } from 'react-router-dom'
import {CataloguesEntryPoint} from "../CataloguesEntryPoint/CataloguesEntryPoint";
import { MosaicCatalogueEntryPoint } from '../MosaicCatalogueEntryPoint/MosaicCatalogueEntryPoint'
import {CatalogueHomeEntryPoint} from "../CatalogueHomeEntryPoint/CatalogueHomeEntryPoint";

interface CataloguesRouterProps {
}

export const CataloguesRouter = (_: CataloguesRouterProps) => {
  const { ids } = useCataloguesRouteParams()
  const {i18n} = useTranslation()
  const [searchParams] = useSearchParams()
  const catalogueIdentifier = ids[ids.length - 1] ?? "home"
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
  if(catalogueGet.data?.item?.structure?.type === "grid") {
    return <CataloguesEntryPoint catalogue={catalogueGet.data.item} />
  } else if(catalogueGet.data?.item?.structure?.type === "mosaic") {
    return <MosaicCatalogueEntryPoint catalogue={catalogueGet.data.item} />
  } else if(catalogueGet.data?.item?.structure?.type === "home") {
    return <CatalogueHomeEntryPoint catalogue={catalogueGet.data.item} />
  } else {
    return <CatalogueViewPage catalogue={catalogueGet.data.item} />
  }

}
