import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CatalogueSearchQuery, useCatalogueSearchQuery } from '../../api';
import { useTranslation } from 'react-i18next';
import { keepPreviousData } from '@tanstack/react-query';
import { CatalogueSearchModule } from '../CatalogueSearchModule';
import { CatalogueGrid } from '../CatalogueGrid';
import { FixedPagination, OffsetPagination } from 'template';
import { Box } from '@mui/material';
import { useUrlSavedState } from 'components';

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

    const {changeValueCallback, onValidate, onClear, state, validatedState} = useUrlSavedState<Partial<CatalogueSearchQuery>>({ initialState: { limit: 12, offset: 0 }, writeUrl: false})

    const { data, isFetching } = useCatalogueSearchQuery({
        query: {
            ...validatedState,
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
        anchorRef.current?.scrollIntoView({behavior: "instant", block: "start"})
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
            {type === "LIST" ? <CatalogueSearchModule changeValueCallback={changeValueCallback} state={state} data={data} isFetching={isFetching} withImage onClear={onClear} onValidate={onValidate} />
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
