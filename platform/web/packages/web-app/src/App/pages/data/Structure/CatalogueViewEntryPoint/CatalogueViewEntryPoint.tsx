import {
  Catalogue,
  CatalogueBreadcrumbs,
  CatalogueRouterSection,
  CreateDraftButton,
  DatasetRouterSection,
  SubCatalogueModule,
  useCataloguesRouteParams,
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppPage } from 'template'
import { CustomLinkButton, InfoTicket, maybeAddItem, SectionTab, Tab, useExtendedAuth, useRoutesDefinition } from 'components'
import { SyntheticEvent, useCallback, useMemo, useState } from 'react'
import { Stack } from '@mui/material'
import { useLocation } from "react-router";
import { CatalogueClaimButton } from "domain-components/src/Catalogue/components/CatalogueClaimButton";

interface CatalogueViewEntryPointProps {
  catalogue: Catalogue
}

export const CatalogueViewEntryPoint = (props: CatalogueViewEntryPointProps) => {
  const {
    catalogue
  } = props
  const { t, i18n } = useTranslation()
  const { ids } = useCataloguesRouteParams()
  const { cataloguesCatalogueIdDraftsDraftIdTab } = useRoutesDefinition()
  const { policies } = useExtendedAuth()
  const navigate = useNavigate()
  const location = useLocation();
  const [emptyTabs, setEmptyTabs] = useState<Record<string, boolean>>({})

  const { cataloguesTab } = useRoutesDefinition()
  const onTabChange = useCallback((_: SyntheticEvent<Element, Event>, value: string) => {
    navigate(cataloguesTab(value, ...ids))
  }, [ids])

  const tabs: Tab[] = useMemo(() => [
    ...catalogue?.datasets
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
      }),
    ...catalogue?.catalogues
      ?.filter((it) => {
        return it.structure?.isTab
      })
      ?.map((catalogue) => {
        if (emptyTabs[catalogue.id]) return null
        return {
          key: catalogue.id,
          label: catalogue.title!,
          component: <CatalogueRouterSection
            item={catalogue}
            isLoading={false}
            isEmpty={(isEmpty) => {
              setEmptyTabs((prev) => ({
                ...prev,
                [catalogue.id]: isEmpty
              }))
            }}
          />
        }
      }),
    ...maybeAddItem(!emptyTabs['subCatalogues'], {
      key: 'subCatalogues',
      label: t('subCatalogues'),
      component: (<SubCatalogueModule
        parentIdentifier={catalogue?.identifier}
        type="GRID"
        isEmpty={(isEmpty) => {
          setEmptyTabs((prev) => ({
            ...prev,
            ['subCatalogues']: isEmpty
          }))
        }}
      />)
    })
  ].filter(Boolean) as Tab[] ?? [], [catalogue, emptyTabs])


  const currentTab = useMemo(() => {
    const tab = location.hash.replace('#', '')
    return !tab || tab === '' ? tabs[0]?.key : tab
  },
    [location]
  )

  const currentLanguageDraft = useMemo(() => catalogue?.pendingDrafts?.find((draft) => draft.language === i18n.language), [catalogue, i18n.language])

  const canCreateDraft = policies.draft.canCreate(catalogue)

  return (
    <AppPage title={catalogue?.title}>
      <Stack
        gap={2}
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >
        <CatalogueBreadcrumbs />
        {canCreateDraft && <CreateDraftButton catalogue={catalogue} canCreate={policies.draft.canCreate(catalogue)} />}
        {!canCreateDraft && <CatalogueClaimButton catalogue={catalogue} />}
      </Stack>
      {currentLanguageDraft && <InfoTicket
        title={t("catalogues.activeContribution")}
      >
        <CustomLinkButton
          to={cataloguesCatalogueIdDraftsDraftIdTab(catalogue?.id!, currentLanguageDraft.id)}
        >
          {t("catalogues.consultContribution")}
        </CustomLinkButton>
      </InfoTicket>
      }
      <SectionTab
        keepMounted
        removeTabsWhenLessThan2
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
