
import { Catalogue } from '../../model'
import { useTranslation } from 'react-i18next'
import { CatalogDetails } from '../CatalogDetails'
import { TitleDivider, useRoutesDefinition } from 'components'
import { CatalogGrid } from '../CatalogGrid'
import { LinkButton } from '@smartb/g2'
import { useCatalogsRouteParams } from '../useCatalogsRouteParams'
import {useCataloguePageQuery} from "../../api";

export interface CatalogInformationProps {
    catalog?: Catalogue
    isLoading?: boolean
    mostUsedCatalogs?: Catalogue[][]
    mostUsedCatalogsLoading?: boolean
}

export const CatalogInformation = (props: CatalogInformationProps) => {
    const {
        catalog,
        isLoading,
    } = props

    const { t } = useTranslation()

    catalog?.catalogues
    return (
        <>
            <TitleDivider
                title={t("catalogs.standardDescription")}
            />
            <CatalogDetails
                catalog={catalog}
                isLoading={isLoading}
            />
            {
                catalog?.catalogues?.map((subCatalog, index) => (
                   <SubCatalogueSection
                            key={index}
                            catalogue={subCatalog}
                        />
                ))
            }
        </>
    )
}

const SubCatalogueSection = (props: {catalogue: Catalogue}) => {
    const {catalogue} = props
    const { t } = useTranslation()
    const {tab } = useCatalogsRouteParams()
    const { catalogsAll } = useRoutesDefinition()
    const cataloguePage = useCataloguePageQuery({
        query: {
            parentIdentifier: props.catalogue?.identifier,
            offset: 0,
            limit: 4
        },
    })

    return (<>
        <TitleDivider
            title={catalogue.title}
        />
        <CatalogGrid
            items={cataloguePage.data?.items}
            isLoading={cataloguePage.isLoading}
        />
        <LinkButton to={catalogsAll("grid", tab, catalogue?.identifier ??"" )} sx={{alignSelf: "flex-end"}}>{t("catalogs.seeAllPrograms")}</LinkButton>
    </>)
}
