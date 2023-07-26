import {CircularProgress} from "@mui/material";
import {Document, Page, pdfjs} from "react-pdf";
import {useEffect, useState} from "react";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString()

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
