import {
  CatalogueBreadcrumbs,
  Catalogue, DatasetRouterSection,
  CreateDraftButton,
  useCatalogueSearchQuery,
  CatalogueSearchQuery,
  CatalogueSearchModule,
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppPage } from 'template'
import { InfoTicket, maybeAddItem, useRoutesDefinition, SectionTab, Tab, useExtendedAuth, CustomLinkButton } from 'components'
import { SyntheticEvent, useCallback, useMemo, useState } from 'react'
import { useCataloguesRouteParams } from 'domain-components'
import { Stack } from '@mui/material'
import {useLocation} from "react-router";
import { keepPreviousData } from '@tanstack/react-query'

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

    const { cataloguesTab } = useRoutesDefinition()
    const onTabChange = useCallback((_: SyntheticEvent<Element, Event>, value: string) => {
        navigate(cataloguesTab(value, ...ids))
    }, [ids])

    const datasetTab: Tab[] = catalogue?.datasets
      ?.filter((it) => {
        const display = it.structure?.definitions?.display ?? ""
        return display.includes("read")
      })
      ?.map((dataset) => {
        const component = DatasetRouterSection({catalogue, item: dataset, isLoading: false})
        if (!component) return undefined
        return {
            key: dataset.id,
            label: dataset.title!,
            component
        }
    }).filter(Boolean) as Tab[]  ?? []


  const currentTab = useMemo(() => {
      const tab = location.hash.replace('#', '')
      return !tab || tab === '' ? datasetTab[0]?.key : tab
    },
    [location]
  )

  const [state, setState] = useState<Partial<CatalogueSearchQuery>>({})
  
  const changeValueCallback = useCallback(
    (valueKey: keyof CatalogueSearchQuery) => (value: any) => {
      
      setState(old => {
        if ((typeof value === 'number' || !!value) && value.length !== 0) {
          return {...old, [valueKey]: value}
        }
        return {...old, [valueKey]: undefined}
      })
    },
    []
  )
  
    const { data, isFetching } = useCatalogueSearchQuery({
      query: {
        ...state,
        parentIdentifier: [catalogue?.identifier],
        language: i18n.language
      },
      options: {
        placeholderData: keepPreviousData,
        enabled: catalogue?.identifier !== undefined
      }
    })

    const items = data?.items ?? []
    const tabs: Tab[] = useMemo(() => {
        const tabs: Tab[] = [
          ...datasetTab
          , ...maybeAddItem(items.length > 0 || Object.keys(state).length > 0, {
            key: 'subCatalogues',
            label: t('subCatalogues'),
            component: (<CatalogueSearchModule changeValueCallback={changeValueCallback} state={state} data={data} isFetching={isFetching} withImage />)
        }),
        ]
        return tabs
    }, [t, data, catalogue, isFetching, state, changeValueCallback])

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