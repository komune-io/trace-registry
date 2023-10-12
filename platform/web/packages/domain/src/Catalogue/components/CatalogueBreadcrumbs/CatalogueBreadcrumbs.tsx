import { Breadcrumbs, Crumb, useRoutesDefinition } from 'components'
import { useCataloguesRouteParams } from '../useCataloguesRouteParams'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useCatalogueRefListQuery } from '../../api'

export const CatalogueBreadcrumbs = () => {
    const { ids } = useCataloguesRouteParams()
    const {cataloguesAll, catalogues} = useRoutesDefinition()
    const {t} = useTranslation()
    const refsQuery = useCatalogueRefListQuery({
        query: {

        }
    })

    const refs = refsQuery.data?.items

    const crumbs = useMemo(() => [
        {
            label: t("standards"),
            url: catalogues()
        },
        ...ids.map((id, index): Crumb => ({
            label: refs?.find((ref) => ref.id === id)?.title ?? id,
            url: cataloguesAll(undefined, ...ids.slice(0, index + 1))
        }))
    ], [ids, cataloguesAll, catalogues, t, refs])

    return (
        <Breadcrumbs
            crumbs={crumbs}
        />
    )
}
