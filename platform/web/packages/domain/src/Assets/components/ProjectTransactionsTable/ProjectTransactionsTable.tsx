import {Box, Divider, Typography} from '@mui/material'
import { ColumnFactory, useTable } from '@smartb/g2'
import {StatusTag} from "@smartb/g2";

import { Row } from '@tanstack/react-table';
import { useMemo } from "react"
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
    type: any;

}

function useProductColumn() {
    return useMemo(() => ColumnFactory<Transaction>({
        generateColumns: (generators) => ({
            id: generators.text({
                header: 'Transaction #',
                getCellProps: (registry) => ({
                    value: registry.serial
                }),
                className: "serialColumn"
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
                    value: registry.from,
                    /*componentProps: {
                        sx: {
                            "&:hover":{
                                fontWeight: "400"
                            }
                        }
                    }*/
                }),
                className: "adressColumn"
            }),

            to: generators.text({
                header: 'To',
                getCellProps: (registry) => ({
                    value: registry.to
                }),
                className: "adressColumn"
            }),

            for: generators.text({
                header: 'For',
                getCellProps: (registry) => ({
                    value: registry.for
                }),
                className: "adressColumn"
            }),

            type: {
                header: "Type",
                cell: ({ row }) => (
                    <StatusTag label={row.original.type}/>
                ),
                className: "typesColumn"
            }


        })
    }), []);
}

export interface ProjectTransactionsTableProps extends Partial<OffsetTableProps<Transaction>>{
    onOffsetChange?: (newOffset: OffsetPagination) => void
    page?: PageQueryResult<Transaction>
    pagination: OffsetPagination
    isLoading?: boolean
    onTransactionClick: (Transaction: Row<Transaction>) => void
}

export const ProjectTransactionsTable = (props: ProjectTransactionsTableProps) => {
    const { isLoading, page, onOffsetChange, pagination, onTransactionClick, sx, ...other } = props
    const { t } = useTranslation()

    const columns = useProductColumn()

    const tableState = useTable({
        data: page?.items ?? [],
        columns: columns,
    })


    if (!page?.items && !isLoading) return (<Typography align="center">{t("projects.noData")}</Typography>)
    return (
        <>
            <Box>
                <Typography variant="h5" >{t("projects.assets.titles.transactions")}</Typography>
                <Divider sx={{ marginTop: "8px" }} />
            </Box>

            <OffsetTable<Transaction>
                {...other}
                sx={{
                    overflow: "unset",
                    "& .adressColumn": {
                        maxWidth: "180px"
                    },"& .typesColumn": {
                        maxWidth: "180px",
                    },"& .serialColumn": {
                        maxWidth: "200px",
                    },
                    ...sx
                }}
                tableState={tableState}
                page={page}
                pagination={pagination}
                onOffsetChange={onOffsetChange}
                isLoading={isLoading}
                onRowClicked={onTransactionClick}
            />
        </>
    )
}
