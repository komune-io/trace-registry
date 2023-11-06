import { DocumentsChatbot, DocumentsList, DocumentsViewer } from "domain-components";
import { Stack } from "@mui/material";
import { useState, useMemo, useCallback } from "react";
import { FilePath, useProjectFilesQuery } from "../../api/query";
import { useParams, useSearchParams } from "react-router-dom";
import { Row, RowSelectionState } from '@tanstack/react-table';
import qs from 'qs';

export interface DocumentsPageProps {
    isLoading?: boolean
    files?: FilePath[]
}

export const DocumentsPage = (props: DocumentsPageProps) => {
    const { isLoading = false, files } = props
    const { projectId } = useParams()
    const [reference, setReference] = useState<string | undefined>(undefined)
    const [quote, setQuote] = useState<{ quote: string, fileName: string, pageNumber: number } | undefined>(undefined)
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
    const [searchParams, setSearchParams] = useSearchParams()

    const fileList = files

    const selectedFiles = useMemo(() => (qs.parse(searchParams.toString()).files ?? []) as string[], [searchParams])
    const isPreviewMode = useMemo(() => selectedFiles.length !== 0, [selectedFiles])

    const isAnyFileSlected = () => {
        return Object.values(rowSelection).length > 0;
    }

    const onRowClicked = useCallback(
        (row: Row<FilePath>) => {
            row.toggleSelected();
        },
        []
    )

    const toggleDocumentsSelection = useCallback(() => {
        if (!isPreviewMode) {
            setSearchParams(qs.stringify({ files: Object.keys(rowSelection), }, { arrayFormat: 'indices' }));
        } else {
            setSearchParams()
            setRowSelection({})
        }
    }, [rowSelection, isPreviewMode])

    const downloadedFiles = useProjectFilesQuery(
      selectedFiles?.map((fileName) => (
        { id: projectId!, path: fileList?.find((file) => file.name === fileName)! })
      ), { enabled: !!selectedFiles })   

    const filteredDownloadedFiles = useMemo(
        () => downloadedFiles.data?.map(
            (file, index) => ({ name: selectedFiles[index], file })
        ), [downloadedFiles.data])

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
            {
                isPreviewMode
                    ? <DocumentsViewer reference={reference} setQuote={onSetQuote} isLoading={!filteredDownloadedFiles || filteredDownloadedFiles.length === 0} files={filteredDownloadedFiles} />
                    //@ts-ignore
                    : <DocumentsList onRowClicked={onRowClicked} page={fileList} rowSelection={rowSelection} onRowSelectionChange={setRowSelection} isLoading={isLoading} />
            }
            <DocumentsChatbot
                removeQuote={removeQuote}
                setReference={setReference}
                quote={quote}
                selectedFiles={selectedFiles}
                toggleDocumentsSelection={toggleDocumentsSelection}
                disabled={!isAnyFileSlected()}
                isPreviewMode={isPreviewMode}
            />
        </Stack>
    )
}
