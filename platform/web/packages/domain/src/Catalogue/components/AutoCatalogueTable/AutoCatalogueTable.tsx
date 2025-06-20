import { Typography } from '@mui/material'
import { TableComposable, useTableComposable } from '@komune-io/g2'
import { Catalogue, CatalogueRef } from '../../model'
import { Row, OnChangeFn, RowSelectionState } from '@tanstack/react-table'
import { useCallback } from "react"
import { useRoutesDefinition } from 'components'
import { OffsetPagination, OffsetTable, OffsetTableProps, PageQueryResult } from "template"
import { useTranslation } from 'react-i18next'
import { catalogueTableColumns } from '../CatalogueTableCells'

export interface AutoCatalogueTableProps extends Partial<OffsetTableProps<Catalogue | CatalogueRef>> {
    onOffsetChange?: (newOffset: OffsetPagination) => void
    page?: PageQueryResult<Catalogue | CatalogueRef>
    pagination?: OffsetPagination
    isLoading?: boolean
    rowSelection?: RowSelectionState
    onRowSelectionChange?: OnChangeFn<RowSelectionState>
    tableComposable?: TableComposable<Catalogue | CatalogueRef>
}

export const AutoCatalogueTable = (props: AutoCatalogueTableProps) => {
    const {
        rowSelection,
        onRowSelectionChange,
        isLoading,
        page,
        onOffsetChange,
        pagination,
        sx,
        header,
        tableComposable,
        ...other
    } = props
    const { cataloguesAll } = useRoutesDefinition()
    const { t } = useTranslation()

    const tableState = useTableComposable<Catalogue | CatalogueRef>({
        tableComposable,
        extendingColumns: catalogueTableColumns,
        data: page?.items ?? [],
        state: {
            rowSelection
        },
        enableRowSelection: !!onRowSelectionChange,
        onRowSelectionChange: onRowSelectionChange,
        getRowId: (row) => row.id
    })

    const getRowLink = useCallback(
        (row: Row<Catalogue | CatalogueRef>) => {
            return {
                to: cataloguesAll(row.original.identifier),
            }
        },
        [cataloguesAll],
    )

    return (
        <>
            {((!page?.items || page?.items.length === 0) && !isLoading) ?
                <>
                    {header}
                    <Typography align="center" sx={{ marginTop: "32px" }}>{t("catalogues.noData")}</Typography>
                </>
                :
                <OffsetTable<Catalogue | CatalogueRef>
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
