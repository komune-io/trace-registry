import { Box, Stack, Typography } from '@mui/material'
import { ThumbnailPdfDisplayer } from 'components';
import { useCallback } from 'react'
import {useElementSize} from "@mantine/hooks"

export interface DocumentsThumbnailsProps {
    visiblePages: { pageNumber: number, docName: string }[]
    file: { name: string; file: any }
    goToPage: (pageNumber: number, docName: string) => void
    isLoading?: boolean
}

export const DocumentsThumbnails = (props: DocumentsThumbnailsProps) => {
    const { visiblePages, file, isLoading, goToPage } = props

    const isVisiblePage = useCallback(
        (pageNum: number) => {
            return visiblePages.some(
                (page) => page.pageNumber === pageNum && page.docName === file.name
            )
        },
        [visiblePages, file]
    )

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
            <Box
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
                    }}
                >
                    {file.name}
                </Typography>
            </Box>
            <Box
                ref={ref}
                sx={{
                    bgcolor: "#F0EDE6",
                    padding: (theme) => theme.spacing(1),
                    flexGrow: 1
                }}
            >
                <ThumbnailPdfDisplayer
                    file={file.file}
                    isLoading={isLoading ? isLoading : false}
                    goToPage={(number) => goToPage(number, file.name)}
                    isVisiblePage={isVisiblePage}
                    width={width - 28}
                />
            </Box>
        </Stack>
    )
}
