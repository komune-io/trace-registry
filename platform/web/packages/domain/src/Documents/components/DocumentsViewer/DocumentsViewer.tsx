import {Stack} from "@mui/material";
import {MultiPagePdfDisplayer} from "components";
import pdf from "./pdd.pdf"


export interface DocumentsViewerProps {
}

export const DocumentsViewer = (props: DocumentsViewerProps) => {
    const {  } = props

    return (
        <Stack
            bgcolor="#F0EDE6"
            flexGrow={1}
            flexBasis={0}
            sx={{
                "& .pdfPage" : {
                    padding: "12px 40px 0 12px"
                },
                width: "100%"
            }}
        >
            <MultiPagePdfDisplayer
                file={pdf}
                />
        </Stack>
    )
}
