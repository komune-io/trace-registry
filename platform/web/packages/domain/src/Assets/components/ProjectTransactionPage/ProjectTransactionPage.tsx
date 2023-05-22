import {Stack} from '@mui/material'
import {Project, ProjectTransactionInformations, Transaction} from "domain-components";

export interface ProjectTransactionPageProps {
    isLoading: boolean
    onBack: () => void
    project: Project
    transaction?: Transaction
}

export const ProjectTransactionPage = (props: ProjectTransactionPageProps) => {
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
                <ProjectTransactionInformations project={project} isLoading={isLoading} transaction={transaction} onBack={onBack}/>
                {/*<ProjectTransactionHistory isLoading={isLoading} project={project} transaction={transaction} />*/}
            </Stack>

    )
}
