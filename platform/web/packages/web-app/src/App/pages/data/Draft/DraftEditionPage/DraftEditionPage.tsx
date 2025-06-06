import {languages, LanguageSelector, SectionTab, Tab, TitleDivider, useExtendedAuth, useRoutesDefinition, WarningTicket} from 'components'
import {
  CatalogueEditionHeader,
  useCatalogueDeleteCommand,
  useCatalogueDraftCreateCommand,
  useCatalogueDraftGetQuery
} from 'domain-components'
import {AppPage} from 'template'
import {useNavigate, useParams} from "react-router-dom";
import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useQueryClient} from '@tanstack/react-query';
import {useMetadataFormState} from './useMetadataFormState';
import {Typography} from '@mui/material';
import {useDraftTabs} from './useDraftTabs';
import {useDraftValidations} from './useDraftValidations';
import {useDebouncedCallback} from '@mantine/hooks';
import {useDraftMutations} from './useDraftMutations';
import {useDraftFormData} from './useDraftFormData';

export const DraftEditionPage = () => {
  const { draftId, catalogueId, tab } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { cataloguesCatalogueIdDraftIdEditTab, cataloguesContributions } = useRoutesDefinition()
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
  const catalogue = draft?.catalogue

  const isDefLoading = catalogueDraftQuery.isLoading || isLoading

  const formData = useDraftFormData({ catalogue })

  const { onDelete, onSectionChange, onSaveMetadata, isUpdating } = useDraftMutations({
    catalogue,
    refetchDraft: catalogueDraftQuery.refetch,
    draft
  })

  const metadataFormState = useMetadataFormState({
    formData,
    onSubmit: onSaveMetadata,
    catalogue,
    isLoading: isDefLoading
  })

  const { onSubmit, onValidate, validateMetadata } = useDraftValidations({
    draft,
    metadataFormState,
    refetchDraft: catalogueDraftQuery.refetch,
    setTab,
  })

  const title = catalogue?.title ?? t("sheetEdition")

  const tabs: Tab[] = useDraftTabs({
    formData,
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

  const deleteCatalogue = useCatalogueDeleteCommand({})

  const onDeleteCatalogue = useCallback(
    async () => {
      const res = await deleteCatalogue.mutateAsync({
        id: catalogueId!
      })
      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: catalogueId! }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
        queryClient.invalidateQueries({ queryKey: ["data/cataloguePage"] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueRefGetTree"] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueListAvailableParents"] })
        navigate(cataloguesContributions())
      }
    },
    [catalogueId],
  )

  return (
    <AppPage
      title={title}
      basicHeader={false}
      maxWidth={1020}
    >
      <CatalogueEditionHeader
        draft={draft}
        onDeleteDraft={policies.draft.canDelete(draft) ? onDelete : undefined}
        onDeleteCatalogue={policies.catalogue.canDelete(catalogue) ? onDeleteCatalogue : undefined}
        onSubmit={policies.draft.canSubmit(draft) ? onSubmit : undefined}
        beforeSubmit={validateMetadata}
        onValidate={policies.catalogue.canUpdate(draft?.catalogue) ? onValidate : undefined}
        catalogue={catalogue}
        disabled={!metadataFormState.values.title}
        isUpdating={isUpdating || metadataFormState.isSubmitting}
      />
      {!metadataFormState.values.title && !isDefLoading && <Typography
        variant='body2'
        color="error"
      >
        {t("catalogues.titleRequired")}
      </Typography>
      }
      <TitleDivider title={title} onChange={policies.draft.canUpdate(draft) ? onChangeTitle : undefined} />
      {draft?.status == "REJECTED" && <WarningTicket
        severity='error'
        title={t("catalogues.validatorComment")}
      >
        <Typography
          color='error'
        >
          {draft?.rejectReason ?? ""}
        </Typography>
      </WarningTicket>
      }
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
