import { Typography } from '@mui/material'
import { ProgressIndicator, TableComposable, useTableComposable } from '@komune-io/g2'
import { OnChangeFn, RowSelectionState } from '@tanstack/react-table'
import { OffsetPagination, OffsetTable, OffsetTableProps, PageQueryResult } from "template"
import { useTranslation } from 'react-i18next'
import { Protocol } from '../../model'
import { TableCellBadge } from './TableCellBadge'

const extendingColumns = {
  progress: ProgressIndicator,
  badge: TableCellBadge
}

export interface AutoProtocolTableProps extends Partial<OffsetTableProps<Protocol>> {
    onOffsetChange?: (newOffset: OffsetPagination) => void
    page?: PageQueryResult<Protocol>
    pagination?: OffsetPagination
    isLoading?: boolean
    onRowSelectionChange?: OnChangeFn<RowSelectionState>
    tableComposable?: TableComposable<Protocol>
}

export const AutoProtocolTable = (props: AutoProtocolTableProps) => {
    const {
        isLoading,
        page,
        onOffsetChange,
        pagination,
        sx,
        header,
        tableComposable,
        ...other
    } = props
    const { t } = useTranslation()

    const tableState = useTableComposable<Protocol>({
        tableComposable,
        extendingColumns,
        data: page?.items ?? [],
        getRowId: (row) => row.id
    })

    return (
        <>
            {((!page?.items || page?.items.length === 0) && !isLoading) ?
                <>
                    {header}
                    <Typography align="center" sx={{ marginTop: "32px" }}>{t("protocols.noData")}</Typography>
                </>
                :
                <OffsetTable<Protocol>
                    {...other}
                    header={header}
                    tableState={tableState}
                    page={page}
                    pagination={pagination}
                    onOffsetChange={onOffsetChange}
                    isLoading={isLoading}
                />
            }
        </>
    )
}
