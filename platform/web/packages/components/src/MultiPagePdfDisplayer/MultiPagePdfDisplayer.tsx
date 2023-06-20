import { useCallback, useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { LoadingPdf } from './LoadingPdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import type { PDFPageProxy } from 'pdfjs-dist';
import type { TextItem } from 'pdfjs-dist/types/src/display/api';
import { Stack } from '@mui/material'
import { useMultiFilePagination } from './useMultiFilePagination'
import { CustomTextRenderer } from 'react-pdf/dist/cjs/shared/types'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString()

interface MultiPagePdfDisplayerProps {
    files?: { name: string, file: any }[]
    parentWidth: number
    reference?: string
    setQuote: (quote: string, fileName: string, pageNumber: number) => void
    isLoading?: boolean
}

export const MultiPagePdfDisplayer = (props: MultiPagePdfDisplayerProps) => {
    const { files, parentWidth, reference, isLoading = false, setQuote } = props

    const [currentLoadingPage, setCurrentLoadingPage] = useState(1)
    const paragraphs = useRef<{ text: string, elementsIds: string[] }[]>([])

    const {
        numPages,
        setPageRef,
        onDocumentLoadSuccess,
        pagination
    } = useMultiFilePagination()

    useEffect(() => {
        const loadNextPages = () => {
            setCurrentLoadingPage((prevPage) => {
                const nextPage = prevPage + 5
                if (nextPage > numPages) {
                    return numPages
                } else {
                    return nextPage
                }
            })
        }
        if (currentLoadingPage <= numPages) {
            loadNextPages()
        }
    }, [currentLoadingPage, numPages])



    useEffect(() => {
        if (reference) {
            selectReference(paragraphs.current, reference)
        }
    }, [reference])


    const onPageLoadSuccess = useCallback(
        async (page: PDFPageProxy) => {
            const textContent = await page.getTextContent()
            let lastY, paragraph = '';
            let elementsIds: string[] = [];
            //we check and group every text on the page by pargraph and save all the elements of the paragraph
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

            if (paragraph !== '') {
                paragraphs.current.push({
                    text: paragraph,
                    elementsIds
                });
            }
        },
        [],
    )

    const onSelectQuote = useCallback(
        (fileName: string, pageNumber: number) => {
            const selectedText = window.getSelection()?.toString();
            if (selectedText) {
                setQuote(selectedText, fileName, pageNumber)
            }
        },
        [setQuote],
    )

    const addIdOnTextElement = useCallback<CustomTextRenderer>(
      (props) => `<span id="${props.pageNumber + "-" + props.itemIndex}" >${props.str}<span/>`,
      [],
    )
    


    if (isLoading) return <LoadingPdf parentWidth={parentWidth} />
    return (
        <Stack
            sx={{
                overflow: "hidden"
            }}
        >
            {files && pagination}
            {files ? (
                <Stack display="flex" flexDirection="column">
                    {files.map(((document, indexDoc) => (
                        <Document key={`doc_${indexDoc}`} file={document.file} onLoadSuccess={onDocumentLoadSuccess}>
                            {Array.from({ length: numPages }, (_, index) => (
                                <Page
                                    onMouseUp={() => onSelectQuote(document.name, index + 1)}
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                    loading={<LoadingPdf parentWidth={parentWidth} />}
                                    onLoadSuccess={onPageLoadSuccess}
                                    width={parentWidth}
                                    className="pdfPage"
                                    canvasRef={(ref) => setPageRef(index, ref)}
                                    customTextRenderer={addIdOnTextElement}
                                />
                            ))}
                        </Document>
                    ))
                    )}
                </Stack>
            ) : (
                <LoadingPdf parentWidth={parentWidth} />
            )}
        </Stack>
    )
}

const selectReference = (paragraphs: { text: string, elementsIds: string[] }[], ref: string) => {
    //we search the ref in all the paragraphs
    const target = paragraphs.find((paragraph) => paragraph.text.includes(ref))
    let selection = window.getSelection();
    if (target && selection) {
        //We select all element of the dom that compose the paragraph of the ref
        const elements = document.querySelectorAll(target.elementsIds.map(id => `[id='${id}']`).join(', '))
        if (elements[0]) {
            //we select and scroll to all the element of the paragraph
            selection.removeAllRanges()
            let range = document.createRange();
            range.selectNodeContents(elements[0]);

            selection.addRange(range);
            elements.forEach((element) => {
                selection?.extend(element, element.childNodes.length)
            })
            elements[elements.length - 1].scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
        }

    }
}