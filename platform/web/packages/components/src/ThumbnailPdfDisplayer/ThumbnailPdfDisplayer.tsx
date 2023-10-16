import {Box, CircularProgress, Stack } from "@mui/material"
import { Document, pdfjs, Thumbnail } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import { useCallback, useEffect, useState } from "react"
import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString()

interface ThumbnailPdfDisplayerProps {
    file?: any
    isLoading: boolean
    goToPage: (pageNumber: number) => void
    isOpen?: boolean
    isVisiblePage: (pageNumber: number) => boolean
}

export const ThumbnailPdfDisplayer = (props: ThumbnailPdfDisplayerProps) => {
    const { isLoading, goToPage, file, isOpen = false, isVisiblePage } = props

    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        setPageNumber(0)
    }, [file])
    
    
    const onDocumentLoadSuccess = useCallback(
      (pdf: PDFDocumentProxy) => {
        setPageNumber(pdf.numPages)
      },
      [],
    )
    

    return (
        <Stack display={isOpen ? "flex" : "none"} flexDirection="column">
            {isLoading || !file ? (
                <CircularProgress />
            ) : (
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from({ length: pageNumber }, (_, index) => (
                        <Box
                            sx={isVisiblePage(index+1) ? {
                                border :  "#EDBA27 solid 3px",
                                marginBottom: (theme) => theme.spacing(2)
                            }: {
                                border : "none",
                                marginBottom: (theme) => theme.spacing(2)
                            }
                            }
                            width="100%"
                        >
                            <Thumbnail
                                key={`thumbnail_${index}`}
                                pageNumber={index + 1}
                                loading={<CircularProgress />}
                                width={200}
                                className="thumbnailPdfPage"
                                onClick={() => goToPage(index + 1)}
                            />
                        </Box>
                    ))}
                </Document>
            )
        }
        </Stack>
    )
}
