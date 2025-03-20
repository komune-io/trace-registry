import { Paper, Stack } from '@mui/material'
import {CatalogueDraft} from '../../model'
import { useTranslation } from 'react-i18next'
import { CustomButton, CustomLinkButton, ImageCard, TitleDivider, useRoutesDefinition, useToggleState } from 'components'
import { AddCircleOutlineRounded } from '@mui/icons-material'
import { CSVUploadPopup } from '../CSVUploadPopup'
import { useCallback, useMemo } from 'react'
import { g2Config } from '@komune-io/g2'
import { useDatasetDeleteCommand } from '../../api'
import { useQueryClient } from '@tanstack/react-query'
import { CsvAccordion } from '../CsvAccordion'

export interface DraftGraphManagerProps {
    draft?: CatalogueDraft
}

export const DraftGraphManager = (props: DraftGraphManagerProps) => {
    const { draft } = props
    const { t } = useTranslation()
    const { cataloguesCatalogueIdDraftIdDatasetIdGraph } = useRoutesDefinition()
    const [open, _, toggle] = useToggleState()
    const queryClient = useQueryClient()

    const deleteDatasetCommand = useDatasetDeleteCommand({})

    const onDelete = useCallback(
        async (datasetId: string) => {
            const res = await deleteDatasetCommand.mutateAsync({
                id: datasetId
            })
            if (res) {
                queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draft?.id! }] })
            }
        },
        [draft],
    )

    const graphDataset = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "graphs"), [draft])
    const graphsDisplay = useMemo(() => graphDataset?.datasets?.map((dataset) => {
        const configDistribution = dataset.distributions?.find((dist) => dist.mediaType === "application/json")
        const imageDistribution = dataset.distributions?.find((dist) => dist.mediaType === "image/svg+xml")

        if (!configDistribution) return
        return (
            <ImageCard
                imageUrl={g2Config().platform.url + `/data/datasetDownloadDistribution/${dataset.id}/${imageDistribution?.id}`}
                editUrl={cataloguesCatalogueIdDraftIdDatasetIdGraph(draft?.originalCatalogueId!, draft?.id!, dataset.id)}
                onDelete={() => onDelete(dataset.id)}
                label={dataset.title}
            />
        )
    }), [graphDataset, onDelete])

    const csvDistributions = useMemo(() =>
      graphDataset?.distributions?.filter((dist) => dist.mediaType === "text/csv")
      , [graphDataset]
    )
    const distributionsDisplay = useMemo(() => csvDistributions?.map((distrib) => <CsvAccordion key={distrib.id} datasetId={graphDataset?.id!} distribution={distrib} />), [csvDistributions, graphDataset])

    return (
        <>
            <Paper
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    p: 4
                }}
            >
                <TitleDivider
                    size='h6'
                    title={t("graphs")}
                    actions={
                        <CustomLinkButton
                            to={cataloguesCatalogueIdDraftIdDatasetIdGraph(draft?.originalCatalogueId!, draft?.id!)}
                            startIcon={<AddCircleOutlineRounded />}
                        >
                            {t("createAGraph")}
                        </CustomLinkButton>
                    }
                />
                <Stack
                    direction="row"
                    gap={3}
                    flexWrap="wrap"
                    alignItems="flex-start"
                >
                    {graphsDisplay}
                </Stack>
            </Paper>
            <Paper
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    p: 4
                }}
            >
                <TitleDivider
                    size='h6'
                    title={t('co2Projects')}
                    actions={
                        <CustomButton
                            onClick={toggle}
                            startIcon={<AddCircleOutlineRounded />}
                        >
                            {t("catalogues.uploadCsv")}
                        </CustomButton>
                    }
                />
                {distributionsDisplay}
                <CSVUploadPopup
                    open={open}
                    onClose={toggle}
                    datasetId={graphDataset?.id ?? ""}
                />
            </Paper>
        </>
    )
}
