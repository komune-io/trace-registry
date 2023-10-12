import {useCatalogsRouteParams, useCatalogueGetQuery} from 'domain-components'
import { CatalogViewPage } from '../CatalogViewPage/CatalogViewPage'
import { CatalogListPage } from '../CatalogListPage/CatalogListPage'

export const CatalogsRouter = () => {
    const { ids } = useCatalogsRouteParams()
    const catalogueId = ids[ids.length - 1] ??  "standards"
    console.log("catalogueId", catalogueId)
    const catalogueGet = useCatalogueGetQuery({
        query: {
            identifier: catalogueId!
        }
    })

    return catalogueGet.data?.item?.display === "item" ? (
        <CatalogViewPage isLoading={catalogueGet.isInitialLoading} catalogue={catalogueGet.data.item}/>
    ) : (
        <CatalogListPage isLoading={catalogueGet.isInitialLoading} catalogue={catalogueGet.data?.item} />
    )
}
