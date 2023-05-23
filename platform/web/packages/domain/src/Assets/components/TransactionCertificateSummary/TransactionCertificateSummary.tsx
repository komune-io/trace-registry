import {Stack} from '@mui/material'
import {
    AssetsImpactDetails,
    AssetsTransactionDetails,
    AssetsTransactionHistory,
    Project,
    Transaction
} from "domain-components";

export interface TransactionCertificatePageProps {
    isLoading: boolean
    transaction?: Transaction
    project?: Project
}

export const TransactionCertificateSummary = (props: TransactionCertificatePageProps) => {
    const { isLoading, transaction, project } = props

    return (
            <Stack
                sx={{
                    width: "550px",
                    padding: "0 24px 32px 24px",
                    overflowY: "auto"
                }}
                gap={2}
            >
                <AssetsTransactionDetails isLoading={isLoading} transaction={transaction}/>
                <AssetsImpactDetails isLoading={isLoading} project={project} />
                <AssetsTransactionHistory isLoading={isLoading} project={project} transaction={transaction} />
            </Stack>
    )
}
