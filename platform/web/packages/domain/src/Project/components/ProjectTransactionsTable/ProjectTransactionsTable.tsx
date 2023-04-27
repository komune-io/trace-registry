import { Typography } from '@mui/material'
import { ColumnFactory, useTable } from '@smartb/g2'
import {StatusTag} from "@smartb/g2";

import { Row } from '@tanstack/react-table';
import { useCallback, useMemo } from "react"
import { useRoutesDefinition } from 'components'
import { OffsetPagination, OffsetTable, OffsetTableProps, PageQueryResult } from "template";
import { useTranslation } from 'react-i18next';

export interface Transaction {
    serial: string,
    date: string,
    vintage: number,
    quantity: string,
    from: string,
    to: string,
    for: string,
    type: string
}

function useProductColumn() {
    return useMemo(() => ColumnFactory<Transaction>({
        generateColumns: (generators) => ({
            id: generators.text({
                header: 'Transaction #',
                getCellProps: (registry) => ({
                    value: registry.serial
                })
            }),

            name: generators.text({
                header: 'Transaction date',
                getCellProps: (registry) => ({
                    value: registry.date,
                })
            }),

            vintage: generators.text({
                header: 'Vintage',
                getCellProps: (registry) => ({
                    value: registry.vintage?.toString()
                })
            }),


            quantity: generators.text({
                header: 'Quantity',
                getCellProps: (registry) => ({
                    value: registry.quantity
                })
            }),

            from: generators.text({
                header: 'From',
                getCellProps: (registry) => ({
                    value: registry.from
                })
            }),

            to: generators.text({
                header: 'To',
                getCellProps: (registry) => ({
                    value: registry.to
                })
            }),

            for: generators.text({
                header: 'For',
                getCellProps: (registry) => ({
                    value: registry.for
                })
            }),

            type: generators.text({
                header: 'Type',
                getCellProps: (registry) => ({
                    value: registry.type
                })
            })


        })
    }), []);
}

export interface ProjectTransactionsTableProps extends Partial<OffsetTableProps<Transaction>>{
    onOffsetChange?: (newOffset: OffsetPagination) => void
    page?: PageQueryResult<Transaction>
    pagination: OffsetPagination
    isLoading?: boolean
}

export const ProjectTransactionsTable = (props: ProjectTransactionsTableProps) => {
    const { isLoading, page, onOffsetChange, pagination, sx, ...other } = props
    const { projectsProjectIdViewTabAll } = useRoutesDefinition()
    const { t } = useTranslation()

    const columns = useProductColumn()

    const tableState = useTable({
        data: page?.items ?? [],
        columns: columns,
    })

    const getRowLink = useCallback(
        (row: Row<Transaction>) => {
            return {
                to: projectsProjectIdViewTabAll(row.original.serial)
            }
        },
        [projectsProjectIdViewTabAll],
    )


    if (!page?.items && !isLoading) return (<Typography align="center">{t("projects.noData")}</Typography>)
    return (
        <OffsetTable<Transaction>
            {...other}
            sx={{
                overflow: "unset",
                "& .statusColumn": {
                    maxWidth: "180px"
                },
                "& .typeColumn": {
                    maxWidth: "150px"
                },
                "& .AruiTable-tableHead": {
                    top: "70px",
                    background: (theme) => theme.palette.background.default + "99"
                },
                ...sx
            }}
            tableState={tableState}
            page={page}
            pagination={pagination}
            onOffsetChange={onOffsetChange}
            isLoading={isLoading}
            getRowLink={getRowLink}
        />
    )
}
