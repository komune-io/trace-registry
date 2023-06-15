import {DocumentsListSelector} from "domain-components";
import {Stack} from "@mui/material";
import { Chat } from "components";
import { askQuestion } from "../../api";

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
            <Chat 
            sx={{
                overflow: "auto",
                width: "100%"
            }}
            //@ts-ignore
             getResponse={askQuestion}
            />
        </Stack>
    )
}
