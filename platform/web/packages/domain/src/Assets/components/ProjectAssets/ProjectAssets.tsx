import {Stack} from '@mui/material'
import {Header} from '@smartb/g2'
import {Fragment, useCallback, useMemo, useState} from "react";
import { Row } from '@tanstack/react-table';
import {Offset, OffsetPagination} from "template";
import {
    ProjectTransactionsTable,
    ProjectBalanceBanner,
    useTransactionsFilters,
    ProjectTransactionPage,
    useAssetPageQuery,
    Transaction
} from "domain-components";

export interface ProjectAssetsProps {
    isLoading: boolean
}

export const ProjectAssets = (props: ProjectAssetsProps) => {
    const { isLoading } = props
    const { component, setOffset, submittedFilters } = useTransactionsFilters()
    const pagination = useMemo((): OffsetPagination => ({ offset: submittedFilters.offset ?? Offset.default.offset, limit: submittedFilters.limit ?? Offset.default.limit }), [submittedFilters.offset, submittedFilters.limit])
    const transactions = useAssetPageQuery({
        query: submittedFilters
    })

    const [selectedTransaction, setTransaction] = useState<Transaction | undefined>(undefined)

    const transactionClicked = useCallback(
        (row: Row<Transaction>) => {
            setTransaction(old => old?.id === row.original.id ? undefined : row.original)
        },
        [],
    )
    const onBack= useCallback( () => {
        setTransaction(undefined)
        },[]
    )

    return (
        <Stack
            direction="row"
            position="relative"
            sx={{
                height: "calc(100vh - 200px)",
                minHeight: "fit-content",
                width: "100%"
            }}
        >
            <Stack
                direction="column"
                sx={{
                    padding: "24px",
                    width: "100%"

                }}
                gap={3}

            >
                <ProjectBalanceBanner />
                <ProjectTransactionsTable
                    header={
                        <Header
                            content={[
                                {
                                    leftPart: [
                                        <Fragment key="filters" >{component}</Fragment>
                                    ]
                                }
                            ]}
                            sx={{
                                backgroundColor: "none",
                                zIndex: 0,
                                "& .AruiHeader-leftPartContainer": {
                                    width: "100%"
                                }
                            }}
                        />
                    }
                    page={transactions.data}
                    pagination={pagination}
                    isLoading={transactions.isLoading}
                    onOffsetChange={setOffset}
                    onTransactionClick={transactionClicked}
                    selectedTransaction={selectedTransaction}
                    sx={{
                        "& .selectedRow": {
                            bgcolor: (theme) => theme.palette.primary.main + "33"
                        }
                    }}
                    onRowClicked={transactionClicked}
                />
            </Stack>
            {
                selectedTransaction ?
                    <ProjectTransactionPage isLoading={isLoading} transaction={selectedTransaction} onBack={onBack}/>
                    : ""
            }
        </Stack>
    )
}
