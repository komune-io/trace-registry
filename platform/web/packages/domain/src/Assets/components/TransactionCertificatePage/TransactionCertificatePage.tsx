import {Stack} from '@mui/material'
import {
    Project,
    ProjectImpactDetails,
    ProjectTransactionDetails,
    ProjectTransactionHistory,
    Transaction
} from "domain-components";

export interface TransactionCertificatePageProps {
    isLoading: boolean
    transaction?: Transaction
    project?: Project
}

export const TransactionCertificatePage = (props: TransactionCertificatePageProps) => {
    const { isLoading, transaction, project } = props

    return (
            <Stack
                sx={{
                    height: "100%",
                    width: "550px",
                    padding: "0 24px 32px 24px",
                    overflowY: "auto"
                }}
                gap={2}
            >
                <ProjectTransactionDetails isLoading={isLoading} transaction={transaction}/>
                <ProjectImpactDetails isLoading={isLoading} project={project} />
                <ProjectTransactionHistory isLoading={isLoading} project={project} transaction={transaction} />
            </Stack>
    )
}
