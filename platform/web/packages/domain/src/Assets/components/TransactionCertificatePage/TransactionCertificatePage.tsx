import {Stack} from '@mui/material'
import {
    Project,
    ProjectImpactDetails,
    ProjectTransactionHistory,
    ProjectTransactionInformations,
    Transaction
} from "domain-components";

export interface TransactionCertificatePageProps {
    isLoading: boolean
    transaction?: Transaction
    onBack: () => void
    project?: Project
}

export const TransactionCertificatePage = (props: TransactionCertificatePageProps) => {
    const { isLoading, transaction, project, onBack } = props

    return (
        <Stack
            sx={{
                position: "absolute",
                left: "0",
                backgroundColor: "white",
                height: "100%",
                width: "550px",
                padding: "24px 32px",
                overflowY: "auto",
                borderLeft: "1px solid #e0e0e0"
            }}
            gap={2}
        >
            <ProjectTransactionInformations isLoading={isLoading} transaction={transaction} onBack={onBack}/>
            <ProjectImpactDetails isLoading={isLoading} project={project} />
            <ProjectTransactionHistory isLoading={isLoading} project={project} transaction={transaction} />
        </Stack>

    )
}
