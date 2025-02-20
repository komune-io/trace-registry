import { TitleDivider } from 'components'
import { CatalogueMetadataForm, CatalogueSections, CatalogueTypes, useCatalogueDraftGetQuery } from 'domain-components'
import { AppPage, SectionTab, Tab } from 'template'
import { useParams } from "react-router-dom";
import {useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMetadataFormState } from '../DraftEditionPage/useMetadataFormState';

export const DraftViewPage = () => {
  const {draftId } = useParams()
  const [tab, setTab] = useState("info")
  const { t } = useTranslation()

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

  const tabs: Tab[] = useMemo(() => {
    const tabs: Tab[] = [{
      key: 'metadata',
      label: t('metadata'),
      component: <CatalogueMetadataForm draft={draft} formState={metadataFormState} type={catalogue?.type as CatalogueTypes} />,
    }, {
      key: 'info',
      label: t('informations'),
      component: <CatalogueSections isLoading={catalogueDraftQuery.isInitialLoading} readOnly catalogue={catalogue} />,
    },
    ]
    return tabs
  }, [t, catalogue, metadataFormState,, catalogueDraftQuery.isInitialLoading, draft])
  
  return (
    <AppPage
      title={title}
      bgcolor='background.default'
      maxWidth={1020}
    >
      <TitleDivider title={title} />
      <SectionTab
        keepMounted
        tabs={tabs}
        currentTab={tab}
        onTabChange={(_, value) => setTab(value)}
      />
    </AppPage>
  )
}
