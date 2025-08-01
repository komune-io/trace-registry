import { createObjWithFallbackValue, SectionTab, Tab, useExtendedAuth, useRoutesDefinition } from 'components'
import { CatalogueEditionHeader, CatalogueValidationHeader, DraftAddProtocolButton, useCatalogueDraftGetQuery } from 'domain-components'
import { AppPage } from 'template'
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMetadataFormState } from './useMetadataFormState';
import { CircularProgress } from '@mui/material';
import { useDraftTabs } from './useDraftTabs';
import { useDraftValidations } from './useDraftValidations';
import { useDraftMutations } from './useDraftMutations';
import { useDraftFormData } from './useDraftFormData';
import { DraftLanguageSelector } from './DraftLanguageSelector';
import { DraftTitle } from './DraftTitle';
import { ValidatedDraftInfo } from './ValidatedDraftInfo';
import { RejectedDraftInfo } from './RejectedDraftInfo';

export interface DraftPageProps {
  validation?: boolean
}

export const DraftPage = (props: DraftPageProps) => {
  const { validation = false } = props
  const { draftId, catalogueId, tab } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { draftPage, cataloguesToVerify } = useRoutesDefinition()
  const [isLoading, setIsLoading] = useState(false)
  const { policies } = useExtendedAuth()

  const setTab = useCallback(
    (tab: string) => {
      navigate(draftPage(validation, catalogueId!, draftId!, tab!))
    },
    [validation, catalogueId, draftId, navigate],
  )

  const catalogueDraftQuery = useCatalogueDraftGetQuery({
    query: {
      id: draftId!
    },
  })

  const draft = catalogueDraftQuery.data?.item
  const catalogue = draft?.catalogue

  const canUdateDraft = policies.draft.canUpdate(draft) && draft?.status !== "VALIDATED" && !draft?.isDeleted

  const canAudit = policies.draft.canAudit()

  const canValidate = canAudit && validation && draft?.status === "SUBMITTED"

  const isDefLoading = catalogueDraftQuery.isLoading || isLoading

  const formData = useDraftFormData({ catalogue })

  const { onDeleteDraft, onDeleteCatalogue, onSectionChange, onSaveMetadata, isUpdating } = useDraftMutations({
    catalogue,
    refetchDraft: catalogueDraftQuery.refetch,
    draft
  })

  const metadataFormState = useMetadataFormState({
    formData,
    onSubmit: onSaveMetadata,
    catalogue,
    isLoading: isDefLoading,
    readOnly: !canUdateDraft,
  })

  const { onSubmit, onValidate, onReject, validateMetadata } = useDraftValidations({
    draft,
    metadataFormState,
    refetchDraft: catalogueDraftQuery.refetch,
    setTab,
    afterValidateNavigate: canValidate ? cataloguesToVerify() : undefined
  })

  const title = catalogue?.title ?? t("sheetEdition")

  const readOnlyTabs = createObjWithFallbackValue({
    "lexical": !canUdateDraft,
  }, !canUdateDraft || draft?.status === "SUBMITTED")

  const tabs: Tab[] = useDraftTabs({
    formData,
    metadataFormState,
    catalogue,
    draft,
    isLoading: isDefLoading,
    onSectionChange,
    readOnlyTabs,
  })


  if (catalogueDraftQuery.isFetching) {
    return <AppPage
      title={title}
      basicHeader={false}
      maxWidth={1080}
    >
      <CircularProgress
        size={40}
        sx={{
          alignSelf: 'center',
          mt: 8
        }}
      />
    </AppPage>
  }
  return (
    <AppPage
      title={title}
      basicHeader={false}
      maxWidth={1080}
      customHeader={canValidate ? <CatalogueValidationHeader draft={draft} onAccept={onValidate} onReject={onReject} isUpdating={isUpdating} /> : undefined}
      headerContainerProps={canValidate ? {
        sx: {
          position: "sticky",
          borderRadius: 0,
          top: 0,
          zIndex: 1,
        }
      } : undefined}
    >
      {canUdateDraft && !canValidate && <CatalogueEditionHeader
        draft={draft}
        onDeleteDraft={policies.draft.canDelete(draft) ? onDeleteDraft : undefined}
        onDeleteCatalogue={policies.catalogue.canDelete(catalogue) ? onDeleteCatalogue : undefined}
        onSubmit={policies.draft.canSubmit(draft) ? onSubmit : undefined}
        beforeSubmit={validateMetadata}
        onValidate={canAudit ? onValidate : undefined}
        catalogue={catalogue}
        disabled={!metadataFormState.values.title}
        isUpdating={isUpdating || metadataFormState.isSubmitting}
      />}
      <DraftTitle
        canUdateDraft={canUdateDraft}
        isDefLoading={isDefLoading}
        metadataFormState={metadataFormState}
        title={title}
        validateMetadata={validateMetadata}
        actions={<DraftAddProtocolButton />}
      />
      {draft?.status === "VALIDATED" && <ValidatedDraftInfo />}
      {draft?.status == "REJECTED" && <RejectedDraftInfo draft={draft} />}
      {canUdateDraft && !canValidate && <DraftLanguageSelector
        isLoading={isLoading}
        refetchDraft={catalogueDraftQuery.refetch}
        setIsLoading={setIsLoading}
        catalogue={catalogue}
        draft={draft}
      />}
      <SectionTab
        keepMounted
        tabs={tabs}
        currentTab={tab ?? "metadata"}
        onTabChange={(_, value) => setTab(value)}
      />
    </AppPage>
  )
}
