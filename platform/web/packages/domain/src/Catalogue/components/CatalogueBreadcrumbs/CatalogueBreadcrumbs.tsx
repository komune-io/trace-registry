import { Breadcrumbs, Crumb, useRoutesDefinition } from 'components'
import { useCataloguesRouteParams } from '../useCataloguesRouteParams'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useCatalogueRefListQuery } from '../../api'
import { CatalogueRef } from '../../model'

export const CatalogueBreadcrumbs = () => {
    const { ids } = useCataloguesRouteParams()
    const {cataloguesAll, catalogues} = useRoutesDefinition()
    const {t, i18n} = useTranslation()

    const query = useMemo(() => ids.map((id) => ({
        id,
        language: i18n.language
    })), [ids])

    const refsQuery = useCatalogueRefListQuery({
        query
    })

    const crumbs = useMemo(() => {
        const refs = refsQuery.data?.map(({item}) => item).filter(Boolean) as CatalogueRef[] | undefined
        return [
            ...ids.map((id, index): Crumb => ({
                label: refs?.find((ref) => ref.identifier === id && ref.language === i18n.language)?.title ?? id,
                url: cataloguesAll( ...ids.slice(0, index + 1))
            }))
        ]
    }, [ids, cataloguesAll, catalogues, t, refsQuery.data])

    return (
        <Breadcrumbs
            crumbs={crumbs}
        />
    )
}
