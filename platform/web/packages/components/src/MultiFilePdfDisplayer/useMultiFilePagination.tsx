import { useCallback, useRef, useState, useEffect } from 'react'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import type { PDFDocumentProxy } from 'pdfjs-dist'

export const useMultiFilePagination = (files?: { name: string, file: any }[]) => {
    const [pagesCount, setPagesCount] = useState<{ totalPages: number, pagesNumberPerDocument: number[] }>({
        totalPages: 0,
        pagesNumberPerDocument: [],
    })
    const pageRefs = useRef<Record<string, HTMLCanvasElement>>({})
    const [visiblePages, setVisiblePages] = useState<{pageNumber: number, docName: string}[]>([])

    useEffect(() => {
        setPagesCount({
            totalPages: 0,
            pagesNumberPerDocument: []
        })
        pageRefs.current = {}
    }, [files])


    const goToPage = useCallback((pageNumber: number, docName: string) => {
        const pageRef = pageRefs.current[`${docName}-${pageNumber}`]
        if (pageRef) {
            pageRef.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

    const onDocumentLoadSuccess = useCallback(
        (pdf: PDFDocumentProxy, docIndex: number) => {
            setPagesCount(old => {
                const copy = [...old.pagesNumberPerDocument]
                copy[docIndex] = pdf.numPages
                return {
                    totalPages: old.totalPages + pdf.numPages,
                    pagesNumberPerDocument: copy
                }
            })
        },
        [],
    )

    const setPageRef = useCallback(
        (pageNumber: number, docName: string, ref: HTMLCanvasElement | null) => {
            if (ref) {
                pageRefs.current[`${docName}-${pageNumber}`] = ref
                
                const observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        var visibilityRatio = entry.intersectionRatio * 100
                      if (visibilityRatio > 45 ) {
                        setVisiblePages(old => {
                            if (old.find((page) => page.docName === docName && page.pageNumber === pageNumber)) return old
                            return [...old, {docName, pageNumber}]
                        })
                      } else {
                        setVisiblePages(old => {
                            if (old.find((page) => page.docName === docName && page.pageNumber === pageNumber)) {
                                return old.filter((page) => page.docName !== docName || page.pageNumber !== pageNumber)
                            }
                            return old
                        })
                      }
                    });
                  }, {threshold: 0.5})
                  observer.observe(ref)
            }
        },
        [pagesCount],
    )


    return {
        totalPages: pagesCount.totalPages,
        pagesNumberPerDocument: pagesCount.pagesNumberPerDocument,
        pageRefs,
        goToPage,
        onDocumentLoadSuccess,
        setPageRef,
        visiblePages
    }
}
