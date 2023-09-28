import { CatalogInformations } from 'domain-components'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { AppPage, SectionTab, Tab } from 'template'
import { catalog, catalogs as catalogsObject } from '../CatalogList/CatalogList'
import { LinkButton } from '@smartb/g2'
import { useRoutesDefinition } from 'components'
import { ArrowBackIosNewRounded } from '@mui/icons-material'
import { useCallback, useMemo } from 'react'

export const CatalogView = () => {
    const { t } = useTranslation()
    const { catalogId, tab } = useParams()
    const navigate = useNavigate()
    const currentTab = useMemo(() => tab ?? "info", [tab])

    const {catalogs, catalogsCatalogIdViewTab} = useRoutesDefinition()

    const onTabChange = useCallback((_: React.SyntheticEvent<Element, Event>, value: string) => {
        navigate(catalogsCatalogIdViewTab(catalogId || "", value))
    }, [catalogId])

    const tabs: Tab[] = useMemo(() => {
        const tabs: Tab[] = [{
            key: 'info',
            label: t('information'),
            component: (<CatalogInformations catalog={catalog} mostUsedCatalogs={catalogsObject} />)
        }]
        return tabs
    }, [t])

    return (
        <AppPage
            title={catalog.title}
            flexContent
        >
            <SectionTab
                tabs={tabs}
                currentTab={currentTab}
                goBackLink={(<LinkButton sx={{ zIndex: 5 }} to={catalogs()} key="goBack" variant="text" startIcon={<ArrowBackIosNewRounded />}>{t("standards")}</LinkButton>)}
                onTabChange={onTabChange}
            />
        </AppPage>
    )
}
