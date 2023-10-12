import {
    CatalogBreadcrumbs,
    Catalogue,
    CatalogueInformation,
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppPage, SectionTab, Tab } from 'template'
import { useRoutesDefinition } from 'components'
import { SyntheticEvent, useCallback, useMemo } from 'react'
import { useCatalogsRouteParams } from 'domain-components'

interface CatalogViewPageProps {
    catalogue?: Catalogue
    isLoading: boolean
}
export const CatalogViewPage = (props: CatalogViewPageProps) => {
    const { catalogue, isLoading } = props
    const { t } = useTranslation()
    const { ids, tab} = useCatalogsRouteParams()

    const navigate = useNavigate()
    const currentTab = useMemo(() => tab ?? "info", [tab])

    const { catalogsAll} = useRoutesDefinition()


    const onTabChange = useCallback((_: SyntheticEvent<Element, Event>, value: string) => {
        navigate(catalogsAll("item", value, ...ids))
    }, [ids])

    const tabs: Tab[] = useMemo(() => {
        const tabs: Tab[] = [{
            key: 'info',
            label: t('information'),
            component: (<CatalogueInformation
                catalogue={catalogue}
                isLoading={isLoading}
            />)
        }]
        return tabs
    }, [t, catalogue, isLoading])

    return (
        <AppPage
            title={catalogue?.title}
            flexContent
        >
            <CatalogBreadcrumbs />
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
