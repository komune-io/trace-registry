import { TitleDivider, SectionTab, Tab, useRoutesDefinition } from 'components'
import { useCatalogueDraftGetQuery } from 'domain-components'
import { AppPage } from 'template'
import { useNavigate, useParams } from "react-router-dom";
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useMetadataFormState } from '../DraftEditionPage/useMetadataFormState';
import { useDraftTabs } from '../DraftEditionPage/useDraftTabs';

export const DraftViewPage = () => {
  const { catalogueId, draftId, tab } = useParams()
  const { t } = useTranslation()
  const { cataloguesCatalogueIdDraftIdViewTab } = useRoutesDefinition()
  const navigate = useNavigate()
  
  const setTab = useCallback(
    (tab: string) => {
      navigate(cataloguesCatalogueIdDraftIdViewTab(catalogueId!, draftId!, tab!))
    },
    [catalogueId, draftId, navigate],
  )

  const catalogueDraftQuery = useCatalogueDraftGetQuery({
    query: {
      id: draftId!
    },
  })

  const catalogue = catalogueDraftQuery.data?.item?.catalogue

  const draft = catalogueDraftQuery.data?.item

  const metadataFormState = useMetadataFormState({
    catalogue,
    isLoading: catalogueDraftQuery.isInitialLoading,
    readOnly: true
  })

  const title = catalogue?.title ?? t("sheetEdition")

  const tabs: Tab[] = useDraftTabs({
    metadataFormState,
    catalogue,
    draft,
    isLoading: catalogueDraftQuery.isInitialLoading,
    readOnly: true
  })

  return (
    <AppPage
      title={title}
      basicHeader={false}
      maxWidth={1020}
    >
      <TitleDivider title={title} />
      <SectionTab
        keepMounted
        tabs={tabs}
        currentTab={tab ?? "metadata"}
        onTabChange={(_, value) => setTab(value)}
      />
    </AppPage>
  )
}
