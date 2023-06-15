import {DocumentsChatbot, DocumentsViewer} from "domain-components";
import {Stack} from "@mui/material";

export interface DocumentsPageProps {
    isLoading: boolean
}

export const DocumentsPage = (props: DocumentsPageProps) => {
    const { isLoading } = props

    return (
        <Stack
            direction="row"
            position="relative"
            height="calc(100vh - 200px)"
        >
            <DocumentsViewer />
            <DocumentsChatbot isLoading={isLoading} />
        </Stack>
    )
}
