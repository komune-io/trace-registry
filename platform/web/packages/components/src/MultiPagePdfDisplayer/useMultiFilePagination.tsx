import { useCallback, useRef, useState, useEffect } from 'react'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { Pagination } from '@smartb/g2'
import { Box } from '@mui/material'

export const useMultiFilePagination = (files?: { name: string, file: any }[]) => {
    const [numPages, setNumPages] = useState(0)
    const [pagesCount, setPagesCount] = useState<{ totalPages: number, pagesNumberPerDocument: number[] }>({
        totalPages: 0,
        pagesNumberPerDocument: [],
    })
    const [currentPage, setCurrentPage] = useState(1)
    const pageRefs = useRef<HTMLCanvasElement[]>([])

    useEffect(() => {
        setPagesCount({
            totalPages: 0,
            pagesNumberPerDocument: []
        })
        setCurrentPage(1)
        pageRefs.current = []
    }, [files])


    const goToPage = useCallback((pageNumber: number) => {
        setCurrentPage(pageNumber)
        const pageIndex = pageNumber - 1
        if (pageIndex >= 0 && pageIndex < pageRefs.current.length) {
            const pageRef = pageRefs.current[pageIndex]
            if (pageRef) {
                pageRef.scrollIntoView({ behavior: 'smooth' })
            }
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
        (index: number, docIndex: number, ref: HTMLCanvasElement | null) => {
            if (ref) {
                let startingIndex = 0
                for (let i = 0; i < docIndex; i++) {
                    startingIndex += pagesCount.pagesNumberPerDocument[i] ?? 0
                }
                pageRefs.current[(startingIndex + index)] = ref
            }
        },
      [pagesCount],
    )

    return {
        pagination: <Box
            position={'absolute'}
            display={'flex'}
            zIndex={5}
            margin={(theme) => theme.spacing(3)}
            bgcolor="rgba(240, 237, 230, 0.9)"
            padding={(theme) => theme.spacing(1)}
            borderRadius="10px"
        >
            <Pagination
                page={currentPage}
                totalPage={pagesCount.totalPages}
                onPageChange={(newPageNumber) => goToPage(newPageNumber)}
            />
        </Box>,
        numPages,
        setNumPages,
        currentPage,
        setCurrentPage,
        totalPages: pagesCount.totalPages,
        pagesNumberPerDocument: pagesCount.pagesNumberPerDocument,
        pageRefs,
        goToPage,
        onDocumentLoadSuccess,
        setPageRef
    }
}
