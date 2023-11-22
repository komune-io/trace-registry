import { Box, Stack, Typography } from '@mui/material'
import { ThumbnailPdfDisplayer } from 'components';
import { useCallback, useEffect, useRef } from 'react'
import {useElementSize} from "@mantine/hooks"

export interface DocumentsThumbnailsProps {
    visiblePages: { pageNumber: number, docName: string }[]
    file?: { name: string; file: any }
    goToPage: (pageNumber: number, docName: string) => void
    isLoading?: boolean
}

export const DocumentsThumbnails = (props: DocumentsThumbnailsProps) => {
    const { visiblePages, file, isLoading, goToPage } = props
    const isThumbnailClickedRef = useRef(false);
    const isVisiblePage = useCallback(
        (pageNum: number) => {
            return visiblePages.some(
                (page) => page.pageNumber === pageNum && page.docName === file?.name
            )
        },
        [visiblePages, file]
    )


    useEffect(() => {
        const scrollToVisibleThumbnail = () => {
            if(!isThumbnailClickedRef.current) {
                if(!visiblePages || visiblePages.length === 0 ||  !ref.current) return

                const pageNumber = visiblePages[0].pageNumber
                const visibleThumbnail = document.getElementById(`thumbnail-${pageNumber}`)

                if(!visibleThumbnail) return
                
                visibleThumbnail.scrollIntoView({ behavior: 'auto', block: 'center' })
            }
        }
        scrollToVisibleThumbnail();
        setTimeout(() => { isThumbnailClickedRef.current = false }, 1000);
    }, [visiblePages])


    const goToPageAndNotify = useCallback((pageNumber: number) => {
        goToPage(pageNumber, file?.name ?? "")
        isThumbnailClickedRef.current = true;
    }, [goToPage, file?.name])

    const { ref, width } = useElementSize();

    return (
        <Stack
            sx={{
                width: 220,
                height: "100%",
                overflow: "overlay",
                position: "relative"
            }}
        >
            {file?.name && <Box
                sx={{
                    bgcolor: "white",
                    padding: (theme) => theme.spacing(0.5, 1),
                    position: "sticky",
                    top: "0px",
                    zIndex: 1,
                    boxShadow: (theme) => theme.shadows[1]
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden"
                    }}
                >
                    {file?.name}
                </Typography>
            </Box>}
            <Box
                ref={ref}
                sx={{
                    bgcolor: "#F0EDE6",
                    padding: (theme) => theme.spacing(1),
                    flexGrow: 1
                }}
            >
                <ThumbnailPdfDisplayer
                    file={file?.file}
                    isLoading={isLoading ? isLoading : false}
                    goToPage={goToPageAndNotify}
                    isVisiblePage={isVisiblePage}
                    width={width - 28}
                />
            </Box>
        </Stack>
    )
}
