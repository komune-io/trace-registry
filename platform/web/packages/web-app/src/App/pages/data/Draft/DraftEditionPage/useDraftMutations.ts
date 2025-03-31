import { Catalogue, CatalogueCreateCommand, CatalogueDraft, findLexicalDataset, useCatalogueDraftDeleteCommand, useCatalogueUpdateCommand, useDatasetAddJsonDistributionCommand, useDatasetUpdateJsonDistributionCommand } from 'domain-components'
import { EditorState } from 'lexical'
import { useRef, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query';
import { useRefetchOnDismount, useRoutesDefinition } from 'components'
import { useDebouncedCallback } from '@mantine/hooks'

interface useDraftMutationsParams {
  catalogue?: Catalogue
  refetchDraft: () => void
  draft?: CatalogueDraft
}

const emptyFunction = () => { }

export const useDraftMutations = (params: useDraftMutationsParams) => {
  const { catalogue, refetchDraft, draft } = params
  const { catalogueId, draftId } = useParams()
  const queryClient = useQueryClient()
  const editorStateRef = useRef<EditorState | undefined>(undefined)
  const navigate = useNavigate()
  const { cataloguesContributions } = useRoutesDefinition()

  const refetchDraftData = useCallback(
    () => {
      queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
      queryClient.invalidateQueries({ queryKey: ["data/datasetDownloadDistribution"] })
      refetchDraft()
    },
    [queryClient.invalidateQueries],
  )
  

  const { doRefetchOnDismount } = useRefetchOnDismount({ refetch: refetchDraftData })

  const catalogueUpdate = useCatalogueUpdateCommand({}, { successHandler: emptyFunction })

  const addJsonDistribution = useDatasetAddJsonDistributionCommand({})

  const updateJsonDistribution = useDatasetUpdateJsonDistributionCommand({})

  const onSaveMetadata = useCallback(async (values: any) => {
    const command = { ...values } as CatalogueCreateCommand & { illustration?: File }
    delete command.illustration
    const res = await catalogueUpdate.mutateAsync({
      command: {
        // form fields
        title: values.title,
        description: values.description,
        themes: values.themes && catalogue?.type !== "100m-project" ? [values.themes] : values.themes,
        license: values.license,
        accessRights: values.accessRights,
        parentId: values.parentId,
        location: values.location,
        ownerOrganizationId: values.ownerOrganizationId,
        // keeping the same values
        structure: values.structure,
        hidden: values.hidden,
        homepage: values.homepage,
        versionNotes: values.versionNotes,
        language: values.language,
        id: draft?.catalogue.id!,
      },
      files: values.illustration ? [{
        file: values.illustration
      }] : []
    })

    if (res) {
      doRefetchOnDismount()
      return res
    }
  }, [catalogue, draft, doRefetchOnDismount])

  const onSaveLexical = useDebouncedCallback(async () => {
    const dataset = catalogue ? findLexicalDataset(catalogue) : undefined

    if (editorStateRef.current) {
      if (dataset?.dataset && dataset.distribution?.mediaType === "application/json") {
        const res = await updateJsonDistribution.mutateAsync({
          id: dataset.dataset?.id,
          jsonContent: JSON.stringify(editorStateRef.current?.toJSON()),
          distributionId: dataset.distribution?.id
        })
        if (res) {
          doRefetchOnDismount()
          return res
        }
      } else {
        const dataSetId = catalogue?.datasets?.find((dataSet) => dataSet.type === "lexical")?.id
        if (dataSetId) {
          const res = await addJsonDistribution.mutateAsync({
            id: dataSetId,
            jsonContent: JSON.stringify(editorStateRef.current?.toJSON())
          })
          if (res) {
            refetchDraftData()
            return res
          }
        }
      }
    }
  }, 500)

  const onSectionChange = useCallback(
    (editorState: EditorState) => {
      editorStateRef.current = editorState
      onSaveLexical()
    },
    [onSaveLexical],
  )

  const deleteCatalogue = useCatalogueDraftDeleteCommand({})

  const onDelete = useCallback(
    async () => {
      const res = await deleteCatalogue.mutateAsync({
        id: draftId!,
      })
      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: catalogueId! }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
        navigate(cataloguesContributions())
      }
    },
    [deleteCatalogue.mutateAsync, draftId, catalogueId, queryClient.invalidateQueries],
  )

  return {
    onSaveMetadata,
    onSaveLexical,
    onDelete,
    onSectionChange
  }
}
