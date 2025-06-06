import {SectionTab, Tab, TitleDivider, useRoutesDefinition} from 'components'
import {CatalogueValidationHeader, useCatalogueDraftGetQuery, useCatalogueDraftRejectCommand} from 'domain-components'
import {AppPage} from 'template'
import {useNavigate, useParams} from "react-router-dom";
import {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useQueryClient} from '@tanstack/react-query';
import {useMetadataFormState} from '../DraftEditionPage/useMetadataFormState';
import {useDraftTabs} from '../DraftEditionPage/useDraftTabs';
import {useDraftValidations} from '../DraftEditionPage/useDraftValidations';
import {useDraftMutations} from '../DraftEditionPage/useDraftMutations';
import {useDraftFormData} from '../DraftEditionPage/useDraftFormData';

export const DraftValidationPage = () => {
  const { draftId, catalogueId, tab } = useParams()
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { cataloguesToVerify, cataloguesCatalogueIdDraftIdVerifyTab } = useRoutesDefinition()

  const setTab = useCallback(
    (tab: string) => {
      navigate(cataloguesCatalogueIdDraftIdVerifyTab(catalogueId!, draftId!, tab!))
    },
    [catalogueId, draftId, navigate],
  )

  const catalogueDraftQuery = useCatalogueDraftGetQuery({
    query: {
      id: draftId!
    },
  })

  const draft = catalogueDraftQuery.data?.item
  const catalogue = draft?.catalogue

  const formData = useDraftFormData({catalogue})

  const { onSaveMetadata, isUpdating } = useDraftMutations({
    refetchDraft: catalogueDraftQuery.refetch,
    catalogue,
    draft
  })

  const metadataFormState = useMetadataFormState({
    formData,
    onSubmit: onSaveMetadata,
    catalogue,
    isLoading: catalogueDraftQuery.isInitialLoading
  })

  const { onValidate } = useDraftValidations({
    draft,
    metadataFormState,
    refetchDraft: catalogueDraftQuery.refetch,
    setTab,
    afterValidateNavigate: cataloguesToVerify(),
  })

  const title = catalogue?.title ?? t("sheetValidation")

  const tabs: Tab[] = useDraftTabs({
    formData,
    metadataFormState,
    catalogue,
    draft,
    isLoading: catalogueDraftQuery.isInitialLoading,
  })

  const rejectDraft = useCatalogueDraftRejectCommand({})

  const onReject = useCallback(
    async (reason: string) => {
      const res = await rejectDraft.mutateAsync({
        id: draftId!,
        reason
      })
      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
        navigate(cataloguesToVerify())
      }
    },
    [catalogueId],
  )

  return (
    <AppPage
      title={title}
      basicHeader={false}
      maxWidth={1020}
      customHeader={<CatalogueValidationHeader draft={draft} onAccept={onValidate} onReject={onReject} isUpdating={isUpdating} />}
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
