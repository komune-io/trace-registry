
import { Catalogue } from '../../model'
import { useTranslation } from 'react-i18next'
import { CatalogDetails } from '../CatalogDetails'
import { TitleDivider, useRoutesDefinition } from 'components'
import { CatalogGrid } from '../CatalogGrid'
import { LinkButton } from '@smartb/g2'
import { useCatalogsRouteParams } from '../useCatalogsRouteParams'

export interface CatalogInformationsProps {
    catalog?: Catalogue
    isLoading?: boolean
    mostUsedCatalogs?: Catalogue[]
    mostUsedCatalogsLoading?: boolean
}

export const CatalogInformations = (props: CatalogInformationsProps) => {
    const {
        catalog,
        isLoading,
        mostUsedCatalogs,
        mostUsedCatalogsLoading
    } = props

    const { t } = useTranslation()
    const { ids, tab } = useCatalogsRouteParams()

    const { catalogsAll } = useRoutesDefinition()
    

    return (
        <>
            <TitleDivider 
            title={t("catalogs.standardDescription")}
            />
            <CatalogDetails 
            catalog={catalog}
            isLoading={isLoading}
            />
            <TitleDivider 
            title={t("catalogs.mostUsedStandards")}
            />
            <CatalogGrid 
            items={mostUsedCatalogs}
            isLoading={mostUsedCatalogsLoading}
            />
            <LinkButton to={catalogsAll("grid", tab, ...ids )} sx={{alignSelf: "flex-end"}}>{t("catalogs.seeAllPrograms")}</LinkButton>
        </>
    )
}
