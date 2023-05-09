import {Box, Divider, Typography} from '@mui/material'
import { ColumnFactory, useTable } from '@smartb/g2'
import {StatusTag} from "@smartb/g2";
import { Row } from '@tanstack/react-table';
import {useCallback, useMemo} from "react"
import { OffsetPagination, OffsetTable, OffsetTableProps, PageQueryResult } from "template";
import { useTranslation } from 'react-i18next';
import { Transaction } from 'domain-components';

function useTransactionColumn() {
    const { t } = useTranslation();
    return useMemo(() => ColumnFactory<Transaction>({
        generateColumns: (generators) => ({
            id: generators.text({
                header: t("transaction"),
                getCellProps: (registry) => ({
                    value: registry.id
                }),
                className: "serialColumn"
            }),

            date: generators.date({
                header: t("transactionDate"),
                getCellProps: (registry) => ({
                    date: registry.date
                })
            }),

            vintage: generators.text({
                header: t("vintage"),
                getCellProps: (registry) => ({
                    value: registry.vintage
                })
            }),


            quantity: generators.text({
                header: t("quantity"),
                getCellProps: (registry) => ({
                    value: registry.quantity?.toLocaleString() + ' tons'
                })
            }),

            from: generators.text({
                header: t("from"),
                getCellProps: (registry) => ({
                    value: registry.from
                }),
                className: "adressColumn"
            }),

            to: generators.text({
                header: t("to"),
                getCellProps: (registry) => ({
                    value: registry.to
                }),
                className: "adressColumn"
            }),

            type: {
                header: t("type"),
                cell: ({ row }) => (
                    <StatusTag label={row.original.type}/>
                ),
                className: "typesColumn"
            }


        })
    }), [t]);
}

export interface ProjectTransactionsTableProps extends Partial<OffsetTableProps<Transaction>>{
    onOffsetChange?: (newOffset: OffsetPagination) => void
    page?: PageQueryResult<Transaction>
    pagination: OffsetPagination
    isLoading?: boolean
    onTransactionClick: (Transaction: Row<Transaction>) => void
    selectedTransaction: Transaction | undefined
}

export const ProjectTransactionsTable = (props: ProjectTransactionsTableProps) => {
    const { isLoading, page, onOffsetChange, pagination, onTransactionClick, selectedTransaction, sx, ...other } = props
    const { t } = useTranslation()

    const columns = useTransactionColumn()

    const tableState = useTable({
        data: page?.items ?? [],
        columns: columns,
    })
    const getRowId = useCallback(
        (row: Transaction) => row.id,
        [],
    )
    const additionnalRowsProps = useMemo(() => selectedTransaction ? ({ [selectedTransaction.id]: { className: "selectedRow" } }) : undefined, [selectedTransaction])




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
                        "&:hover p": {
                            lineClamp: "3",
                            WebkitLineClamp: "3"
                        },
                        "& p": {
                            lineClamp: "1",
                            WebkitLineClamp: "1"
                        },
                        lineBreak: "anywhere",
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
                getRowId={getRowId}
                additionnalRowsProps={additionnalRowsProps}


            />
        </>
    )
}
