import { useFormComposable } from '@komune-io/g2'
import { Stack } from '@mui/material'
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
import { DialogPage } from 'template'


export const GraphCreationPage = () => {
  const { t } = useTranslation()
  const { catalogueId, draftId, datasetId } = useParams()
  const { cataloguesCatalogueIdDraftsDraftIdTab } = useRoutesDefinition()
  const navigate = useNavigate()

  const catalogueDraftQuery = useCatalogueDraftGetQuery({
    query: {
      id: draftId!
    }
  })

  const draft = catalogueDraftQuery.data?.item

  const graphDataset = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "graphs"), [draft])

  const dataset = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "graphs")?.datasets?.find((dataset) => dataset.id === datasetId), [draft, datasetId])
  const distribution = useMemo(() => dataset?.distributions?.find((dist) => dist.mediaType === "application/json"), [dataset])

  const goBackUrl = cataloguesCatalogueIdDraftsDraftIdTab(catalogueId!, draftId!, graphDataset?.id!)

  const onClose = useCallback(
    () => {
      navigate(goBackUrl)
    },
    [navigate, catalogueId, draftId, graphDataset, goBackUrl],
  )

  const title = datasetId ? t("editAGraph") : t("createAGraph")

  useEffect(() => {
    document.title = "WikiCO2 | " + title
  }, [t, title])

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
    <DialogPage
      goBackUrl={goBackUrl}
      sx={{
        "& .MuiDialog-paper": {
          flexDirection: "column",
          alignItems: "center",
        }
      }}
    >
      <GraphCreationheader title={title} goBackUrl={goBackUrl} />
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
    </DialogPage>
  )
}
