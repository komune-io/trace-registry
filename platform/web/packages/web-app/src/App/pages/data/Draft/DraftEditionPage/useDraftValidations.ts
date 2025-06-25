import { useCatalogueDraftSubmitCommand, useCatalogueDraftValidateCommand } from 'domain-components'
import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query';
import { useRoutesDefinition } from 'components'
import { FormComposableState } from '@komune-io/g2';

interface useDraftValidationsParams {
  refetchDraft: () => void
  afterValidateNavigate?: string
  metadataFormState: FormComposableState
  setTab: (tab: string) => void
}

export const useDraftValidations = (params: useDraftValidationsParams) => {
  const { refetchDraft, afterValidateNavigate, metadataFormState, setTab } = params
  const { catalogueId, draftId } = useParams()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { cataloguesContributions } = useRoutesDefinition()

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
      const isValide = await validateMetadata()
      if (!isValide) return
      const res = await validateDraft.mutateAsync({
        id: draftId!,
      })
      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: catalogueId! }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueGetByIdentifier", { identifier: catalogueId! }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId! }] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
        queryClient.invalidateQueries({ queryKey: ["data/cataloguePage"] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueRefGetTree"] })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueListAvailableParents"] })
        navigate(afterValidateNavigate ?? cataloguesContributions())
      }
    },
    [catalogueId, afterValidateNavigate, queryClient.invalidateQueries, validateMetadata],
  )

  const submitDraft = useCatalogueDraftSubmitCommand({})

  const onSubmit = useCallback(
    async (reason: string) => {
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
    },
    [draftId, catalogueId, queryClient.invalidateQueries],

  )

  return {
    onValidate,
    onSubmit,
    validateMetadata
  }
}
