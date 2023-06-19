import {Box} from "@mui/material";
import {MultiPagePdfDisplayer} from "components";
import pdf from "./pdd.pdf"
import { useElementSize } from "@mantine/hooks";


export interface DocumentsViewerProps {
}

export const DocumentsViewer = (props: DocumentsViewerProps) => {
    const {  } = props
    const { ref, width } = useElementSize();

    return (
        <Box
        ref={ref}
            bgcolor="#F0EDE6"
            flexGrow={1}
            flexBasis={0}
            sx={{
                padding: (theme) => theme.spacing(1.5),
                width: "100%",
                height: "100%",
                overflow: "auto",
                "& .pdfPage": {
                    marginBottom: "16px"
                },
                "& .mui-utz8u3" : {
                    margin: "0"
                }
            }}
        >
            <MultiPagePdfDisplayer
                files={[pdf]}
                parentWidth={width}
                />
        </Box>
    )
}
