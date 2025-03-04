import { useFormComposable } from '@komune-io/g2'
import { Dialog, Stack } from '@mui/material'
import { useRoutesDefinition } from 'components'
import {
  GraphCreationheader,
  GraphDatasetForm,
  GraphForm,
  RawGraphState,
  useCatalogueDraftGetQuery,
  useDownloadDistribution,
} from 'domain-components'
import { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { useSaveGraph } from './useSaveGraph'
import { useEditGraph } from './useEditGraph'


export const GraphCreationPage = () => {
  const { t } = useTranslation()
  const { catalogueId, draftId, datasetId } = useParams()
  const { cataloguesCatalogueIdDraftIdEdit } = useRoutesDefinition()

  const navigate = useNavigate()

  const onClose = useCallback(
    () => {
      navigate(cataloguesCatalogueIdDraftIdEdit(catalogueId!, draftId!))
    },
    [navigate, catalogueId, draftId],
  )

  useEffect(() => {
    document.title = "WikiCO2 | " + t("createAGraph")
  }, [t])



  const catalogueDraftQuery = useCatalogueDraftGetQuery({
    query: {
      id: draftId!
    }
  })

  const draft = catalogueDraftQuery.data?.item

  const graphDataset = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "graphs"), [draft])

  const dataset = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "graphs")?.datasets?.find((dataset) => dataset.id === datasetId), [draft, datasetId])
  const distribution = useMemo(() => dataset?.distributions?.find((dist) => dist.mediaType === "application/json"), [dataset])

  const rawGraphStateDistrib = useDownloadDistribution<RawGraphState>("json", dataset?.id, distribution?.id)

  const initialValues = useMemo(() => {
    if (!rawGraphStateDistrib.data || !dataset) return
    return {
      title: dataset.title,
      distributionId: rawGraphStateDistrib.data.csvDistributionId
    }
  }, [rawGraphStateDistrib.data, dataset])

  const graphFormState = useFormComposable({
    isLoading: catalogueDraftQuery.isInitialLoading,
    formikConfig: {
      initialValues
    }
  })

  const { onSaveChart } = useSaveGraph({
    draft,
    graphDataset,
    graphFormState,
    onClose
  })

  const { onUpdateChart } = useEditGraph({
    draft,
    graphFormState,
    onClose,
    dataset
  })

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
          onSave={!!dataset ? onUpdateChart : onSaveChart}
          csvDistributionId={graphFormState.values.distributionId}
          graphDatasetId={graphDataset?.id}
          state={rawGraphStateDistrib.data ?? undefined}
        />
      </Stack>
    </Dialog>
  )
}
