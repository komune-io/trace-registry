import {MergeMuiElementProps, TableV2, TableV2Props} from "@smartb/g2";
import {useCallback, useMemo} from "react";
import {Offset, OffsetPagination, PageQueryResult} from "./model";

export type OffsetTableBasicProps<DATA extends {}> = {
  page?: PageQueryResult<DATA>
  onOffsetChange?: (newPage: OffsetPagination) => void
}

export type OffsetTableProps<DATA extends {}> = MergeMuiElementProps<
  Omit<TableV2Props<DATA>, 'page' | 'totalPages' | 'handlePageChange'>,
  OffsetTableBasicProps<DATA>
>

export const OffsetTable = <Data extends {}>(props: OffsetTableProps<Data>) => {
  const {page, onOffsetChange, ...other} = props
  const pagination = useMemo(() => page?.pagination ?? Offset.default, [page?.pagination])
  const currentPage: number = useMemo(() => {
    return (pagination?.offset / pagination.limit) + 1
  }, [page?.pagination])

  const totalPage: number = useMemo(() => {
    return page ? Math.floor((page.total - 1) / pagination.limit) + 1 : 0
  }, [page?.total, pagination.limit])

  const handlePageChange = useCallback( (pageNumber: number) => {
    const limit = pagination.limit
    const offset = (pageNumber - 1) * limit
    onOffsetChange && onOffsetChange({offset: offset, limit: limit})
  }, [pagination.limit, onOffsetChange])

  // @ts-ignore
  return (<TableV2<Project>
    page={currentPage}
    totalPages={totalPage}
    handlePageChange={handlePageChange}
    {...other}
  />)
}