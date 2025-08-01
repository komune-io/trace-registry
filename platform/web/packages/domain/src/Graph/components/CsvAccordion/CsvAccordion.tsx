import { Typography } from '@mui/material'
import { Accordion } from 'components'
import { DataGrid } from 'raw-graph'
import {Distribution} from "../../../Dataset";
import { useCsvDownloadDistribution } from '../../../Catalogue';

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
