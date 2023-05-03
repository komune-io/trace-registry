
import {Stack} from '@mui/material'
import {Transaction} from "../ProjectTransactionsTable";
import {Project} from "../../../Project";
import {ProjectTransactionInformations} from "../ProjectTransactionInformations";
import {ProjectTransactionHistory} from "../ProjectTransactionHistory";

export interface ProjectTransactionPageProps {
    isLoading: boolean
    project?: Project
    transaction?: Transaction
}

export const ProjectTransactionPage = (props: ProjectTransactionPageProps) => {
    const { isLoading, project, transaction } = props

    return (
            <Stack
                sx={{
                    backgroundColor: "white",
                    height: "100%",
                    width: "550px",
                    padding: "24px 32px",
                    overflowY: "auto",
                    border: "1px solid black"
                }}
                gap={2}
            >

                <ProjectTransactionInformations isLoading={isLoading} transaction={transaction}  />
                <ProjectTransactionHistory isLoading={isLoading} project={project} transaction={transaction}/>
            </Stack>

    )
}
