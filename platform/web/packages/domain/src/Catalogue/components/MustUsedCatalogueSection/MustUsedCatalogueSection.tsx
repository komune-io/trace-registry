
import { Catalogue, CatalogueRef } from '../../model'
import { useTranslation } from 'react-i18next'
import { TitleDivider, useRoutesDefinition } from 'components'
import { CatalogueGrid } from '../CatalogueGrid'
import { LinkButton } from '@smartb/g2'
import { useCataloguesRouteParams } from '../useCataloguesRouteParams'
import {useCataloguePageQuery} from "../../api";

export interface MustUsedCatalogueSectionProps {
    catalogue?: Catalogue | CatalogueRef
}

export const MustUsedCatalogueSection = (props: MustUsedCatalogueSectionProps) => {
    const {catalogue} = props
    const { t } = useTranslation()
    const {tab } = useCataloguesRouteParams()
    const { cataloguesAll } = useRoutesDefinition()
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
        <CatalogueGrid
            items={cataloguePage.data?.items}
            isLoading={cataloguePage.isLoading}
        />
        <LinkButton
            to={cataloguesAll(tab, catalogue?.identifier ??"" )}
            sx={{alignSelf: "flex-end"}}
        >
            {t("catalogues.seeAllPrograms")}
        </LinkButton>
    </>)
}
