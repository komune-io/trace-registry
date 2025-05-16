import {
  CatalogueBreadcrumbs,
  CatalogueGrid, useCataloguePageQuery,
  Catalogue, DatasetRouterSection,
  CreateDraftButton,
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppPage } from 'template'
import { InfoTicket, maybeAddItem, useRoutesDefinition, SectionTab, Tab, useExtendedAuth, CustomLinkButton } from 'components'
import { SyntheticEvent, useCallback, useMemo, useState } from 'react'
import { useCataloguesRouteParams } from 'domain-components'
import { Stack } from '@mui/material'
import {useLocation} from "react-router";

interface CatalogueViewEntryPointProps {
  catalogue: Catalogue
}

export const CatalogueViewEntryPoint = (props: CatalogueViewEntryPointProps) => {
    const {
      catalogue
    } = props
    const { t, i18n } = useTranslation()
    const { ids } = useCataloguesRouteParams()
    const { cataloguesCatalogueIdDraftIdEditTab } = useRoutesDefinition()
    const {policies} = useExtendedAuth()
    const navigate = useNavigate()
    const location = useLocation();
    const [emptyTabs, setEmptyTabs] = useState<Record<string, boolean>>({})

    const { cataloguesTab } = useRoutesDefinition()
    const onTabChange = useCallback((_: SyntheticEvent<Element, Event>, value: string) => {
        navigate(cataloguesTab(value, ...ids))
    }, [ids])

    const datasetTab: Tab[] = useMemo(() => catalogue?.datasets
      ?.filter((it) => {
        const display = it.structure?.definitions?.display ?? ""
        return display.includes("read")
      })
      ?.map((dataset) => {
        if (emptyTabs[dataset.id]) return null
        return {
            key: dataset.id,
            label: dataset.title!,
            component: <DatasetRouterSection
                catalogue={catalogue}
                item={dataset}
                isLoading={false}
                isEmpty={(isEmpty) => {
                    setEmptyTabs((prev) => ({
                        ...prev,
                        [dataset.id]: isEmpty
                    }))
                }}
            />
        }
    }).filter(Boolean) as Tab[] ?? [], [catalogue, emptyTabs])


  const currentTab = useMemo(() => {
      const tab = location.hash.replace('#', '')
      return !tab || tab === '' ? datasetTab[0]?.key : tab
    },
    [location]
  )

    const { data } = useCataloguePageQuery({
        query: {
            parentIdentifier: catalogue?.identifier,
            language: i18n.language
        },
        options: {
            enabled: catalogue?.identifier !== undefined
        }
    })

    const items = data?.items ?? []
    const tabs: Tab[] = useMemo(() => {
        const tabs: Tab[] = [
          ...datasetTab
          , ...maybeAddItem(items.length > 0, {
            key: 'subCatalogues',
            label: t('subCatalogues'),
            component: (<CatalogueGrid items={data?.items} isLoading={false} />)
        }),
        ]
        return tabs
    }, [t, data, catalogue])

    const currentLanguageDraft = useMemo(() => catalogue?.pendingDrafts?.find((draft) => draft.language === i18n.language), [catalogue, i18n.language])

    return (
        <AppPage title={catalogue?.title}>
            <Stack
                gap={2}
                justifyContent="space-between"
                alignItems="center"
                direction="row"
            >
                <CatalogueBreadcrumbs />
                <CreateDraftButton catalogue={catalogue} canCreate={policies.draft.canCreate()} />
            </Stack>
            {currentLanguageDraft && <InfoTicket
                title={t("catalogues.activeContribution")}
            >
                <CustomLinkButton
                    to={cataloguesCatalogueIdDraftIdEditTab(catalogue?.id!, currentLanguageDraft.id)}
                >
                    {t("catalogues.consultContribution")}
                </CustomLinkButton>
            </InfoTicket>
            }
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