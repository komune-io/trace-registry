import { useFormComposable } from '@komune-io/g2'
import { Dialog, Stack } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { useRoutesDefinition } from 'components'
import {
  GraphCreationheader,
  GraphDatasetForm,
  GraphForm,
  RawGraphState,
  useCatalogueDraftGetQuery,
  useDatasetAddJsonDistributionCommand,
  useDatasetAddMediaDistributionCommand,
  useDatasetCreateCommand,
} from 'domain-components'
import { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'


export const GraphCreationPage = () => {
  const { t } = useTranslation()
  const { catalogueId, draftId, datasetId } = useParams()
  const { cataloguesCatalogueIdDraftIdEdit } = useRoutesDefinition()

  const queryClient = useQueryClient()

  const catalogueDraftQuery = useCatalogueDraftGetQuery({
    query: {
      id: draftId!
    },
    options: {
      enabled: !!datasetId
    }
  })

  const draft = catalogueDraftQuery.data?.item

  const graphDataset = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "graphs"), [draft])

  const dataset = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "graphs")?.datasets?.find((dataset) => dataset.id === datasetId), [draft, datasetId])

  console.log(dataset)

  const navigate = useNavigate()

  const onClose = useCallback(
    () => {
      navigate(cataloguesCatalogueIdDraftIdEdit(catalogueId!, draftId!))
    },
    [navigate, catalogueId, draftId],
  )

  useEffect(() => {
    document.title = "WikiCO2 | " + t("search")
  }, [t])

  const graphFormState = useFormComposable({
    isLoading: catalogueDraftQuery.isInitialLoading
  })

  const createDataset = useDatasetCreateCommand({})
  
  const addMediaDistribution = useDatasetAddMediaDistributionCommand({})

  const addJsonDistribution = useDatasetAddJsonDistributionCommand({})

  const onSaveChart = useCallback(
    async (graphSvg: Blob, state: RawGraphState) => {
      const errors = graphFormState.validateForm()
      if (Object.keys(errors).length > 0) return
      if (!draft || !graphDataset) return 
      const createRes = await createDataset.mutateAsync({
        title: graphFormState.values.title,
        language: draft.language,
        type: "rawGraph",
        parentId: graphDataset.id
      })

      if (createRes) {
        await addJsonDistribution.mutateAsync({
          id: createRes.id,
          jsonContent: JSON.stringify({
            ...state,
            csvDistributionId: graphFormState.values.distributionId
          }),
        })
        await addMediaDistribution.mutateAsync({
          command: {
            id: createRes.id,
            mediaType: "image/svg+xml",
          },
          files: [{
            //@ts-ignore
            file: graphSvg
          }]
        })
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId! }] })
        onClose()
      }
    },
    [graphFormState.values, draft, graphDataset, onClose],
  )
  
  return (
    <Dialog
      fullScreen
      open
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          p: 3,
          pb: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3
        }
      }}
    >
      <GraphCreationheader title={t("createAGraph")} goBackUrl={cataloguesCatalogueIdDraftIdEdit(catalogueId!, draftId!)} />
      <Stack
        sx={{
          maxWidth: 1200,
          width: "100%",
          gap: 3,
          pr: 3
        }}
      >
        <GraphDatasetForm draft={draft} formState={graphFormState} />
        <GraphForm
          onSave={onSaveChart}
          csvDistributionId={graphFormState.values.distributionId}
          graphDatasetId={graphDataset?.id}
        />
      </Stack>
    </Dialog>
  )
}
