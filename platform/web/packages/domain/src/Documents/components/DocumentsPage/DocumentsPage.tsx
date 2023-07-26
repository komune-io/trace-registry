import { DocumentsChatbot, DocumentsViewer } from "domain-components";
import { Stack } from "@mui/material";
import { useState, useMemo, useCallback, useEffect } from "react";
import { FilePath, useProjectFilesQuery } from "../../api/query";
import { useParams } from "react-router-dom";

export interface DocumentsPageProps {
    isLoading?: boolean
    files?: FilePath[]
}

export const DocumentsPage = (props: DocumentsPageProps ) => {
    const { isLoading = false, files } = props
    const { projectId } = useParams()
    const [selectedFiles, selectFiles] = useState<FilePath[]>([])
    const [reference, setReference] = useState<string | undefined>(undefined)
    const [quote, setQuote] = useState<{ quote: string, fileName: string, pageNumber: number } | undefined>(undefined)


    const fileList = files

    useEffect(() => {
        fileList && fileList.length > 0 && selectFiles([fileList[0]])
    }, [fileList])

    const downloadedFiles = useProjectFilesQuery(
      selectedFiles.map((filePath) => (
        { id: projectId!, path: filePath })
      ), { enabled: !!selectedFiles })

    const filteredDownloadedFiles = useMemo(
      () => downloadedFiles.data?.map(
        (file, index) => ({ name: selectedFiles[index].name, file })
      ), [downloadedFiles.data, selectedFiles])
    const onSetQuote = useCallback(
        (quote: string, fileName: string, pageNumber: number) => {
            setQuote({
                quote,
                fileName,
                pageNumber
            })
        },
        [],
    )

    const removeQuote = useCallback(
        () => {
            setQuote(undefined)
        },
        [],
    )

    return (
        <Stack
            direction="row"
            position="relative"
            height="calc(100vh - 220px)"
        >
            <DocumentsViewer reference={reference} setQuote={onSetQuote} isLoading={!filteredDownloadedFiles || filteredDownloadedFiles.length === 0} files={filteredDownloadedFiles} />
            <DocumentsChatbot removeQuote={removeQuote} setReference={setReference} quote={quote} selectedFiles={selectedFiles} allFiles={fileList} isLoading={isLoading} setFiles={selectFiles} />
        </Stack>
    )
}
