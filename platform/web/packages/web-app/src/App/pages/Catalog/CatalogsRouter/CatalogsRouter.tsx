import { useCatalogsRouteParams } from 'domain-components'
import { CatalogViewPage } from '../CatalogViewPage/CatalogViewPage'
import { CatalogListPage } from '../CatalogListPage/CatalogListPage'

export const CatalogsRouter = () => {
    const { display } = useCatalogsRouteParams()
    return display === "item" ? (
        <CatalogViewPage />
    ) : (
        <CatalogListPage display='grid' />
    )
}
