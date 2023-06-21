import { DocumentsChatbot, DocumentsViewer } from "domain-components";
import { Stack } from "@mui/material";
import { useState, useMemo, useCallback, useEffect } from "react";
import { FilePath, useProjectFilesQuery, useProjectListFilesQuery } from "../../api/query";
import { useParams } from "react-router-dom";

export interface DocumentsPageProps {
}

export const DocumentsPage = (/* props: DocumentsPageProps */) => {
    const { projectId } = useParams()
    const [files, setFiles] = useState<FilePath[]>([])
    const [reference, setReference] = useState<string | undefined>(undefined)
    const [quote, setQuote] = useState<{ quote: string, fileName: string, pageNumber: number } | undefined>(undefined)

    const fileListQuery = useProjectListFilesQuery({ query: { id: projectId! } })
    const fileList = fileListQuery.data?.items

    useEffect(() => {
        fileList && setFiles([fileList[0]])
    }, [fileList])

    const downloadedFiles = useProjectFilesQuery(files.map((filePath) => ({ id: projectId!, path: filePath })), { enabled: !!files })

    const filteredDownloadedFiles = useMemo(() => downloadedFiles.data?.map((file, index) => ({ name: files[index].name, file })), [downloadedFiles.data, files])

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
            <DocumentsChatbot removeQuote={removeQuote} setReference={setReference} quote={quote} selectedFiles={files} allFiles={fileList} isLoading={fileListQuery.isLoading} setFiles={setFiles} />
        </Stack>
    )
}
