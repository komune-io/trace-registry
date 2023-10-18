import { DocumentsChatbot, DocumentsList, DocumentsViewer } from "domain-components";
import { Stack } from "@mui/material";
import { useState, useMemo, useCallback, useEffect } from "react";
import { FilePath, useProjectFilesQuery } from "../../api/query";
import { useParams, useSearchParams } from "react-router-dom";
import { RowSelectionState } from '@tanstack/react-table';
import qs from 'qs';

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
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
    const [searchParams, setSearchParams] = useSearchParams()
    const [isPreviewMode, setPreviewMode] = useState(searchParams.toString() === '' ? false : true) 

    const fileList = files
    useEffect(() => {
        fileList && fileList.length > 0 && selectFiles([fileList[0]])
    }, [fileList])

    const isAnyFileSlected = () => {
        return Object.values(rowSelection).length > 0;
    }   

    const viewSelectedDocuments = useCallback(() => {
        if(!isPreviewMode) {
            setSearchParams(qs.stringify({ files: selectedFiles.map(file => file.objectId).join(',') }));
        }else {
            setSearchParams()
            setRowSelection({})
        }
        setPreviewMode(isPreviewMode => !isPreviewMode)
    }, [selectedFiles, isPreviewMode])

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

    const onRowClicked = useCallback(() => {

    }, [])
        
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
            {
                isPreviewMode 
                ? <DocumentsViewer reference={reference} setQuote={onSetQuote} isLoading={!filteredDownloadedFiles || filteredDownloadedFiles.length === 0} files={filteredDownloadedFiles} />
                : <DocumentsList page={selectedFiles} onRowClicked={onRowClicked} rowSelection={rowSelection} onRowSelectionChange={setRowSelection}/>
            }
            <DocumentsChatbot 
                removeQuote={removeQuote} 
                setReference={setReference} 
                quote={quote} 
                selectedFiles={selectedFiles} 
                allFiles={fileList}
                setFiles={selectFiles} 
                viewSelectedDocuments={viewSelectedDocuments} 
                disabled={!isAnyFileSlected()}
                isPreviewMode={isPreviewMode}
            />
        </Stack>
    )
}
