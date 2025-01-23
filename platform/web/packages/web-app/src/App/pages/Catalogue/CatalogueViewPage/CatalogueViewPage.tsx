import {
    CatalogueBreadcrumbs,
    Catalogue,
    CatalogueInformation, DatasetDataSection, CatalogueGrid, useCataloguePageQuery,
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppPage, SectionTab, Tab } from 'template'
import { useRoutesDefinition } from 'components'
import { SyntheticEvent, useCallback, useMemo } from 'react'
import { useCataloguesRouteParams } from 'domain-components'
import {maybeAddItem} from "../../../menu";

interface CatalogueViewPageProps {
    catalogue?: Catalogue
    isLoading: boolean
}
export const CatalogueViewPage = (props: CatalogueViewPageProps) => {
    const { catalogue, isLoading } = props
    const { t } = useTranslation()
    const { ids, tab} = useCataloguesRouteParams()

    const navigate = useNavigate()
    const currentTab = useMemo(() => tab ?? "info", [tab])

    const { cataloguesTab } = useRoutesDefinition()
    const onTabChange = useCallback((_: SyntheticEvent<Element, Event>, value: string) => {
        navigate(cataloguesTab(value, ...ids))
    }, [ids])

    const datasetTab: Tab[] = catalogue?.datasets?.map((dataset) => {
        return {
            key: dataset.identifier,
            label: dataset.title,
            component: (<DatasetDataSection item={dataset} isLoading={false} />)
        }
    }) ?? []


    console.log("catalogue?.identifier", catalogue?.identifier)
    const {data}  = useCataloguePageQuery({
        query: {
            parentIdentifier: catalogue?.identifier,
        },
        options: {
            enabled: catalogue?.identifier !== undefined
        }
    })

    const items = data?.items ?? []
    const tabs: Tab[] = useMemo(() => {
        const tabs: Tab[] = [{
            key: 'info',
            label: t('informations'),
            component: (<CatalogueInformation
                catalogue={catalogue}
                isLoading={isLoading}
            />)
        }, ...maybeAddItem(items.length > 0, {
            key: 'subCatalogues',
            label: t('subCatalogues'),
            component: (<CatalogueGrid items={data?.items} isLoading={false} />)
        }), ...datasetTab
        ]
        return tabs
    }, [t, data, catalogue, isLoading])

    return (
        <AppPage
            title={catalogue?.title}
            flexContent
        >
            <CatalogueBreadcrumbs />
            <SectionTab
                tabs={tabs}
                currentTab={currentTab}
                onTabChange={onTabChange}
                sx={{
                    "& .AruiSection-contentContainer": {
                        gap: (theme) => theme.spacing(5)
                    }
                }}
            />
        </AppPage>
    )
}