import { Box, CircularProgress, Stack, Typography } from "@mui/material"
import { Document, pdfjs, Thumbnail } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import { useCallback, useEffect, useState } from "react"
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { ThumbnailLoading } from "./ThumbnailLoading"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString()

interface ThumbnailPdfDisplayerProps {
    file?: any
    isLoading?: boolean
    goToPage: (pageNumber: number) => void
    isVisiblePage: (pageNumber: number) => boolean
    width?: number
}

export const ThumbnailPdfDisplayer = (props: ThumbnailPdfDisplayerProps) => {
    const { isLoading, goToPage, file, isVisiblePage, width = 200 } = props

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
        <Box
            sx={{
                "& .thubnailContainer": {
                    display: "flex",
                    flexDirection: "column",
                    gap: (theme) => theme.spacing(1.5)
                }
            }}
        >
            {isLoading || !file ? (
                <Stack
                    gap={2}
                    alignItems="center"
                >
                    <ThumbnailLoading parentWidth={width} />
                    <ThumbnailLoading parentWidth={width} />
                    <ThumbnailLoading parentWidth={width} />
                    <ThumbnailLoading parentWidth={width} />
                    <ThumbnailLoading parentWidth={width} />
                </Stack>
            ) : (
                <Document loading={<CircularProgress />} className={"thubnailContainer"} file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from({ length: pageNumber }, (_, index) => (
                        <Stack
                            gap={0.5}
                            alignItems="center"
                            key={`thumbnail_${index}`}
                        >
                            <Box
                                sx={isVisiblePage(index + 1) ? {
                                    border: "#EDBA2766 solid 6px",
                                    borderRadius: "4px",
                                    boxShadow: (theme) => theme.shadows[1]
                                } : {
                                    border: "transparent solid 6px",
                                    borderRadius: "4px",
                                }
                                }
                                width="100%"
                            >
                                <Thumbnail
                                    pageNumber={index + 1}
                                    loading={<ThumbnailLoading parentWidth={width} />}
                                    width={width}
                                    className="thumbnailPdfPage"
                                    onClick={() => goToPage(index + 1)}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: "fit-content",
                                    minWidth: "17px",
                                    padding: (theme) => theme.spacing(0.25, 0.75),
                                    minHeight: "21px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor: isVisiblePage(index + 1) ? "#EDBA27" : "#8E8C8D",
                                    borderRadius: "4px"
                                }
                                }
                                width="100%"
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: "white"
                                    }}
                                >
                                    {index + 1}
                                </Typography>
                            </Box>
                        </Stack>

                    ))}
                </Document>
            )
            }
        </Box>
    )
}
