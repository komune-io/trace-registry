import { Typography } from '@mui/material'
import { G2Row, ProgressIndicator, TableComposable, useTableComposable } from '@komune-io/g2'
import { OnChangeFn, RowSelectionState } from '@tanstack/react-table'
import { OffsetPagination, OffsetTable, OffsetTableProps, PageQueryResult } from "template"
import { useTranslation } from 'react-i18next'
import { Certification, CertificationRef } from '../../model'
import { TableCellBadge } from './TableCellBadge'
import { LinkProps } from 'react-router-dom'

const extendingColumns = {
    progress: ProgressIndicator,
    badge: TableCellBadge
}

export interface AutoProtocolTableProps extends Partial<OffsetTableProps<Certification | CertificationRef>> {
    onOffsetChange?: (newOffset: OffsetPagination) => void
    page?: PageQueryResult<Certification | CertificationRef>
    pagination?: OffsetPagination
    isLoading?: boolean
    onRowSelectionChange?: OnChangeFn<RowSelectionState>
    tableComposable?: TableComposable<Certification | CertificationRef>
    getRowLink?: (row: G2Row<Certification | CertificationRef>) => LinkProps
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
        getRowLink,
        ...other
    } = props
    const { t } = useTranslation()

    const tableState = useTableComposable<Certification | CertificationRef>({
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
                    <Typography align="center" sx={{ marginTop: "32px" }}>{t("protocol.noData")}</Typography>
                </>
                :
                <OffsetTable<Certification | CertificationRef>
                    {...other}
                    header={header}
                    tableState={tableState}
                    page={page}
                    pagination={pagination}
                    onOffsetChange={onOffsetChange}
                    isLoading={isLoading}
                    getRowLink={getRowLink}
                />
            }
        </>
    )
}
