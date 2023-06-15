import {useEffect, useState} from 'react'
import {Document, Page} from "react-pdf/dist/esm/entry.vite"
import {LoadingPdf} from "./LoadingPdf"


interface MultiPagePdfDisplayerProps {
    file?: string
}

export const MultiPagePdfDisplayer = (props: MultiPagePdfDisplayerProps) => {
    const { file } = props

    const [numPages, setNumPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const loadNextPages = () => {
            setCurrentPage((prevPage) => {
                const nextPage = prevPage + 5
                if (nextPage > numPages) {
                    return numPages
                } else {
                    return nextPage
                }
            })
        }
        if (currentPage <= numPages) {
            loadNextPages()
        }
    }, [currentPage, numPages])

    const onLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages)
    }

    return (
        <>
        {file ? <Document file={file} onLoadSuccess={onLoadSuccess}>
                    {Array.from({length: currentPage}, (_, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            loading={<LoadingPdf/>}
                            className="pdfPage"
                        />
                    ))}
                </Document>
                : <LoadingPdf/>
        }
        </>
    )
}
