import { Typography } from '@mui/material'
import { Accordion } from 'components'
import { useEffect, useState } from 'react'
import { Distribution } from '../../model'
import { useCsvDownloadDistribution } from '../../api'
import { DataGrid, parseCsv } from 'raw-graph'
import { useTranslation } from 'react-i18next'

interface CsvAccordionProps {
    datasetId: string
    distribution: Distribution
}

export const CsvAccordion = (props: CsvAccordionProps) => {
    const { datasetId, distribution } = props
    const { i18n } = useTranslation()
    const [parsed, setParsed] = useState<{
        dataset: any;
        dataTypes: any;
        errors: any;
    } | undefined>(undefined)

    const csvQuery = useCsvDownloadDistribution(datasetId, distribution.id)

    const csv = csvQuery.data

    useEffect(() => {
        if (csv) {
            parseCsv(csv, i18n.language).then((res) => {
                setParsed(res)
            })
        }
    }, [csv])

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
                userDataset={parsed.dataset}
            />}
        </Accordion>
    )
}
