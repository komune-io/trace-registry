import { Catalogue, CatalogueCreateCommand, CatalogueDraft, Dataset, findLexicalDataset, useCatalogueDraftDeleteCommand, useCatalogueUpdateCommand, useDatasetAddJsonDistributionCommand, useDatasetUpdateJsonDistributionCommand, convertRelatedCataloguesToIds, useCatalogueDeleteCommand } from 'domain-components'
import { EditorState } from 'lexical'
import { useCallback, useState } from 'react'
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
  const navigate = useNavigate()
  const { cataloguesContributions } = useRoutesDefinition()
  const [isUpdating, setIsUpdating] = useState(false)

  const refetchDraftData = useCallback(
    () => {
      queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
      queryClient.invalidateQueries({ queryKey: ["data/datasetDownloadDistribution"] })
      refetchDraft()
    },
    [],
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
        themes: values.themes && !Array.isArray(values.themes) ? [values.themes] : values.themes,
        license: values.license,
        accessRights: values.accessRights,
        parentId: values.parentId,
        location: values.location,
        stakeholder: values.stakeholder,
        relatedCatalogueIds: convertRelatedCataloguesToIds(values.relatedCatalogues),
        // keeping the same values
        hidden: values.hidden,
        homepage: values.homepage,
        versionNotes: values.versionNotes,
        language: values.language,
        ownerOrganizationId: values.ownerOrganizationId,
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

  const saveLexicalDistribution = useDebouncedCallback(async (editorState: EditorState, givenDataset?: Dataset) => {
    const dataset = catalogue ? findLexicalDataset(catalogue, givenDataset) : undefined
    if (dataset?.dataset && dataset.distribution?.mediaType === "application/json") {
      const res = await updateJsonDistribution.mutateAsync({
        id: dataset.dataset?.id,
        jsonContent: JSON.stringify(editorState.toJSON()),
        distributionId: dataset.distribution?.id
      })
      setIsUpdating(false)
      if (res) {
        doRefetchOnDismount()
        return res
      }
    } else if (dataset?.dataset) {
      const res = await addJsonDistribution.mutateAsync({
        id: dataset?.dataset.id,
        jsonContent: JSON.stringify(editorState.toJSON())
      })
      setIsUpdating(false)
      if (res) {
        refetchDraftData()
        return res
      }
    }
    setIsUpdating(false)
  }, 500)
  

  const onSectionChange = useCallback(
    (editorState: EditorState, givenDataset?: Dataset) => {
      setIsUpdating(true)
      saveLexicalDistribution(editorState, givenDataset)
    },
    [saveLexicalDistribution],
  )
  
  const deleteDraft = useCatalogueDraftDeleteCommand({})

  const onDeleteDraft = useCallback(
    async () => {
      const res = await deleteDraft.mutateAsync({
        id: draftId!,
      })
      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: catalogueId! }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueGetByIdentifier", { identifier: draft?.catalogue.identifier }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
        navigate(cataloguesContributions())
      }
    },
    [draftId, catalogueId],
  )

  const deleteCatalogue = useCatalogueDeleteCommand({})
  
    const onDeleteCatalogue = useCallback(
      async () => {
        const res = await deleteCatalogue.mutateAsync({
          id: catalogueId!
        })
        if (res) {
          queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: catalogueId! }] })
          queryClient.invalidateQueries({ queryKey: ["data/catalogueGetByIdentifier", { identifier: draft?.catalogue.identifier }] })
          queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId }] })
          queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
          queryClient.invalidateQueries({ queryKey: ["data/cataloguePage"] })
          queryClient.invalidateQueries({ queryKey: ["data/catalogueRefGetTree"] })
          queryClient.invalidateQueries({ queryKey: ["data/catalogueListAvailableParents"] })
          navigate(cataloguesContributions())
        }
      },
      [catalogueId],
    )

  return {
    onSaveMetadata,
    onDeleteDraft,
    onSectionChange,
    onDeleteCatalogue,
    isUpdating
  }
}