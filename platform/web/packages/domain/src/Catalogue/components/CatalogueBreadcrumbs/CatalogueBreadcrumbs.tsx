import { Breadcrumbs, Crumb, useRoutesDefinition } from 'components'
import { useCataloguesRouteParams } from '../useCataloguesRouteParams'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const CatalogueBreadcrumbs = () => {
    const { ids } = useCataloguesRouteParams()
    const {cataloguesAll, catalogues} = useRoutesDefinition()
    const {t} = useTranslation()

    const crumbs = useMemo(() => [
        {
            label: t("standards"),
            url: catalogues()
        },
        ...ids.map((id, index): Crumb => ({
            label: id,
            url: cataloguesAll(undefined, ...ids.slice(0, index + 1))
        }))
    ], [ids, cataloguesAll, catalogues, t])

    return (
        <Breadcrumbs
            crumbs={crumbs}
        />
    )
}
