import { Box, Stack } from "@mui/material";
import { MultiFilePdfDisplayer, useMultiFilePagination } from "components";
import pdf from "./pdd.pdf"
import { useElementSize } from "@mantine/hooks";
import { DocumentsThumbnails } from "../DocumentsThumbnails";


export interface DocumentsViewerProps {
    files?: { name: string, file: any }[]
    reference?: string
    setQuote: (quote: string, fileName: string, pageNumber: number) => void
    isLoading?: boolean
}

export const DocumentsViewer = (props: DocumentsViewerProps) => {

    const { ref, width } = useElementSize();

    const {
        pagesNumberPerDocument,
        onDocumentLoadSuccess,
        setPageRef,
        goToPage,
        visiblePages
    } = useMultiFilePagination()

    return (
        <Stack
        direction="row"
        flexGrow={1}
            flexBasis={0}
        >
            <DocumentsThumbnails file={{name: "test", file: pdf}} isLoading={props.isLoading} goToPage={goToPage} visiblePages={visiblePages}/>
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
                "& .mui-utz8u3": {
                    margin: "0"
                }
            }}
        >
            <MultiFilePdfDisplayer
            {...props}
                files={[{name: "test", file: pdf}]}
                
                onDocumentLoadSuccess={onDocumentLoadSuccess}
                pagesNumberPerDocument={pagesNumberPerDocument}
                setPageRef={setPageRef}
                parentWidth={width}
            />
        </Box>
        </Stack>
    )
}
