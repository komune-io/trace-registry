import {Box} from "@mui/material";
import {MultiPagePdfDisplayer} from "components";

export interface DocumentsViewerProps {
}

export const DocumentsViewer = (props: DocumentsViewerProps) => {
    const {  } = props

    return (
        <Box
            bgcolor="#F0EDE6"
            sx={{
                flexGrow: 1,
                flexBasis: 0,
                height: "100%"
            }}
        >
            <MultiPagePdfDisplayer file={'file.pdf'} />
        </Box>
    )
}
