import { Breadcrumbs, Crumb, useRoutesDefinition } from 'components'
import { useCataloguesRouteParams } from '../useCataloguesRouteParams'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useCatalogueRefListQuery } from '../../api'

export const CatalogueBreadcrumbs = () => {
    const { ids } = useCataloguesRouteParams()
    const {cataloguesAll, catalogues} = useRoutesDefinition()
    const {t, i18n} = useTranslation()
    const refsQuery = useCatalogueRefListQuery({
        query: {
            language: i18n.language
        }
    })



    const crumbs = useMemo(() => {
        const refs = refsQuery.data?.items
        return [
            ...ids.map((id, index): Crumb => ({
                label: refs?.find((ref) => ref.identifier === id && ref.language === i18n.language)?.title ?? id,
                url: cataloguesAll(undefined, ...ids.slice(0, index + 1))
            }))
        ]
    }, [ids, cataloguesAll, catalogues, t, refsQuery.data?.items])

    return (
        <Breadcrumbs
            crumbs={crumbs}
        />
    )
}
