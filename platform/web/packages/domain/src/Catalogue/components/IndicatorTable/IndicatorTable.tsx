import { EditRounded } from '@mui/icons-material'
import { iconPack } from 'components'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton, Stack } from '@mui/material'
import { G2ColumnDef, TableCellText, TableV2, useTable } from '@komune-io/g2'
import { InformationConcept } from '../../model'
import { useDatasetUpdateDistributionValueCommand } from '../../api'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Dataset } from '../../../Dataset'

export interface IndicatorTableProps {
    data: InformationConcept[]
    dataset: Dataset
}

export const IndicatorTable = (props: IndicatorTableProps) => {
    const { data, dataset } = props
    const { t } = useTranslation()
    const {draftId} = useParams()
    const queryClient = useQueryClient()

    const updateDistributionValue = useDatasetUpdateDistributionValueCommand({})

    const distribution = (dataset.distributions ?? [])[0]

    const deleteIndicator = useCallback(
      async (infoConcept: InformationConcept) => {
        const res = await updateDistributionValue.mutateAsync({
            distributionId: distribution?.id!,
            id: dataset?.id!,
            informationConceptId: infoConcept.id
        })
        if (res) {
            queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId! }] })
        }
      },
      [dataset, distribution],
    )
    

    const columns = useMemo((): G2ColumnDef<InformationConcept>[] => [{
        accessorKey: "type",
        header: t("type"),
        cell: ({row}) => (<TableCellText value={row.original.name} />)
    }, {
        accessorKey: "value",
        header: t("value"),
        cell: ({row}) => (<TableCellText value={row.original.value} />)
    }, {
        accessorKey: "context",
        header: t("context"),
        cell: ({row}) => (<TableCellText value={row.original.valueDescription} />)
    }, {
        accessorKey: "options",
        cell: ({row}) => (
            <Stack
                direction="row"
                alignItems="center"
            >
                <IconButton>
                    <EditRounded />
                </IconButton>
                <IconButton
                onClick={() => deleteIndicator(row.original)}
                >
                    {iconPack.trash}
                </IconButton>
            </Stack>
        )
    }], [t, deleteIndicator])

    const tableState = useTable({
        data,
        columns
    })

    return (
        <TableV2<InformationConcept>
            tableState={tableState}
        />
    )
}
