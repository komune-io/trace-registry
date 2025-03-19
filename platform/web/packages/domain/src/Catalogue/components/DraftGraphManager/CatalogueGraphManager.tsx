import { Paper, Stack } from '@mui/material'
import {Catalogue} from '../../model'
import { useTranslation } from 'react-i18next'
import { ImageCard, TitleDivider, useToggleState } from 'components'
import { CSVUploadPopup } from '../CSVUploadPopup'
import { useMemo } from 'react'
import { g2Config } from '@komune-io/g2'
import { CsvAccordion } from '../CsvAccordion'

export interface CatalogueGraphManagerProps {
    catalogue?: Catalogue
}

export const CatalogueGraphManager = (props: CatalogueGraphManagerProps) => {
    const { catalogue } = props
    const { t } = useTranslation()
    const [open, _, toggle] = useToggleState()

    const graphDataset = useMemo(() => catalogue?.datasets?.find((dataset) => dataset.type === "graphs"), [catalogue])
    const graphsDisplay = useMemo(() => graphDataset?.datasets?.map((dataset) => {
        const imageDistribution = dataset.distributions?.find((dist) => dist.mediaType === "image/svg+xml")
        if (!imageDistribution) return
        return (
            <ImageCard
                imageUrl={g2Config().platform.url + `/data/datasetDownloadDistribution/${dataset.id}/${imageDistribution.id}`}
                label={dataset.title}
            />
        )
    }), [graphDataset])

    const csvDistributions = useMemo(() => graphDataset?.distributions?.filter((dist) => dist.mediaType === "text/csv"), [graphDataset])

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
