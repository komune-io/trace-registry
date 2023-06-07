import {CircularProgress} from "@mui/material";
import {Document, Page} from "react-pdf/dist/esm/entry.vite";
import {useEffect, useState} from "react";

interface PdfDisplayerProps {
    file?: string
}

export const PdfDisplayer = (props: PdfDisplayerProps) => {
    const { file } = props

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
                        <Page
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
