import { FormComposableState } from '@komune-io/g2'
import { Catalogue, CatalogueCreateCommand, findLexicalDataset, useCatalogueDeleteCommand, useCatalogueUpdateCommand, useDatasetAddJsonDistributionCommand, useDatasetUpdateJsonDistributionCommand } from 'domain-components'
import { EditorState } from 'lexical'
import {useRef, useCallback} from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query';

interface useDraftMutationsParams {
  metadataFormState: FormComposableState
  setTab: (tab: string) => void
  catalogue?: Catalogue
  refetchDraft: () => void
}

export const useDraftMutations = (params: useDraftMutationsParams) => {
  const { metadataFormState, setTab, catalogue, refetchDraft } = params
  const { catalogueId, draftId } = useParams()
  const queryClient = useQueryClient()
  const editorStateRef = useRef<EditorState | undefined>(undefined)
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  const onSectionChange = useCallback(
    (editorState: EditorState) => {
      editorStateRef.current = editorState
    },
    [],
  )

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
          hidden: metadataFormState.values.hidden,
          homepage: metadataFormState.values.homepage,
          language: i18n.language,
          id: catalogueId!,
          draftId: draftId!,
        },
        files: metadataFormState.values.illustration ? [{
          file: metadataFormState.values.illustration
        }] : []
      })

      const dataset = catalogue ? findLexicalDataset(catalogue) : undefined

      if (editorStateRef.current) {
        if (dataset && dataset.distribution.mediaType === "application/json") {
          await updateJsonDistribution.mutateAsync({
            id: dataset.dataSet.id,
            jsonContent: JSON.stringify(editorStateRef.current?.toJSON()),
            distributionId: dataset.distribution.id,
            draftId: draftId!
          })
        } else {
          const dataSetId = catalogue?.datasets?.find((dataSet) => dataSet.type === "lexical")?.id
          if (dataSetId) {
            await addJsonDistribution.mutateAsync({
              id: dataSetId,
              jsonContent: JSON.stringify(editorStateRef.current?.toJSON()),
              draftId: draftId!
            })
          }
        }
      }
      
      const res = await update

      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/datasetDownloadDistribution"] })
        refetchDraft()
      }
    },
    [metadataFormState.values, catalogueUpdate.mutateAsync, metadataFormState.values, i18n.language, catalogueId, draftId, catalogue, refetchDraft],
  )

    const deleteCatalogue = useCatalogueDeleteCommand({})
  
    const onDelete = useCallback(
      async () => {
        const res = await deleteCatalogue.mutateAsync({
          id: catalogueId!
        })
        if (res) {
          navigate("/")
        }
      },
      [deleteCatalogue.mutateAsync, catalogueId],
    )

    return {
      onSave,
      onDelete,
      onSectionChange
    }
}
