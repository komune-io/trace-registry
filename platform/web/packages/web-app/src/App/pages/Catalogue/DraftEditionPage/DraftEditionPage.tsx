import { languages, LanguageSelector, TitleDivider, useRoutesDefinition } from 'components'
import { CatalogueMetadataForm, CatalogueEditionHeader, CatalogueSections, CatalogueTypes, useCatalogueDraftGetQuery, useCatalogueDraftCreateCommand } from 'domain-components'
import { AppPage, SectionTab, Tab } from 'template'
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { maybeAddItem } from 'App/menu';
import { useDraftMutations } from './useDraftMutations';
import { useQueryClient } from '@tanstack/react-query';
import { useMetadataFormState } from './useMetadataFormState';
import { Typography } from '@mui/material';

export const DraftEditionPage = () => {
  const { draftId, catalogueId } = useParams()
  const [tab, setTab] = useState("info")
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { cataloguesCatalogueIdDraftIdEdit } = useRoutesDefinition()
  const [isLoading, setIsLoading] = useState(false)
  const queryClient = useQueryClient()

  const simplified = false

  const catalogueDraftQuery = useCatalogueDraftGetQuery({
    query: {
      id: draftId!
    },
  })

  const draft = catalogueDraftQuery.data?.item

  const catalogue = catalogueDraftQuery.data?.item?.catalogue

  const isDefLoading = catalogueDraftQuery.isLoading || isLoading

  const metadataFormState = useMetadataFormState({
    catalogue,
    isLoading: isDefLoading
  })

  const { onDelete, onSave, onSectionChange, onSubmit, onValidate } = useDraftMutations({
    metadataFormState,
    setTab,
    catalogue,
    refetchDraft: catalogueDraftQuery.refetch
  })

  const title = catalogue?.title ?? t("sheetEdition")

  const tabs: Tab[] = useMemo(() => {
    const tabs: Tab[] = [...maybeAddItem(!simplified, {
      key: 'metadata',
      label: t('metadata'),
      component: <CatalogueMetadataForm draft={draft} formState={metadataFormState} type={catalogue?.type as CatalogueTypes} />,
    }), {
      key: 'info',
      label: t('informations'),
      component: <CatalogueSections isLoading={isDefLoading} onSectionChange={onSectionChange} catalogue={catalogue} />,
    },
    ]
    return tabs
  }, [t, catalogue, metadataFormState, simplified, onSectionChange, isDefLoading, draft])

  const onChangeTitle = useCallback(
    (title: string) => {
      metadataFormState.setFieldValue("title", title)
    },
    [metadataFormState.setFieldValue],
  )

  const createDraft = useCatalogueDraftCreateCommand({})

  const onChangeLanguage = useCallback(
    async (languageTag: string) => {
      if (!catalogue) return

      const existingDraft = catalogue.pendingDrafts?.find(draft => draft.language === languageTag)
      if (existingDraft) {
        navigate(cataloguesCatalogueIdDraftIdEdit(catalogueId!, existingDraft.id))
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
        catalogueDraftQuery.refetch()
        navigate(cataloguesCatalogueIdDraftIdEdit(catalogueId!, res.id))
      }
    },
    [createDraft.mutateAsync, catalogueId, catalogue],
  )


  return (
    <AppPage
      title={title}
      bgcolor='background.default'
      maxWidth={1020}
    >
      <CatalogueEditionHeader
        draft={draft}
        onDelete={onDelete}
        onSubmit={onSubmit}
        onSave={onSave}
        onValidate={!simplified ? onValidate : undefined}
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
      <TitleDivider title={title} onChange={!simplified ? onChangeTitle : undefined} />
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
        currentTab={tab}
        onTabChange={(_, value) => setTab(value)}
      />
    </AppPage>
  )
}
