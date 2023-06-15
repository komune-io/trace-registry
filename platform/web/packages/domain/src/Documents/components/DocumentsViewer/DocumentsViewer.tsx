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
            flexBasis={1}
            sx={{

                "& .react-pdf__Page__annotations": {
                    display: "none"
                },
                "& .react-pdf__Page__textContent": {
                    display: "none"
                },
                "& .react-pdf__Page__canvas" : {
                    minWidth: '100%',
                    height: "100% ! important",
                    paddingBottom: "12px"
                }
            }}
        >
            <MultiPagePdfDisplayer
                file={pdf}
                />
        </Stack>
    )
}
