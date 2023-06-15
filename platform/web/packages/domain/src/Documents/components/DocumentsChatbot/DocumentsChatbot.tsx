import {DocumentsListSelector} from "domain-components";
import {Stack} from "@mui/material";

export interface DocumentsChatbotProps {
    isLoading : boolean
}

export const DocumentsChatbot = (props: DocumentsChatbotProps) => {
    const { isLoading } = props

    return (
        <Stack
            sx={{
                height: "100%",
                width: "550px",
                padding: "24px 32px",
                overflowY: "auto"
            }}
            gap={2}
        >
            <DocumentsListSelector isLoading={isLoading} />
        </Stack>
    )
}
