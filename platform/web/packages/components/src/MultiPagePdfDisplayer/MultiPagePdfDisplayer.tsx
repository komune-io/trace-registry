import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { LoadingPdf } from './LoadingPdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';
import type { TextItem } from 'pdfjs-dist/types/src/display/api';

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
    const paragraphs = useRef<{ text: string, elementsIds: string[] }[]>([])

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
        } else {
            
            
        }
    }, [currentPage, numPages])

    const onLoadSuccess = async (pdf: PDFDocumentProxy) => {
        setNumPages(pdf.numPages)
    }

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
                console.log(elements, target?.elementsIds.map(id => `[id='${id}']`).join(', '))
                let range = document.createRange();
                range.selectNodeContents(elements[0]);
            
                // Add the range to the selection
                selection?.addRange(range);
                elements.forEach((element) => {
                    selection?.extend(element, element.childNodes.length)
                    console.log(selection, element, element.childNodes.length)
                })
                elements[elements.length - 1].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
            }
        }
    }

    return (
        <>
            {file ? <Document file={file} onLoadSuccess={onLoadSuccess}>
                {Array.from({ length: currentPage }, (_, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        loading={<LoadingPdf parentWidth={parentWidth} />}
                        onLoadSuccess={onPageLoadSuccess}
                        width={parentWidth}
                        className="pdfPage"
                        customTextRenderer={(props) => `<span id="${props.pageNumber + "-" + props.itemIndex}">${props.str}</span>`}
                    />
                ))}
            </Document>
                : <LoadingPdf parentWidth={parentWidth} />
            }
        </>
    )
}