import {DocumentsChatbot, DocumentsViewer} from "domain-components";
import {Stack} from "@mui/material";
import { useState } from "react";

export interface DocumentsPageProps {
}

export const DocumentsPage = (/* props: DocumentsPageProps */) => {

    const [files, setFiles] = useState<string[]>([])

    return (
        <Stack
            direction="row"
            position="relative"
            height="calc(100vh - 200px)"
        >
            <DocumentsViewer />
            <DocumentsChatbot files={files} setFiles={setFiles} />
        </Stack>
    )
}
