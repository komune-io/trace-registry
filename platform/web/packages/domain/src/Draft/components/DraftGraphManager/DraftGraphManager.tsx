import { Paper, Stack } from '@mui/material'
import {CatalogueDraft} from '../../model'
import { useTranslation } from 'react-i18next'
import { CustomButton, CustomLinkButton, ImageCard, TitleDivider, useRoutesDefinition, useToggleState } from 'components'
import { AddCircleOutlineRounded } from '@mui/icons-material'
import { CSVUploadPopup, CsvAccordion } from '../../../Graph'
import { useCallback, useMemo } from 'react'
import { g2Config, successHandler } from '@komune-io/g2'
import { useDatasetDeleteCommand } from '../../../Catalogue'
import { useQueryClient } from '@tanstack/react-query'
import { Dataset } from '../../../Dataset'

export interface DraftGraphManagerProps {
    draft?: CatalogueDraft
    dataset: Dataset
    readOnly?: boolean
}

export const DraftGraphManager = (props: DraftGraphManagerProps) => {
    const { draft, dataset, readOnly } = props
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
                successHandler("graphDeleted")
                queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draft?.id! }] })
            }
        },
        [draft],
    )

    const graphsDisplay = useMemo(() => dataset?.datasets?.map((dataset) => {
        const configDistribution = dataset.distributions?.find((dist) => dist.mediaType === "application/json")
        const imageDistribution = dataset.distributions?.find((dist) => dist.mediaType === "image/svg+xml")

        if (!configDistribution) return
        return (
            <ImageCard
                imageUrl={g2Config().platform.url + `/data/datasetDownloadDistribution/${dataset.id}/${imageDistribution?.id}`}
                editUrl={cataloguesCatalogueIdDraftIdDatasetIdGraph(draft?.originalCatalogueId!, draft?.id!, dataset.id)}
                onDelete={() => onDelete(dataset.id)}
                label={dataset.title}
                readOnly={readOnly}
            />
        )
    }), [dataset, onDelete, readOnly])

    const csvDistributions = useMemo(() =>
        dataset?.distributions?.filter((dist) => dist.mediaType === "text/csv")
      , [dataset]
    )
    const distributionsDisplay = useMemo(() => csvDistributions?.map((distrib) => <CsvAccordion key={distrib.id} datasetId={dataset?.id!} distribution={distrib} />), [csvDistributions, dataset])

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
                        !readOnly ?
                        <CustomLinkButton
                            to={cataloguesCatalogueIdDraftIdDatasetIdGraph(draft?.originalCatalogueId!, draft?.id!)}
                            startIcon={<AddCircleOutlineRounded />}
                        >
                            {t("createAGraph")}
                        </CustomLinkButton>
                        : undefined
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
                    title={t('datasets')}
                    actions={ !readOnly ?
                        <CustomButton
                            onClick={toggle}
                            startIcon={<AddCircleOutlineRounded />}
                        >
                            {t("catalogues.uploadCsv")}
                        </CustomButton>
                        : undefined
                    }
                />
                {distributionsDisplay}
                <CSVUploadPopup
                    open={open}
                    onClose={toggle}
                    datasetId={dataset?.id ?? ""}
                />
            </Paper>
        </>
    )
}
