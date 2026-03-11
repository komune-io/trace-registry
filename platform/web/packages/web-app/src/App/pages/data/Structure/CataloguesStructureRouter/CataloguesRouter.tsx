import {useCataloguesRouteParams, useCatalogueGetQuery} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { NoMatchPage } from '@komune-io/g2'
import { useSearchParams } from 'react-router-dom'
import {CataloguesEntryPoint} from "../CataloguesEntryPoint/CataloguesEntryPoint";
import {MosaicCatalogueEntryPoint} from "../CatalogueMosaicEntryPoint/MosaicCatalogueEntryPoint";
import {CatalogueHomeEntryPoint} from "../CatalogueHomeEntryPoint/CatalogueHomeEntryPoint";
import {CatalogueTableEntryPoint} from "../CatalogueTableEntryPoint/CatalogueTableEntryPoint";
import {CatalogueViewEntryPoint} from "../CatalogueViewEntryPoint/CatalogueViewEntryPoint";

interface CataloguesStructureRouterProps {
}

export const CataloguesStructureRouter = (_: CataloguesStructureRouterProps) => {
  const { ids } = useCataloguesRouteParams()
  const {i18n} = useTranslation()
  const [searchParams] = useSearchParams()
  const catalogueId = ids[ids.length - 1] ?? "home"

  const catalogueGet = useCatalogueGetQuery({
    query: {
      id: catalogueId,
      language: searchParams.get("language") ?? i18n.language
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
  } else if(catalogueGet.data?.item?.structure?.type === "table") {
    return <CatalogueTableEntryPoint catalogue={catalogueGet.data.item} />
  } else {
    return <CatalogueViewEntryPoint catalogue={catalogueGet.data.item} />
  }

}
