
import { Catalogue } from '../../model'
import { useTranslation } from 'react-i18next'
import { CatalogDetails } from '../CatalogDetails'
import { TitleDivider } from 'components'
import { CatalogGrid } from '../CatalogGrid'
import { Button } from '@smartb/g2'

export interface CatalogInformationsProps {
    catalog?: Catalogue
    isLoading?: boolean
    mostUsedCatalogs?: Catalogue[]
}

export const CatalogInformations = (props: CatalogInformationsProps) => {
    const {
        catalog,
        isLoading,
        mostUsedCatalogs
    } = props

    const { t } = useTranslation()
    

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
            />
            <Button sx={{alignSelf: "flex-end"}}>{t("catalogs.seeAllPrograms")}</Button>
        </>
    )
}
