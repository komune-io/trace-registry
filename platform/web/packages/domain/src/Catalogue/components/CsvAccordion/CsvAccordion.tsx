import { Typography } from '@mui/material'
import { Accordion } from 'components'
import { Distribution } from '../../model'
import { useCsvDownloadDistribution } from '../../api'
import { DataGrid } from 'raw-graph'

interface CsvAccordionProps {
    datasetId: string
    distribution: Distribution
}

export const CsvAccordion = (props: CsvAccordionProps) => {
    const { datasetId, distribution } = props

    const {parsed} = useCsvDownloadDistribution(datasetId, distribution.id)

    return (
        <Accordion
            size='small'
            summary={
                <Typography
                    variant='subtitle1'
                >
                    {distribution.name}
                </Typography>
            }
        >
            {parsed && <DataGrid
                dataTypes={parsed.dataTypes}
                dataset={parsed.dataset}
                errors={parsed.errors}
            />}
        </Accordion>
    )
}
