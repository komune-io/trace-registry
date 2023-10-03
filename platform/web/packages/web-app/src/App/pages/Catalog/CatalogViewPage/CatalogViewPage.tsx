import { CatalogInformations, useCatalogueGetQuery } from 'domain-components'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { AppPage, SectionTab, Tab } from 'template'
import { catalogs as catalogsObject } from '../CatalogListPage/CatalogListPage'
import { LinkButton } from '@smartb/g2'
import { useRoutesDefinition } from 'components'
import { ArrowBackIosNewRounded } from '@mui/icons-material'
import { useCallback, useMemo } from 'react'

export const CatalogViewPage = () => {
    const { t } = useTranslation()
    const { catalogId, tab } = useParams()
    const navigate = useNavigate()
    const currentTab = useMemo(() => tab ?? "info", [tab])

    const {catalogs, catalogsCatalogIdViewTab} = useRoutesDefinition()

    const catalogGet = useCatalogueGetQuery({
        query: {
            id: catalogId!
        }
    })

    const onTabChange = useCallback((_: React.SyntheticEvent<Element, Event>, value: string) => {
        navigate(catalogsCatalogIdViewTab(catalogId || "", value))
    }, [catalogId])

    const tabs: Tab[] = useMemo(() => {
        const tabs: Tab[] = [{
            key: 'info',
            label: t('information'),
            component: (<CatalogInformations catalog={catalogGet.data?.item} mostUsedCatalogs={catalogsObject} isLoading={catalogGet.isInitialLoading} />)
        }]
        return tabs
    }, [t, catalogGet.data, catalogGet.isInitialLoading])

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
