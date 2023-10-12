import {
    CatalogInformation, Catalogue,
    useCatalogueGetQuery,
    useCataloguePageQueries,
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppPage, SectionTab, Tab } from 'template'
import { LinkButton } from '@smartb/g2'
import { useRoutesDefinition } from 'components'
import { ArrowBackIosNewRounded } from '@mui/icons-material'
import {SyntheticEvent, useCallback, useMemo} from 'react'
import { useCatalogsRouteParams } from 'domain-components'

export const CatalogViewPage = () => {
    const { t } = useTranslation()
    const { ids, tab} = useCatalogsRouteParams()

    const catalogId = ids[ids.length - 1]

    const navigate = useNavigate()
    const currentTab = useMemo(() => tab ?? "info", [tab])

    const {catalogs, catalogsAll} = useRoutesDefinition()

    const catalogGet = useCatalogueGetQuery({
        query: {
            identifier: catalogId!
        }
    })

    const requests = catalogGet.data?.item?.catalogues?.map((catalogue) => ({
        parentIdentifier: catalogue?.identifier,
        offset: 0,
        limit: 4
    }))

    const subCatalogues = useCataloguePageQueries({
        query: requests ?? [],
        options: {
            enabled: !!catalogGet.data?.item?.identifier
        }
    })

    const isLoading = subCatalogues.results.every(item => item.isLoading);
    const catalogues: Catalogue[][] = subCatalogues.results.map(
        result => result.data?.items ?? []
    ) ?? []

    const onTabChange = useCallback((_: SyntheticEvent<Element, Event>, value: string) => {
        navigate(catalogsAll("item", value, ...ids))
    }, [ids])

    const tabs: Tab[] = useMemo(() => {
        const tabs: Tab[] = [{
            key: 'info',
            label: t('information'),
            component: (<CatalogInformation
                catalog={catalogGet.data?.item}
                mostUsedCatalogs={catalogues}
                mostUsedCatalogsLoading={isLoading}
                isLoading={catalogGet.isInitialLoading}
            />)
        }]
        return tabs
    }, [t, catalogues, isLoading, catalogGet.data, catalogGet.isInitialLoading])

    return (
        <AppPage
            title={catalogGet.data?.item?.title}   
            flexContent
        >
            <SectionTab
                tabs={tabs}
                currentTab={currentTab}
                goBackLink={(<LinkButton sx={{ zIndex: 5 }} to={catalogs()} key="goBack" variant="text" startIcon={<ArrowBackIosNewRounded />}>{t("standards")}</LinkButton>)}
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
