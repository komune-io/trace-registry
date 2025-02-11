import { languages, LanguageSelector, TitleDivider, useRoutesDefinition } from 'components'
import { CatalogueMetadataForm, CatalogueEditionHeader, CatalogueSections, useCatalogueGetQuery, CatalogueTypes, useCatalogueUpdateCommand, CatalogueCreateCommand, useDatasetAddJsonDistributionCommand, useDatasetUpdateJsonDistributionCommand, findLexicalDataset, useCatalogueDeleteCommand } from 'domain-components'
import { AppPage, SectionTab, Tab } from 'template'
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { g2Config, useFormComposable } from '@komune-io/g2';
import { maybeAddItem } from 'App/menu';
import { useQueryClient } from '@tanstack/react-query';
import { EditorState } from 'lexical';

export const CatalogueEditionPage = () => {
  const { catalogueId } = useParams()
  const [tab, setTab] = useState("info")
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const { cataloguesContributions } = useRoutesDefinition()
  const queryClient = useQueryClient()
  const editorStateRef = useRef<EditorState | undefined>(undefined)

  const simplified = false

  const catalogueQuery = useCatalogueGetQuery({
    query: {
      id: catalogueId!
    },
  })

  const catalogue = catalogueQuery.data?.item

  const formInitialValues = useMemo(() => catalogue ? ({
    ...catalogue,
    themes: (catalogue.themes ?? [])[0]?.id,
    license: catalogue.license?.id,
    illustrationUploaded: () => g2Config().platform.url + `/data/catalogues/${catalogue.id}/img`
  }) : undefined, [catalogue])

  const metadataFormState = useFormComposable({
    isLoading: catalogueQuery.isInitialLoading,
    formikConfig: {
      initialValues: formInitialValues
    }
  })

  const title = catalogue?.title ?? t("sheetEdition")

  const onSectionChange = useCallback(
    (editorState: EditorState) => {
      editorStateRef.current = editorState
    },
    [],
  )


  const tabs: Tab[] = useMemo(() => {
    const tabs: Tab[] = [...maybeAddItem(!simplified, {
      key: 'metadata',
      label: t('metadata'),
      component: <CatalogueMetadataForm formState={metadataFormState} type={catalogue?.type as CatalogueTypes ?? "100m-system"} />,
    }), {
      key: 'info',
      label: t('informations'),
      component: <CatalogueSections onSectionChange={onSectionChange} catalogue={catalogue} />,
    },
    ]
    return tabs
  }, [t, catalogue, metadataFormState, simplified, onSectionChange])

  const catalogueUpdate = useCatalogueUpdateCommand({})

  const addJsonDistribution = useDatasetAddJsonDistributionCommand({})

  const updateJsonDistribution = useDatasetUpdateJsonDistributionCommand({})

  const onSave = useCallback(
    async () => {
      const errors = await metadataFormState.validateForm()
      if (Object.keys(errors).length > 0) {
        setTab("metadata")
        return
      }
      const command = { ...metadataFormState.values } as CatalogueCreateCommand & { illustration?: File }
      delete command.illustration
      const update = catalogueUpdate.mutateAsync({
        command: {
          // form fields
          title: metadataFormState.values.title,
          description: metadataFormState.values.description,
          themes: metadataFormState.values.themes ? [metadataFormState.values.themes] : undefined,
          license: metadataFormState.values.license,
          accessRights: metadataFormState.values.accessRights,
          // keeping the same values
          structure: metadataFormState.values.structure,
          creator: metadataFormState.values.creator,
          hidden: metadataFormState.values.hidden,
          homepage: metadataFormState.values.homepage,
          publisher: metadataFormState.values.publisher,
          validator: metadataFormState.values.validator,
          language: i18n.language,
          id: catalogueId!
        },
        files: metadataFormState.values.illustration ? [{
          file: metadataFormState.values.illustration
        }] : []
      })

      const dataset = catalogue ? findLexicalDataset(catalogue) : undefined

      if (dataset && dataset.distribution.mediaType === "application/json") {
        await updateJsonDistribution.mutateAsync({
          id: dataset.dataSet.id,
          jsonContent: JSON.stringify(editorStateRef.current?.toJSON()),
          distributionId: dataset.distribution.id
        })
      } else {
        const dataSetId = catalogue?.datasets?.find((dataSet) => dataSet.type === "lexical")?.id
        if (dataSetId) {
          await addJsonDistribution.mutateAsync({
            id: dataSetId,
            jsonContent: JSON.stringify(editorStateRef.current?.toJSON()),
          })
        }
      }

      const res = await update

      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/cataloguePage"] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueRefGetTree"] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueListAvailableParents"] })
        queryClient.invalidateQueries({ queryKey: ["data/datasetDownloadDistribution"] })
        catalogueQuery.refetch()
      }
    },
    [metadataFormState.values, catalogueUpdate.mutateAsync, metadataFormState.values, i18n.language, catalogueId, catalogue],
  )

  const onSubmit = useCallback(
    async () => {
      navigate(cataloguesContributions() + "?successfullContribution=true")
      return Promise.resolve()
    },
    [],
  )
  const onChangeTitle = useCallback(
    (title: string) => {
      metadataFormState.setFieldValue("title", title)
    },
    [metadataFormState.setFieldValue],
  )

  const deleteCatalogue = useCatalogueDeleteCommand({})

  const onDelete = useCallback(
    async () => {
      const res = await deleteCatalogue.mutateAsync({
        id: catalogueId!
      })
      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/cataloguePage"] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueRefGetTree"] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueListAvailableParents"] })
        navigate("/")
      }
    },
    [deleteCatalogue.mutateAsync, catalogueId],
  )
  
  return (
    <AppPage
      title={title}
      bgcolor='background.default'
      maxWidth={1020}
    >
      <CatalogueEditionHeader onDelete={onDelete} onSubmit={onSubmit} onSave={!simplified ? onSave : undefined} catalogue={catalogue} />
      <TitleDivider title={title} onChange={!simplified ? onChangeTitle : undefined} />
      <LanguageSelector
        //@ts-ignore
        languages={languages}
        currentLanguage='fr'
        onChange={() => { }}
        sx={{ alignSelf: "flex-end", mb: -8 }}
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
