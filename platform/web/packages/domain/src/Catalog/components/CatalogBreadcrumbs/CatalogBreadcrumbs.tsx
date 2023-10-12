import { Breadcrumbs, Crumb, useRoutesDefinition } from 'components'
import { useCatalogsRouteParams } from '../useCatalogsRouteParams'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const CatalogBreadcrumbs = () => {
    const { ids } = useCatalogsRouteParams()
    const {catalogsAll, catalogs} = useRoutesDefinition()
    const {t} = useTranslation()

    const crumbs = useMemo(() => [
        {
            label: t("standards"),
            url: catalogs()
        },
        ...ids.map((id, index): Crumb => ({
            label: id,
            url: catalogsAll(undefined, ...ids.slice(0, index + 1))
        }))
    ], [ids, catalogsAll, catalogs, t])

    return (
        <Breadcrumbs
            crumbs={crumbs}
        />
    )
}
