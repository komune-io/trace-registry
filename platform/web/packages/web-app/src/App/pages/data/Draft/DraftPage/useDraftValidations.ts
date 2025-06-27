import { CatalogueDraft, useCatalogueDraftRejectCommand, useCatalogueDraftSubmitCommand, useCatalogueDraftValidateCommand } from 'domain-components'
import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query';
import { useRoutesDefinition } from 'components'
import { FormComposableState } from '@komune-io/g2';

interface useDraftValidationsParams {
  draft?: CatalogueDraft
  refetchDraft: () => void
  afterValidateNavigate?: string
  metadataFormState: FormComposableState
  setTab: (tab: string) => void
}

export const useDraftValidations = (params: useDraftValidationsParams) => {
  const { draft, refetchDraft, afterValidateNavigate, metadataFormState, setTab } = params
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { cataloguesContributions, cataloguesToVerify } = useRoutesDefinition()
  const { catalogueId, draftId } = useParams<{ catalogueId: string, draftId: string }>()

  const validateDraft = useCatalogueDraftValidateCommand({})

  const validateMetadata = useCallback(
    async () => {
      const errors = await metadataFormState.validateForm()
      if (Object.keys(errors).length > 0) {
        setTab("metadata")
        return false
      }
      return true
    },
    [metadataFormState.validateForm, setTab],
  )

  const onValidate = useCallback(
    async () => {
      if (!draft || !(await validateMetadata())) return

      const res = await validateDraft.mutateAsync({
        id: draft.id,
      })
      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: draft.catalogue.id }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueGetByIdentifier", { identifier: draft?.catalogue.identifier }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draft.id }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
        queryClient.invalidateQueries({ queryKey: ["data/cataloguePage"] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueRefGetTree"] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueListAvailableParents"] })

        if (draft.catalogue.parent) {
          queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: draft.catalogue.parent.id }] })
          queryClient.invalidateQueries({ queryKey: ["data/catalogueGetByIdentifier", { identifier: draft.catalogue.parent.identifier }] })
        }

        navigate(afterValidateNavigate ?? cataloguesContributions())
      }
    },
    [draft, afterValidateNavigate, queryClient.invalidateQueries, validateMetadata, metadataFormState],
  )

  const submitDraft = useCatalogueDraftSubmitCommand({})

  const onSubmit = useCallback(
    async (reason: string) => {
      if (!draft) return
      const res = await submitDraft.mutateAsync({
        id: draft.id,
        versionNotes: reason
      })
      if (res) {
        refetchDraft()
        queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: draft.catalogue.id }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueGetByIdentifier", { id: draft.catalogue.identifier }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
        navigate(cataloguesContributions() + "?successfullContribution=true")
      }
    },
    [draft, queryClient.invalidateQueries],

  )

  const rejectDraft = useCatalogueDraftRejectCommand({})

  const onReject = useCallback(
    async (reason: string) => {
      const res = await rejectDraft.mutateAsync({
        id: draftId!,
        reason
      })
      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId }] })
        navigate(cataloguesToVerify())
      }
    },
    [catalogueId, draftId],
  )

  return {
    onValidate,
    onSubmit,
    validateMetadata,
    onReject
  }
}