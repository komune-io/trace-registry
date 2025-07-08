import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CatalogueSearchQuery, useCatalogueSearchQuery } from '../../api';
import { useTranslation } from 'react-i18next';
import { keepPreviousData } from '@tanstack/react-query';
import { CatalogueSearchModule } from '../CatalogueSearchModule';
import { CatalogueGrid } from '../CatalogueGrid';
import { setIn } from '@komune-io/g2';
import { FixedPagination, OffsetPagination } from 'template';
import { Box } from '@mui/material';

interface SubCatalogueModuleProps {
    parentIdentifier?: string;
    relatedInId?: string;
    type: "GRID" | "LIST" | string
    isEmpty?: (isEmpty: boolean) => void;
}

export const SubCatalogueModule = (props: SubCatalogueModuleProps) => {
    const { parentIdentifier, type, relatedInId, isEmpty } = props;
    const { i18n } = useTranslation()

    const [hasChangedPage, sethasChangedPage] = useState(false)

    const anchorRef = useRef<HTMLDivElement | null>(null)

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
     if (data?.items && !isFetching && hasChangedPage) {
        anchorRef.current?.scrollIntoView({behavior: "smooth", block: "start"})
     }
    }, [isFetching, data])
    

    useEffect(() => {
        if (data?.items && data?.items.length === 0 && isEmpty) {
            isEmpty(true)
        }
    }, [data?.items, isEmpty])

    const pagination = useMemo(() => ({
        limit: state.limit!,
        offset: state.offset!,
    }), [state.limit, state.offset])

    const handlePageChange = useCallback((newPage: OffsetPagination) => {
        changeValueCallback("limit")(newPage.limit)
        changeValueCallback("offset")(newPage.offset)
        sethasChangedPage(true) 
    }, [])

    return (
        <>
            <div ref={anchorRef} />
            {type === "LIST" ? <CatalogueSearchModule changeValueCallback={changeValueCallback} state={state} data={data} isFetching={isFetching} withImage />
                :
                <CatalogueGrid items={data?.items} isLoading={isFetching} />}
            <Box
                sx={{
                    height: "60px"
                }}
            />
            <FixedPagination
                pagination={pagination}
                page={data}
                onOffsetChange={handlePageChange}
            />
        </>
    )
}
