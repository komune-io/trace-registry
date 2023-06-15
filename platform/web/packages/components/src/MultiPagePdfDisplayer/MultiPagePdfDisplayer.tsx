import React, {useCallback, useState} from 'react'
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5'
import {LoadingPdf} from './LoadingPdf'
import {styled} from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

const StyledInfiniteScroll = styled(InfiniteScroll)({
    boxSizing: "border-box",
    padding: "12px 40px 0 12px"
})

interface MultiPagePdfDisplayerProps {
    file?: string
}

export const MultiPagePdfDisplayer = (props: MultiPagePdfDisplayerProps) => {
    const { file } = props

    const [numPages, setNumPages] = useState<number>(0);
    const [pages, setPages] = useState<React.ReactNode[]>([])

    const onDocumentLoadSuccess = useCallback(
        ({ numPages }: { numPages: number }) => {
            setNumPages(numPages)
            const page: React.ReactNode[] = []
            page.push(
                <Page
                    key={`page_${1}`}
                    pageNumber={1}
                    className="pdfPage"
                    loading={<LoadingPdf />}
                />
            )
            if (numPages >= 2) {
                page.push(
                    <Page
                        key={`page_${2}`}
                        pageNumber={2}
                        className="pdfPage"
                        loading={<LoadingPdf />}
                    />
                )
            }
            setPages(page)
        },
        [],
    )

    const onLoadMore = useCallback(
        () => {
            setPages(oldPages => {
                const index = oldPages.length
                const oldPagesCopy = [...oldPages]
                for (let i = 0; i < 5; i++) {
                    if (numPages < index + i + 1) break;
                    oldPagesCopy.push(
                        <Page
                            key={`page_${index + i + 1}`}
                            pageNumber={index + i + 1}
                            className="pdfPage"
                            loading={<LoadingPdf />}
                        />
                    )
                }
                return oldPagesCopy
            })
        },
        [numPages],
    )

    return (
        <StyledInfiniteScroll
            dataLength={pages.length}
            next={onLoadMore}
            hasMore={pages.length + 1 < numPages}
            loader={<LoadingPdf />}
            height={"100vh"}
            scrollThreshold={"1300px"}
            className="PdfDisplayer-infiniteScroll"
        >
            {file ? <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<LoadingPdf />}
                >
                    {pages}
                </Document>
                :
                <LoadingPdf />
            }
        </StyledInfiniteScroll>
    )
}
