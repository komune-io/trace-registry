import { Document, DocumentProps, Page, PageProps, pdfjs } from "react-pdf";
import { useCallback, useState } from "react";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { LoadingPdf } from "../MultiFilePdfDisplayer/LoadingPdf";
import type { PDFDocumentProxy } from 'pdfjs-dist'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString()

interface PdfDisplayerProps extends DocumentProps {
    parentWidth: number
    pagesNumber?: number
    getPageProps?: (pageNumber: number) => PageProps
}

export const PdfDisplayer = (props: PdfDisplayerProps) => {
    const { file, parentWidth, getPageProps, pagesNumber, onLoadSuccess,  ...other } = props

    const [numPages, setNumPages] = useState(0)

    const onDocumentLoadSuccess = useCallback(
        (pdf: PDFDocumentProxy) => {
            setNumPages(pdf.numPages)
        },
        [],
    )


    return !!file ? (
        <Document loading={<LoadingPdf parentWidth={parentWidth} />} file={file} onLoadSuccess={onLoadSuccess ?? onDocumentLoadSuccess} {...other}>
            {Array.from({ length: pagesNumber ?? numPages }, (_, index) => (
                <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    loading={<LoadingPdf parentWidth={parentWidth} />}
                    width={parentWidth}
                    className="pdfPage"
                    {...(getPageProps ? getPageProps(index + 1) : {})}
                />
            ))}
        </Document>
    ) : <LoadingPdf parentWidth={parentWidth} />
}
