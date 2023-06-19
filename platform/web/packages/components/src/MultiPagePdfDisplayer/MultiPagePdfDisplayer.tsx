import { useCallback, useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { LoadingPdf } from './LoadingPdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import type { PDFPageProxy } from 'pdfjs-dist';
import type { TextItem } from 'pdfjs-dist/types/src/display/api';
import { Pagination } from '@smartb/g2'
import { Box, Stack } from '@mui/material'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString()

interface MultiPagePdfDisplayerProps {
    files?: string[]
    parentWidth: number
}

export const MultiPagePdfDisplayer = (props: MultiPagePdfDisplayerProps) => {
    const { files, parentWidth } = props

    const [numPages, setNumPages] = useState(0)
    const [numTotalPages, setNumTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const paragraphs = useRef<{ text: string, elementsIds: string[] }[]>([])
    const [currentPagePagination, setCurrentPagePagination] = useState(1)
    const pageRefs = useRef<Array<HTMLDivElement | null>>([])

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

    const onPageLoadSuccess = async (page: PDFPageProxy) => {
        const textContent = await page.getTextContent()
        let lastY, paragraph = '';
        let elementsIds: string[] = [];

        for (let i = 0; i < textContent.items.length; i++) {
            let item = textContent.items[i] as TextItem;

            let itemText = item.str;
            let itemY = item.transform[5]

            paragraph += itemText + ' ';

            elementsIds.push(page.pageNumber + "-" + i)


            if (itemText.match(/[.!?]$/) || (lastY !== itemY && !item.hasEOL)) {
                paragraphs.current.push({
                    text: paragraph,
                    elementsIds
                });
                paragraph = '';
                elementsIds = []
            }
            lastY = itemY;
        }

        // Don't forget the last paragraph!
        if (paragraph !== '') {
            paragraphs.current.push({
                text: paragraph,
                elementsIds
            });
        }
        if (page.pageNumber === 39) {
            const target = paragraphs.current.find((paragraph) => paragraph.text.includes("the Southern Regional Electricity Grid of India generation mix"))
            console.log(target)
            if (target) {
                let selection = window.getSelection();
                selection?.removeAllRanges();
    
                const elements = document.querySelectorAll(target?.elementsIds.map(id => `[id='${id}']`).join(', '))
                let range = document.createRange();
                range.selectNodeContents(elements[0]);
            
                selection?.addRange(range);
                elements.forEach((element) => {
                    selection?.extend(element, element.childNodes.length)
                })
                elements[elements.length - 1].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
            }
        }
    }

    const goToPage = useCallback((pageNumber: number) => {
        setCurrentPagePagination(pageNumber)
        const pageIndex = pageNumber - 1
        if (pageIndex >= 0 && pageIndex < pageRefs.current.length) {
            const pageRef = pageRefs.current[pageIndex]
            if (pageRef) {
                pageRef.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [pageRefs])

    const onLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages)
        setNumTotalPages((prevNumTotalPages) => prevNumTotalPages + numPages)
    }

    return (
        <Stack>
            {files && (
                <Box
                    position={'absolute'}
                    display={'flex'}
                    zIndex={5}
                    margin={(theme) => theme.spacing(3)}
                    bgcolor="rgba(240, 237, 230, 0.9)"
                    padding={(theme) => theme.spacing(1)}
                    borderRadius="10px"
                >
                    <Pagination
                        page={currentPagePagination}
                        totalPage={numTotalPages}
                        onPageChange={(newPageNumber) => goToPage(newPageNumber)}
                    />
                </Box>
            )}
            {files ? (
                <Stack display="flex" flexDirection="column">
                    {Array.from({ length: files.length }, (_, indexDoc) => (
                        <Document key={`doc_${indexDoc}`} file={files[indexDoc]} onLoadSuccess={onLoadSuccess}>
                            {Array.from({ length: numPages }, (_, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                    loading={<LoadingPdf parentWidth={parentWidth} />}
                                    onLoadSuccess={onPageLoadSuccess}
                                    width={parentWidth}
                                    className="pdfPage"
                                    inputRef={(ref) => (pageRefs.current[index] = ref)}
                                />
                            ))}
                        </Document>
                    ))}
                </Stack>
            ) : (
                <LoadingPdf parentWidth={parentWidth} />
            )}
        </Stack>
    )
}