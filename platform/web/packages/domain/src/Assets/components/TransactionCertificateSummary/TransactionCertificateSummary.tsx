import {Stack} from '@mui/material'
import {
    AssetsImpactDetails,
    AssetsTransactionDetails,
    Transaction
} from "domain-components";

export interface TransactionCertificatePageProps {
    isLoading: boolean
    transaction?: Transaction
}

export const TransactionCertificateSummary = (props: TransactionCertificatePageProps) => {
    const { isLoading, transaction } = props

    return (
            <Stack
                sx={{
                    width: "550px",
                    padding: (theme) => `0 ${theme.spacing(3)} ${theme.spacing(4)} ${theme.spacing(3)}`,
                    overflowY: "auto"
                }}
                gap={6}
            >
                <AssetsTransactionDetails isLoading={isLoading} transaction={transaction}/>
                <AssetsImpactDetails isLoading={isLoading} transaction={transaction} />
            </Stack>
    )
}
