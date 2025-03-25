import { EditRounded } from '@mui/icons-material'
import { iconPack } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton, Stack } from '@mui/material'
import { G2ColumnDef, TableV2, useTable } from '@komune-io/g2'
import { Dataset } from '../../../Dataset'

export interface IndicatorTableProps {
    dataset: Dataset
}

export const IndicatorTable = (props: IndicatorTableProps) => {
    const { dataset } = props
    const { t } = useTranslation()

    const columns = useMemo((): G2ColumnDef<{}>[] => [{
        accessorKey: "type",
        header: t("type"),
        cell: (row) => (<></>)
    }, {
        accessorKey: "value",
        header: t("value"),
        cell: (row) => (<></>)
    }, {
        accessorKey: "context",
        header: t("context"),
        cell: (row) => (<></>)
    }, {
        accessorKey: "options",
        cell: (row) => (
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
        data: [],
        columns
    })

    return (
        <TableV2
            tableState={tableState}
        />
    )
}
