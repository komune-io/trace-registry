import { languages, LanguageSelector, TitleDivider, useRoutesDefinition, SectionTab, Tab, useExtendedAuth } from 'components'
import { CatalogueEditionHeader, useCatalogueDraftGetQuery, useCatalogueDraftCreateCommand } from 'domain-components'
import { AppPage } from 'template'
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDraftMutations } from './useDraftMutations';
import { useQueryClient } from '@tanstack/react-query';
import { useMetadataFormState } from './useMetadataFormState';
import { Typography } from '@mui/material';
import { useDraftTabs } from './useDraftTabs';
import { useDraftValidations } from './useDraftValidations';
import { useDebouncedCallback } from '@mantine/hooks';

export const DraftEditionPage = () => {
  const { draftId, catalogueId, tab } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { cataloguesCatalogueIdDraftIdEditTab } = useRoutesDefinition()
  const [isLoading, setIsLoading] = useState(false)
  const queryClient = useQueryClient()
  const { policies } = useExtendedAuth()

  const setTab = useCallback(
    (tab: string) => {
      navigate(cataloguesCatalogueIdDraftIdEditTab(catalogueId!, draftId!, tab!))
    },
    [catalogueId, draftId, navigate],
  )

  const catalogueDraftQuery = useCatalogueDraftGetQuery({
    query: {
      id: draftId!
    },
  })

  const draft = catalogueDraftQuery.data?.item

  const catalogue = catalogueDraftQuery.data?.item?.catalogue

  const isDefLoading = catalogueDraftQuery.isLoading || isLoading

  const { onDelete, onSectionChange, onSaveMetadata } = useDraftMutations({
    catalogue,
    refetchDraft: catalogueDraftQuery.refetch,
    draft
  })

  const metadataFormState = useMetadataFormState({
    onSubmit: onSaveMetadata,
    catalogue,
    isLoading: isDefLoading
  })

  const { onSubmit, onValidate, validateMetadata } = useDraftValidations({
    metadataFormState,
    refetchDraft: catalogueDraftQuery.refetch,
    setTab,
  })

  const title = catalogue?.title ?? t("sheetEdition")

  const tabs: Tab[] = useDraftTabs({
    metadataFormState,
    catalogue,
    draft,
    isLoading: isDefLoading,
    onSectionChange
  })

  const validateAndSubmitMetadata = useDebouncedCallback(async () => {
    const isValid = await validateMetadata()
    if (isValid) metadataFormState.submitForm()
  }, 500)

  const onChangeTitle = useCallback(
    (title: string) => {
      metadataFormState.setFieldValue("title", title)
      validateAndSubmitMetadata()
    },
    [metadataFormState.setFieldValue, validateAndSubmitMetadata],
  )

  const createDraft = useCatalogueDraftCreateCommand({})

  const onChangeLanguage = useCallback(
    async (languageTag: string) => {
      if (!catalogue) return

      const existingDraft = catalogue.pendingDrafts?.find(draft => draft.language === languageTag)
      if (existingDraft) {
        navigate(cataloguesCatalogueIdDraftIdEditTab(catalogueId!, existingDraft.id))
        return
      }

      setIsLoading(true)

      const res = await createDraft.mutateAsync({
        catalogueId: catalogueId!,
        language: languageTag
      })

      setIsLoading(false)
      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: catalogueId! }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
        catalogueDraftQuery.refetch()
        navigate(cataloguesCatalogueIdDraftIdEditTab(catalogueId!, res.item.id))
      }
    },
    [createDraft.mutateAsync, catalogueId, catalogue, tab],
  )

  return (
    <AppPage
      title={title}
      bgcolor='background.default'
      maxWidth={1020}
    >
      <CatalogueEditionHeader
        draft={draft}
        onDelete={policies.draft.canDelete(draft) ? onDelete : undefined}
        onSubmit={policies.draft.canSubmit(draft) ? onSubmit : undefined}
        beforeSubmit={validateMetadata}
        onValidate={policies.audit.canUpdate(draft?.catalogue) ? onValidate : undefined}
        catalogue={catalogue}
        disabled={!metadataFormState.values.title}
      />
      {!metadataFormState.values.title && !isDefLoading && <Typography
        variant='body2'
        color="error"
      >
        {t("catalogues.titleRequired")}
      </Typography>
      }
      <TitleDivider title={title} onChange={policies.draft.canUpdate(draft) ? onChangeTitle : undefined} />
      <LanguageSelector
        //@ts-ignore
        languages={languages}
        currentLanguage={draft?.language}
        onChange={onChangeLanguage}
        sx={{ alignSelf: "flex-end", mb: -8, zIndex: 1 }}
        disabled={isLoading}
      />
      <SectionTab
        keepMounted
        tabs={tabs}
        currentTab={tab ?? "metadata"}
        onTabChange={(_, value) => setTab(value)}
      />
    </AppPage>
  )
}
