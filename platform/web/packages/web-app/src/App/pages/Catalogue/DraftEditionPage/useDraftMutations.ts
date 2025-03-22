import { FormComposableState, successHandler } from '@komune-io/g2'
import { Catalogue, CatalogueCreateCommand, CatalogueDraft, findLexicalDataset, useCatalogueDraftDeleteCommand, useCatalogueDraftSubmitCommand, useCatalogueDraftValidateCommand, useCatalogueUpdateCommand, useDatasetAddJsonDistributionCommand, useDatasetUpdateJsonDistributionCommand } from 'domain-components'
import { EditorState } from 'lexical'
import { useRef, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query';
import { useRoutesDefinition } from 'components'

interface useDraftMutationsParams {
  metadataFormState: FormComposableState
  setTab: (tab: string) => void
  catalogue?: Catalogue
  refetchDraft: () => void
  draft?: CatalogueDraft
  afterValidateNavigate?: string
}

const emptyFunction = () => { }

export const useDraftMutations = (params: useDraftMutationsParams) => {
  const { metadataFormState, setTab, catalogue, refetchDraft, afterValidateNavigate, draft } = params
  const { catalogueId, draftId } = useParams()
  const queryClient = useQueryClient()
  const editorStateRef = useRef<EditorState | undefined>(undefined)
  const navigate = useNavigate()
  const { cataloguesAll, cataloguesContributions } = useRoutesDefinition()

  const onSectionChange = useCallback(
    (editorState: EditorState) => {
      editorStateRef.current = editorState
    },
    [],
  )

  const catalogueUpdate = useCatalogueUpdateCommand({}, { successHandler: emptyFunction })

  const addJsonDistribution = useDatasetAddJsonDistributionCommand({})

  const updateJsonDistribution = useDatasetUpdateJsonDistributionCommand({})

  const onSave = useCallback(
    async (withSucessMessage: boolean = true) => {
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
          themes: metadataFormState.values.themes && catalogue?.type !== "100m-project" ? [metadataFormState.values.themes] : metadataFormState.values.themes,
          license: metadataFormState.values.license,
          accessRights: metadataFormState.values.accessRights,
          parentId: metadataFormState.values.parentId,
          location: metadataFormState.values.location,
          ownerOrganizationId: metadataFormState.values.ownerOrganizationId,
          // keeping the same values
          structure: metadataFormState.values.structure,
          hidden: metadataFormState.values.hidden,
          homepage: metadataFormState.values.homepage,
          versionNotes: metadataFormState.values.versionNotes,
          language: metadataFormState.values.language,
          id: draft?.catalogue.id!,
        },
        files: metadataFormState.values.illustration ? [{
          file: metadataFormState.values.illustration
        }] : []
      })

      const dataset = catalogue ? findLexicalDataset(catalogue) : undefined

      let lexicalUpdate: Promise<any> | undefined = undefined

      if (editorStateRef.current) {
        if (dataset && dataset.distribution.mediaType === "application/json") {
          lexicalUpdate = updateJsonDistribution.mutateAsync({
            id: dataset.dataset.id,
            jsonContent: JSON.stringify(editorStateRef.current?.toJSON()),
            distributionId: dataset.distribution.id
          })
        } else {
          const dataSetId = catalogue?.datasets?.find((dataSet) => dataSet.type === "lexical")?.id
          if (dataSetId) {
            lexicalUpdate = addJsonDistribution.mutateAsync({
              id: dataSetId,
              jsonContent: JSON.stringify(editorStateRef.current?.toJSON())
            })
          }
        }
      }

      if (lexicalUpdate) {
        const lexicalRes = await lexicalUpdate
        if (!lexicalRes) return
      }

      const res = await update

      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/datasetDownloadDistribution"] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
        refetchDraft()
        if (withSucessMessage) successHandler("draftUpdated")
        return res
      }
    },
    [metadataFormState.values, catalogueUpdate.mutateAsync, metadataFormState.values, draft, draftId, catalogue, refetchDraft, queryClient.invalidateQueries],
  )

  const validateDraft = useCatalogueDraftValidateCommand({})

  const onValidate = useCallback(
    async () => {
      const updateRes = await onSave(false)
      if (updateRes) {
        const res = await validateDraft.mutateAsync({
          id: draftId!,
        })
        if (res) {
          queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: catalogueId! }] })
          queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
          queryClient.invalidateQueries({ queryKey: ["data/cataloguePage"] })
          queryClient.invalidateQueries({ queryKey: ["data/catalogueRefGetTree"] })
          queryClient.invalidateQueries({ queryKey: ["data/catalogueListAvailableParents"] })
          navigate(afterValidateNavigate ?? cataloguesAll(catalogueId!))
        }
      }
    },
    [onSave, catalogueId, afterValidateNavigate, queryClient.invalidateQueries],
  )

  const submitDraft = useCatalogueDraftSubmitCommand({})

  const onSubmit = useCallback(
    async (reason: string) => {
      const updateRes = await onSave(false)
      if (updateRes) {
        const res = await submitDraft.mutateAsync({
          id: draftId!,
          versionNotes: reason
        })
        if (res) {
          refetchDraft()
          queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: catalogueId! }] })
          queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
          navigate(cataloguesContributions() + "?successfullContribution=true")
        }
      }
    },
    [onSave, draftId, catalogueId, queryClient.invalidateQueries],

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
    onSave,
    onDelete,
    onValidate,
    onSubmit,
    onSectionChange
  }
}
