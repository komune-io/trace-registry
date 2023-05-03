
import {Stack} from '@mui/material'
import {Transaction} from "../ProjectTransactionsTable";
import {Project} from "../../../Project";
import {ProjectTransactionInformations,
        ProjectTransactionHistory} from "../";

export interface ProjectTransactionPageProps {
    isLoading: boolean
    project?: Project
    transaction?: Transaction
    onBack: () => void
}

export const ProjectTransactionPage = (props: ProjectTransactionPageProps) => {
    const { isLoading, project, transaction, onBack } = props

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
                <ProjectTransactionInformations isLoading={isLoading} transaction={transaction} onBack={onBack}/>
                <ProjectTransactionHistory isLoading={isLoading} project={project} transaction={transaction} />
            </Stack>

    )
}
