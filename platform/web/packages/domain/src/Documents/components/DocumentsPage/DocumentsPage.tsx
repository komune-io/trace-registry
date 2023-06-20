import {DocumentsChatbot, DocumentsViewer} from "domain-components";
import {Stack} from "@mui/material";
import { useState, useMemo, useCallback } from "react";
import { FilePath, useProjectFilesQuery } from "../../api/query";
import { useParams } from "react-router-dom";

export interface DocumentsPageProps {
}

export const DocumentsPage = (/* props: DocumentsPageProps */) => {
    const {projectId} = useParams()
    const [files, setFiles] = useState<FilePath[]>([])
    const [reference, setReference] = useState<string | undefined>(undefined)
    const [quote, setQuote] = useState<{quote: string, fileName: string, pageNumber: number} | undefined>(undefined)
    

   const selectedFiles = useProjectFilesQuery(files.map((filePath) => ({id: projectId!, path: filePath})), {enabled: !!files})

   const downloadedFiles = useMemo(() => selectedFiles.data?.map((file, index) => ({name: files[index].name, file })), [selectedFiles.data, files])

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
   

   console.log(downloadedFiles)

    return (
        <Stack
            direction="row"
            position="relative"
            height="calc(100vh - 200px)"
        >
            <DocumentsViewer reference={reference} setQuote={onSetQuote} isLoading={!downloadedFiles} files={downloadedFiles}  />
            <DocumentsChatbot setReference={setReference} quote={quote} files={files} setFiles={setFiles} />
        </Stack>
    )
}
