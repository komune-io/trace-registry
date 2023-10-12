import {
    Catalogue,
    CatalogueInformation,
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppPage, SectionTab, Tab } from 'template'
import { LinkButton } from '@smartb/g2'
import { useRoutesDefinition } from 'components'
import { ArrowBackIosNewRounded } from '@mui/icons-material'
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

    const {catalogs, catalogsAll} = useRoutesDefinition()


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
    console.log(tabs)
    return (
        <AppPage
            title={catalogue?.title}
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
