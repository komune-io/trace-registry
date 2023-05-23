import {Stack} from '@mui/material'
import {AssetsTransactionInformations, Project, Transaction} from "domain-components";

export interface ProjectTransactionPageProps {
    isLoading: boolean
    onBack: () => void
    project: Project
    transaction?: Transaction
}

export const AssetsTransactionPage = (props: ProjectTransactionPageProps) => {
    const { isLoading, transaction, project, onBack } = props

    return (
            <Stack
                sx={{
                    position: "absolute",
                    right: "0",
                    zIndex: 6,
                    backgroundColor: "white",
                    height: "100%",
                    width: "550px",
                    padding: "24px 32px",
                    overflowY: "auto",
                    borderLeft: "1px solid #e0e0e0"
                }}
                gap={2}
            >
                <AssetsTransactionInformations project={project} isLoading={isLoading} transaction={transaction} onBack={onBack}/>
                {/*<AssetsTransactionHistory isLoading={isLoading} project={project} transaction={transaction} />*/}
            </Stack>

    )
}
