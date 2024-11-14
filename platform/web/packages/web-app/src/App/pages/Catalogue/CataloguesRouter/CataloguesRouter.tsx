import {useCataloguesRouteParams, useCatalogueGetQuery} from 'domain-components'
import { CatalogueViewPage } from '../CatalogueViewPage/CatalogueViewPage'
import { CatalogueListPage } from '../CatalogueListPage/CatalogueListPage'


interface CataloguesRouterProps {
    root: string
}

export const CataloguesRouter = (props: CataloguesRouterProps) => {
    const { ids } = useCataloguesRouteParams()
    const {root} = props
    const catalogueId = ids[ids.length - 1] ??  root
    const catalogueGet = useCatalogueGetQuery({
        query: {
            identifier: catalogueId!
        }
    })
    return catalogueGet.data?.item?.structure?.type === "item" ? (
        <CatalogueViewPage isLoading={catalogueGet.isInitialLoading} catalogue={catalogueGet.data.item} />
    ) : (
        <CatalogueListPage isLoading={catalogueGet.isInitialLoading} catalogue={catalogueGet.data?.item} />
    )
}
