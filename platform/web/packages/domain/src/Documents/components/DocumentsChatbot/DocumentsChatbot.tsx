import {DocumentsListSelector} from "domain-components";
import {Stack} from "@mui/material";
import { Tchat } from "components";

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
                flexShrink: 0,
                padding: "24px 32px",
                overflow: "auto",
                // bgcolor:"#F0EDE6"
            }}
            gap={2}
        >
            <DocumentsListSelector isLoading={isLoading} />
            <Tchat 
            sx={{
                overflow: "auto",
                width: "100%"
            }}
            />
        </Stack>
    )
}
