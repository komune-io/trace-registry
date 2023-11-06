import {Box, Divider, Typography} from '@mui/material'
import {ColumnFactory, useTable} from '@smartb/g2'
import {Row} from '@tanstack/react-table';
import {useCallback, useMemo} from "react"
import {OffsetPagination, OffsetTable, OffsetTableProps, PageQueryResult} from "template";
import {useTranslation} from 'react-i18next';
import {AssetsTransactionType, Transaction} from 'domain-components';
import {QuantityLabel} from "components";

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
                    value: registry.date
                })
            }),

            vintage: generators.text({
                header: t("vintage"),
                getCellProps: (registry) => ({
                    value: registry.vintage
                })
            }),

            quantity:{
                header: t("quantity"),
                cell: ({ row }) => (
                    <QuantityLabel value={row.original.quantity} />
                ),
                className: "quantityColumn"
            },

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
                    <AssetsTransactionType value={row.original.type} />
                ),
                className: "typesColumn"
            }


        })
    }), [t]);
}

export interface AssetsTransactionsTableProps extends Partial<OffsetTableProps<Transaction>>{
    onOffsetChange?: (newOffset: OffsetPagination) => void
    page?: PageQueryResult<Transaction>
    pagination: OffsetPagination
    isLoading?: boolean
    onTransactionClick?: (Transaction: Row<Transaction>) => void
    selectedTransaction?: Transaction | undefined
}

export const AssetsTransactionsTable = (props: AssetsTransactionsTableProps) => {
    const { isLoading, page, onOffsetChange, pagination, onTransactionClick, selectedTransaction, sx, header, ...other } = props
    const { t } = useTranslation()

    const columns = useTransactionColumn()

    const getRowId = useCallback(
        (row: Transaction) => row.id,
        [],
    )

    const tableState = useTable({
        data: page?.items ?? [],
        columns: columns,
        getRowId
    })
    
    const additionnalRowsProps = useMemo(() => selectedTransaction ? ({ [selectedTransaction.id]: { className: "selectedRow" } }) : undefined, [selectedTransaction])

    return (
        <>
            <Box>
                <Typography variant="h5" >{t("projects.assets.titles.transactions")}</Typography>
                <Divider sx={{ marginTop: "8px" }} />
            </Box>
            { (!page?.items && !isLoading) ?
                <>
                    {header}
                    <Typography align="center">{t("projects.assets.noData")}</Typography>
                </>
                :
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
                    header={header}
                    tableState={tableState}
                    page={page}
                    pagination={pagination}
                    onOffsetChange={onOffsetChange}
                    isLoading={isLoading}
                    onRowClicked={onTransactionClick}
                    additionalRowsProps={additionnalRowsProps}
                />
            }

        </>
    )
}
