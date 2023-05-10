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
    Transaction,
    Project
} from "domain-components";

export interface ProjectAssetsProps {
    project?: Project
    isLoading: boolean
}

export const ProjectAssets = (props: ProjectAssetsProps) => {
    const { isLoading, project } = props
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
                    page={transactions.data ? transactions.data : {
                        items: [{
                            id: "SB1-1-KE-SB5801-4-2022-23924-1840-2017",
                            date: 1683187352,
                            vintage: "2023",
                            quantity: 1000000,
                            to: "0xe2f2c31bd29a8dc820ef14969abe89461",
                            type: "Transferred",
                            from: "0xe2f2c31bd29a8dc820ef14969abe479841320",
                            unit: "boubou",
                            poolId: "lala"
                        },{
                            id: "SB1-1-KE-SB5801-4-2022-23924-1840-2018",
                            date: 1683187352,
                            vintage: "2023",
                            quantity: 1000000,
                            to: "0xe2f2c31bd29a8dc820ef14969abe89461",
                            type: "Issued",
                            from: "0xe2f2c31bd29a8dc820ef14969abe479841320",
                            unit: "boubou",
                            poolId: "lala"
                        },{
                            id: "SB1-1-KE-SB5801-4-2022-23924-1840-2019",
                            date: 1683187352,
                            vintage: "2023",
                            quantity: 1000000,
                            to: "0xe2f2c31bd29a8dc820ef14969abe89461",
                            type: "Available",
                            from: "0xe2f2c31bd29a8dc820ef14969abe479841320",
                            unit: "boubou",
                            poolId: "lala"
                        },{
                            id: "SB1-1-KE-SB5801-4-2022-23924-1840-2020",
                            date: 1683187352,
                            vintage: "2023",
                            quantity: 1000000,
                            to: "0xe2f2c31bd29a8dc820ef14969abe89461",
                            type: "Offset",
                            from: "0xe2f2c31bd29a8dc820ef14969abe479841320",
                            unit: "boubou",
                            poolId: "lala"
                        }
                            ],
                        total: 10
                    }}
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
                    <ProjectTransactionPage isLoading={isLoading} project={project} transaction={selectedTransaction} onBack={onBack}/>
                    : ""
            }
        </Stack>
    )
}
