import { Paper, Stack, Typography } from '@mui/material'
import { CatalogueDraft } from '../../model'
import { useTranslation } from 'react-i18next'
import { Accordion, CustomButton, CustomLinkButton, ImageCard, TitleDivider, useRoutesDefinition, useToggleState } from 'components'
import { AddCircleOutlineRounded } from '@mui/icons-material'
import { CSVUploadPopup } from '../CSVUploadPopup'
import { useCallback, useMemo } from 'react'
import { g2Config } from '@komune-io/g2'
import { useDatasetDeleteCommand } from '../../api'
import { useQueryClient } from '@tanstack/react-query'

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
                draftId: draft?.id!,
                id: datasetId
            })
            if (res) {
                queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draft?.id! }] })
            }
        },
        [draft],
    )


    const graphsDisplay = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "graphs")?.datasets?.map((dataset) => {
        const imageDistribution = dataset.distributions.find((dist) => dist.mediaType === "image/svg+xml")
        if (!imageDistribution) return
        return (
            <ImageCard
                imageUrl={g2Config().platform.url + `/data/datasetDownloadDistribution/${dataset.id}/${imageDistribution.id}`}
                editUrl={cataloguesCatalogueIdDraftIdDatasetIdGraph(draft?.originalCatalogueId!, draft?.id!, dataset.id)}
                onDelete={() => onDelete(dataset.id)}
                label={dataset.title}
            />
        )
    }), [draft, onDelete])

    const csvDistributions = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "graphs")?.distributions?.filter((dist) => dist.mediaType === "text/csv"), [draft])

    console.log(csvDistributions)

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
                <Accordion
                    size='small'
                    summary={
                        <Typography
                            variant='subtitle1'
                        >
                            Relevé Fevrier 2025
                        </Typography>
                    }
                >
                </Accordion>
                <CSVUploadPopup
                    open={open}
                    onClose={toggle}
                    datasetId=""
                />
            </Paper>
        </>
    )
}
