import {useCataloguesRouteParams, useCatalogueGetByIdentifierQuery} from 'domain-components'
import { CatalogueViewPage } from '../CatalogueViewPage/CatalogueViewPage'
import { CatalogueListPage } from '../CatalogueListPage/CatalogueListPage'
import { useTranslation } from 'react-i18next'
import { NoMatchPage } from '@komune-io/g2'
import { useSearchParams } from 'react-router-dom'

interface CataloguesRouterProps {
    root: string
}

export const CataloguesRouter = (props: CataloguesRouterProps) => {
    const { ids } = useCataloguesRouteParams()
    const {i18n} = useTranslation()
    const {root} = props
    const [searchParams] = useSearchParams()
    const catalogueIdentifier = ids[ids.length - 1] ??  root
    const catalogueGet = useCatalogueGetByIdentifierQuery({
        query: {
            identifier: catalogueIdentifier!,
            language: searchParams.get("language") ?? i18n.language
        }
    })
    if (!catalogueGet.isLoading && !catalogueGet.data?.item) return <NoMatchPage />
    return catalogueGet.data?.item?.structure?.type === "item" ? (
        <CatalogueViewPage isLoading={catalogueGet.isInitialLoading} catalogue={catalogueGet.data.item} />
    ) : (
        <CatalogueListPage isLoading={catalogueGet.isInitialLoading} catalogue={catalogueGet.data?.item} />
    )
}
