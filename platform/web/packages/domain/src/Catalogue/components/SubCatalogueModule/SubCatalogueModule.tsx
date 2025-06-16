import { useCallback, useEffect, useMemo, useState } from 'react'
import { CatalogueSearchQuery, useCatalogueSearchQuery } from '../../api';
import { useTranslation } from 'react-i18next';
import { keepPreviousData } from '@tanstack/react-query';
import { CatalogueSearchModule } from '../CatalogueSearchModule';
import { CatalogueGrid } from '../CatalogueGrid';
import { Pagination, setIn } from '@komune-io/g2';

interface SubCatalogueModuleProps {
    parentIdentifier?: string;
    relatedInId?: string;
    type: "GRID" | "LIST" | string
    isEmpty?: (isEmpty: boolean) => void;
}

export const SubCatalogueModule = (props: SubCatalogueModuleProps) => {
    const { parentIdentifier, type, relatedInId, isEmpty } = props;
    const { i18n } = useTranslation()

    const [state, setState] = useState<Partial<CatalogueSearchQuery>>({ limit: 12, offset: 0 })

    const changeValueCallback = useCallback(
        (valueKey: keyof CatalogueSearchQuery) => (value: any) => {

            setState(old => {
                if ((typeof value === 'number' || !!value) && value.length !== 0) {
                    return setIn(old, valueKey, value)
                }
                return setIn(old, valueKey, undefined)
            })
        },
        []
    )

    const { data, isFetching } = useCatalogueSearchQuery({
        query: {
            ...state,
            parentIdentifier: parentIdentifier ? [parentIdentifier] : undefined,
            relatedInCatalogueIds: relatedInId ? { "content": [relatedInId] } : undefined,
            language: i18n.language
        },
        options: {
            placeholderData: keepPreviousData,
            enabled: parentIdentifier !== undefined || relatedInId !== undefined
        }
    })

    useEffect(() => {
        if (data?.items && data?.items.length === 0 && isEmpty) {
            isEmpty(true)
        }
    }, [data?.items, isEmpty])

    const currentPage: number = useMemo(() => {
        return (state.offset! / state.limit!) + 1
    }, [state.offset, state.limit])

    const total = useMemo(() => {
        if (!data?.total) return { page: undefined, items: undefined }
        return {
            page: Math.floor((data.total - 1) / state.limit!) + 1,
            items: data.total
        }
    }, [data?.total, state.limit])

    const handlePageChange = useCallback((pageNumber: number) => {
        const limit = state.limit!
        const offset = (pageNumber - 1) * limit
        changeValueCallback("limit")(limit)
        changeValueCallback("offset")(offset)
    }, [state.limit ])

    return (
        <>
            {type === "LIST" ? <CatalogueSearchModule changeValueCallback={changeValueCallback} state={state} data={data} isFetching={isFetching} withImage />
                :
                <CatalogueGrid items={data?.items} isLoading={isFetching} />}
            <Pagination
                onPageChange={handlePageChange}
                page={currentPage}
                totalPage={total.page ?? 0}
                siblingCount={1}
            />
        </>
    )
}
