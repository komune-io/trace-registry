import { useCallback, useEffect, useRef } from 'react'
import { pdfjs } from 'react-pdf'
import { LoadingPdf } from './LoadingPdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import type { PDFPageProxy } from 'pdfjs-dist';
import type { TextItem } from 'pdfjs-dist/types/src/display/api';
import { Stack } from '@mui/material'
import { CustomTextRenderer } from 'react-pdf/dist/cjs/shared/types'
import { PdfDisplayer } from '../PdfDisplayer'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString()

interface MultiFilePdfDisplayerProps {
    files?: { name: string, file: any }[]
    parentWidth: number
    reference?: string
    setQuote: (quote: string, fileName: string, pageNumber: number) => void
    isLoading?: boolean
    pagesNumberPerDocument: number[]
    onDocumentLoadSuccess: (pdf: any, docIndex: number) => void
    setPageRef:  (index: number, docName: string, ref: (HTMLCanvasElement | null)) => void

}

export const MultiFilePdfDisplayer = (props: MultiFilePdfDisplayerProps) => {
    const { files, parentWidth, reference, isLoading = false, setQuote, pagesNumberPerDocument, onDocumentLoadSuccess, setPageRef } = props

    
    const paragraphs = useRef<{ text: string, elementsIds: string[] }[]>([])



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
            {files ? (
                <Stack display="flex" flexDirection="column">
                    {files.map((document, indexDoc) => (
                        <PdfDisplayer 
                        file={document.file}
                        key={`doc_${indexDoc}`}
                        pagesNumber={pagesNumberPerDocument[indexDoc]}
                        onLoadSuccess={(pdf) => onDocumentLoadSuccess(pdf, indexDoc)}
                        parentWidth={parentWidth}
                        getPageProps={(pageNumber) => ({
                            onMouseUp: () => onSelectQuote(document.name, pageNumber),
                            onLoadSuccess: onPageLoadSuccess,
                            canvasRef: (ref) => setPageRef(pageNumber, document.name, ref),
                            customTextRenderer: addIdOnTextElement
                        })}
                        />
                    ))}
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