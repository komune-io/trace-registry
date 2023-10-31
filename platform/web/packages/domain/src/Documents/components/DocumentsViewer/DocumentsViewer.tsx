import { Box, Stack } from "@mui/material";
import { MultiFilePdfDisplayer, useMultiFilePagination } from "components";
import { useElementSize } from "@mantine/hooks";
import { DocumentsThumbnails } from "../DocumentsThumbnails";
import { DocumentsSwitch } from "../DocumentsSwitch";
import { useState, useEffect, useMemo, useCallback } from "react"



export interface DocumentsViewerProps {
    files?: { name: string, file: any }[]
    reference?: string
    setQuote: (quote: string, fileName: string, pageNumber: number) => void
    isLoading?: boolean
}

export const DocumentsViewer = (props: DocumentsViewerProps) => {
    const { files } = props

    const [displayedFile, setDisplayedFile] = useState<{ name: string, file: any } | undefined>(undefined)

    useEffect(() => {
        if (files) setDisplayedFile(files[0])
    }, [files])

    const onChangeDocument = useCallback(
        (fileName: string) => {
            setDisplayedFile(files?.find((file) => fileName === file.name))
        },
        [files],
    )


    const filesToSwitch = useMemo(() => files?.filter((file) => file.name !== displayedFile?.name).map((file) => file.name), [files, displayedFile])

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
            width="calc(100% - 550px)"
        >
            <DocumentsThumbnails file={displayedFile} isLoading={props.isLoading} goToPage={goToPage} visiblePages={visiblePages} />
            <Box
                bgcolor="#F0EDE6"
                flexGrow={1}
                flexBasis={0}
                sx={{
                    overflow: "auto",
                    position: "relative",
                    "& .pdfPage": {
                        marginBottom: "16px"
                    },
                    "& .mui-utz8u3": {
                        margin: "0"
                    }
                }}
            >
                {(filesToSwitch?.length ?? 0) >= 1 && <DocumentsSwitch
                    sx={{
                        position: "sticky",
                        top: 0,
                        zIndex: 1
                    }}
                    onClickDocument={onChangeDocument}
                    files={filesToSwitch}
                />}
                <Box
                    ref={ref}
                    sx={{
                        padding: (theme) => theme.spacing(2, 1.5),
                        width: "100%",
                    }}
                >
                    <MultiFilePdfDisplayer
                        {...props}
                        files={displayedFile ? [displayedFile] : undefined}

                        onDocumentLoadSuccess={onDocumentLoadSuccess}
                        pagesNumberPerDocument={pagesNumberPerDocument}
                        setPageRef={setPageRef}
                        parentWidth={width - 24}
                    />
                </Box>
            </Box>
        </Stack>
    )
}
