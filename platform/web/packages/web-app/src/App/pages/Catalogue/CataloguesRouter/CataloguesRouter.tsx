import {useCataloguesRouteParams, useCatalogueGetQuery} from 'domain-components'
import { CatalogueViewPage } from '../CatalogueViewPage/CatalogueViewPage'
import { CatalogueListPage } from '../CatalogueListPage/CatalogueListPage'

export const CataloguesRouter = () => {
    const { ids } = useCataloguesRouteParams()
    const catalogueId = ids[ids.length - 1] ??  "standards"
    const catalogueGet = useCatalogueGetQuery({
        query: {
            identifier: catalogueId!
        }
    })
    return catalogueGet.data?.item?.display === "item" ? (
        <CatalogueViewPage isLoading={catalogueGet.isInitialLoading} catalogue={catalogueGet.data.item}/>
    ) : (
        <CatalogueListPage isLoading={catalogueGet.isInitialLoading} catalogue={catalogueGet.data?.item} />
    )
}
