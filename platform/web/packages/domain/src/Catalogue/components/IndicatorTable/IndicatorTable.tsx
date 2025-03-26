import { EditRounded } from '@mui/icons-material'
import { iconPack } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton, Stack } from '@mui/material'
import { G2ColumnDef, TableCellText, TableV2, useTable } from '@komune-io/g2'
import { InformationConcept } from '../../model'

export interface IndicatorTableProps {
    data: InformationConcept[]
}

export const IndicatorTable = (props: IndicatorTableProps) => {
    const { data } = props
    const { t } = useTranslation()

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
        cell: (/* {row} */) => (
            <Stack
                direction="row"
                alignItems="center"
            >
                <IconButton>
                    <EditRounded />
                </IconButton>
                <IconButton>
                    {iconPack.trash}
                </IconButton>
            </Stack>
        )
    }], [t])

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
