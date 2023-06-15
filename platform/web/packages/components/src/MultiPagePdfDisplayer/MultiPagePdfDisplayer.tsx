import {useEffect, useState} from 'react'
import {Document, Page, pdfjs} from 'react-pdf'
import {LoadingPdf} from './LoadingPdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString()
  

interface MultiPagePdfDisplayerProps {
    file?: string
    parentWidth: number
}

export const MultiPagePdfDisplayer = (props: MultiPagePdfDisplayerProps) => {
    const { file, parentWidth } = props

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
        console.log(numPages)
    }

    return (
        <>
        {file ? <Document file={file} onLoadSuccess={onLoadSuccess}>
                    {Array.from({length: currentPage}, (_, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            loading={<LoadingPdf parentWidth={parentWidth}/>}
                            width={parentWidth}
                            className="pdfPage"
                        />
                    ))}
                </Document>
                : <LoadingPdf parentWidth={parentWidth}/>
        }
        </>
    )
}
