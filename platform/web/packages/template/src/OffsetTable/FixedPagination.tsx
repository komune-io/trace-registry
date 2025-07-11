import { Skeleton, Stack, Typography } from "@mui/material";
import { Pagination } from "@komune-io/g2";
import { useRef } from "react";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { OffsetTableBasicProps } from "./OffsetTable";
import { OffsetPagination } from "./model";

export const FixedPagination = <Data extends {}>(props: OffsetTableBasicProps<Data> & {isLoading?: boolean, pagination: OffsetPagination}) => {
    const { pagination, page, onOffsetChange, isLoading } = props

    const { t } = useTranslation()
    const totalItems = useRef<number | undefined>(undefined)

    const currentPage: number = useMemo(() => {
        return (pagination?.offset / pagination.limit) + 1
    }, [pagination])

    const total = useMemo(() => {
        if (page?.total && totalItems.current !== page.total) totalItems.current = page.total
        return {
            page: totalItems.current ? Math.floor((totalItems.current - 1) / pagination.limit) + 1 : undefined,
            items: totalItems.current
        }
    }, [page?.total, pagination.limit])

    const handlePageChange = useCallback((pageNumber: number) => {
        const limit = pagination.limit
        const offset = (pageNumber - 1) * limit
        onOffsetChange && onOffsetChange({ offset: offset, limit: limit })
    }, [pagination.limit, onOffsetChange])

    return (
        <Stack
            direction="row"
            alignItems="center"
            alignContent="center"
            sx={{
                background: (theme) => theme.palette.background.default + "99",
                backdropFilter: 'blur(15px)',
                zIndex: 10,
                padding: "16px 24px",
                position: "fixed",
                bottom: "0px",
                left: "0px",
                width: "100vw",
                borderTop: "1px solid #E0E0E0",
                "& .AruiPagination-root": {
                    margin: "unset"
                }
            }}
        >
            <div style={{ flexGrow: 1, flexBasis: 0 }} />
            <Stack
                direction="row"
                gap={2}
                alignItems="center"
                justifyContent="flex-end"
                sx={{
                    flexGrow: 1,
                    flexBasis: 0
                }}
            >
                {isLoading && !total.page && (
                    <Skeleton
                        sx={{
                            width: '200px',
                            height: '100%',
                            transform: 'none'
                        }}
                        animation='wave'
                        variant='text'
                    />
                )}
                {total.page && (
                    <>
                        <Typography color="text.secondary" variant="caption">{
                            t("totalItem", {
                                start: pagination.offset + 1,
                                end: Math.min(pagination.offset + pagination.limit, total.items ?? pagination.offset + pagination.limit),
                                total: total.items
                            })
                        }
                        </Typography>
                        <Pagination
                            onPageChange={handlePageChange}
                            page={currentPage}
                            totalPage={total.page}
                            siblingCount={1}
                        />
                    </>
                )}
            </Stack>
        </Stack>
    )
}
