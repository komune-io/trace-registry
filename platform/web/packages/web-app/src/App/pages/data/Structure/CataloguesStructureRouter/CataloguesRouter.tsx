import { useCatalogueGetQuery, useCataloguesRouteParams} from 'domain-components'
import {useTranslation} from 'react-i18next'
import {NoMatchPage} from '@komune-io/g2'
import {useSearchParams} from 'react-router-dom'
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

  switch (catalogueGet.data?.item?.structure?.type) {
    case "GRID":
      return <CataloguesEntryPoint catalogue={catalogueGet.data.item} />
    case "MOSAIC":
      return <MosaicCatalogueEntryPoint catalogue={catalogueGet.data.item} />
    case "HOME":
      return <CatalogueHomeEntryPoint catalogue={catalogueGet.data.item} />
    case "TABLE":
      return <CatalogueTableEntryPoint catalogue={catalogueGet.data.item} />
    default:
      return <CatalogueViewEntryPoint catalogue={catalogueGet.data.item} />
  }

}
