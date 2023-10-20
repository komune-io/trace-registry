import {
    CatalogueBreadcrumbs,
    Catalogue,
    CatalogueInformation, DatasetDataSection,
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppPage, SectionTab, Tab } from 'template'
import { useRoutesDefinition } from 'components'
import { SyntheticEvent, useCallback, useMemo } from 'react'
import { useCataloguesRouteParams } from 'domain-components'

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

    const { cataloguesAll} = useRoutesDefinition()

    const onTabChange = useCallback((_: SyntheticEvent<Element, Event>, value: string) => {
        navigate(cataloguesAll(value, ...ids))
    }, [ids])

    const datasetTab: Tab[] = catalogue?.datasets?.map((dataset) => {
        console.log(dataset.identifier)
        return {
            key: dataset.identifier,
            label: dataset.title,
            component: (<DatasetDataSection item={dataset} isLoading={false} />)
        }
    }) ?? []

    const tabs: Tab[] = useMemo(() => {
        const tabs: Tab[] = [{
            key: 'info',
            label: t('information'),
            component: (<CatalogueInformation
                catalogue={catalogue}
                isLoading={isLoading}
            />)
        }, ...datasetTab]
        return tabs
    }, [t, catalogue, isLoading])

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