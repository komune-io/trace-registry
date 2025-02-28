import { useFormComposable } from '@komune-io/g2'
import { Dialog, Stack } from '@mui/material'
import { useRoutesDefinition } from 'components'
import {
  GraphCreationheader,
  GraphDatasetForm,
  GraphForm,
  useCatalogueDraftGetQuery,
} from 'domain-components'
import { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'


export const GraphCreationPage = () => {
  const { t } = useTranslation()
  const {catalogueId, draftId, datasetId} = useParams()
  const {cataloguesCatalogueIdDraftIdEdit} = useRoutesDefinition()

  const catalogueDraftQuery = useCatalogueDraftGetQuery({
    query: {
      id: draftId! 
    },
    options: {
      enabled: !!datasetId
    }
  })

  const draft = catalogueDraftQuery.data?.item

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
        <GraphDatasetForm formState={graphFormState} />
        <GraphForm onSave={() => { return Promise.resolve() }} />
      </Stack>
    </Dialog>
  )
}
