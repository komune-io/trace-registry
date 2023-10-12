
import { Catalogue } from '../../model'
import { useTranslation } from 'react-i18next'
import { TitleDivider, useRoutesDefinition } from 'components'
import { CatalogGrid } from '../CatalogGrid'
import { LinkButton } from '@smartb/g2'
import { useCatalogsRouteParams } from '../useCatalogsRouteParams'
import {useCataloguePageQuery} from "../../api";

export interface MustUsedCatalogueSectionProps {
    catalogue?: Catalogue
}

export const MustUsedCatalogueSection = (props: MustUsedCatalogueSectionProps) => {
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
            title={catalogue?.title ?? ""}
        />
        <CatalogGrid
            items={cataloguePage.data?.items}
            isLoading={cataloguePage.isLoading}
        />
        <LinkButton
            to={catalogsAll(tab, catalogue?.identifier ??"" )}
            sx={{alignSelf: "flex-end"}}
        >
            {t("catalogs.seeAllPrograms")}
        </LinkButton>
    </>)
}
