import {CircularProgress} from "@mui/material";
import {Document, Page} from "react-pdf/dist/esm/entry.vite";
import React, {useCallback, useState} from "react";

interface PdfDisplayerProps {
    file?: string
    width : number
}

export const PdfDisplayer = (props: PdfDisplayerProps) => {
    const { file, width } = props
    const [pages, setPages] = useState<React.ReactNode[]>([])

    const onDocumentLoadSuccess = useCallback(
        () => {
            const page: React.ReactNode[] = []
            page.push(
                <Page
                    width={width}
                    key={`page_${1}`}
                    pageNumber={1}
                    className="pdfPage"
                    loading={<CircularProgress />}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                />
            )
            setPages(page)
        },
        [],
    )

    return (
        file ? (
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<CircularProgress />}
            >
                {pages}
            </Document>
        ) : (
            <CircularProgress />
        )
    )
}
