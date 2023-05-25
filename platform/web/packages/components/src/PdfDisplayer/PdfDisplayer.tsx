import {CircularProgress} from "@mui/material";
import {Document, Page} from "react-pdf/dist/esm/entry.vite";
import React, {useEffect, useState} from "react";

interface PdfDisplayerProps {
    file?: string
    AbsoluteLayer: React.ReactNode
}

export const PdfDisplayer = (props: PdfDisplayerProps) => {
    const { file, AbsoluteLayer } = props

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [file]);

    return (
        isLoading ? (
            <CircularProgress />
        ) : (
                file ? (
                    <Document
                        file={file}
                        loading={<CircularProgress />}
                    >
                        {AbsoluteLayer}
                        <Page
                            key={`page_${1}`}
                            pageNumber={1}
                            className="pdfPage"
                            loading={<CircularProgress />}
                        />
                    </Document>
                ) : (
                    <CircularProgress />
                )
        )
    )
}
