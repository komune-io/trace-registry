import { Box, Stack, Typography } from '@mui/material'
import { CustomButton, SelectableChipGroup, TitleDivider } from 'components'
import { useTranslation } from 'react-i18next'
import { FacetDTO } from '../../api'
import { useEffect, useMemo, useState } from 'react'
import { getIn, setIn } from '@komune-io/g2'

interface CatalogueSearchFiltersProps {
    additionalFilters?: React.ReactNode,
    savedState: any
    facets?: FacetDTO[]
    onChangeFacet: (key: string) => (values: string[]) => void
    onValidate: () => void
    onClear: () => void
}

export const CatalogueSearchFilters = (props: CatalogueSearchFiltersProps) => {
    const { additionalFilters, facets, onChangeFacet, savedState, onClear, onValidate } = props
    const { t } = useTranslation()

    const [facetsMemory, setfacetsMemory] = useState(facets)

    useEffect(() => {
        if (facets && facets.length > 0) {
            setfacetsMemory(facets)
        }
    }, [facets])

    const definitiveFacets = useMemo(() => {
        if (facets && facets.length > 0) return facets;
        return facetsMemory
    }, [facetsMemory, facets])

    const facetsDisplay = useMemo(() => definitiveFacets?.map((facets) => (
        <SelectableChipGroup
            key={facets.key}
            title={facets.label}
            options={facets.values.map((value) => ({
                key: value.key,
                label: `${value.label} (${t("sheetCount", { count: value.count })})`
            }))}
            values={getIn(savedState, facets.key)}
            onChange={onChangeFacet(facets.key)}
        />
    )), [definitiveFacets, savedState, onChangeFacet])


    const filtersCount = useMemo(() => {
        let filters = { ...savedState }

        const counter = (count: number, value: any) => {
            if (Array.isArray(value)) {
                return count + value.length;
            }
            if (typeof value === 'string' && value.trim() !== '') {
                return count + 1;
            }
            return count
        }

        const facetsCount = definitiveFacets?.reduce<number>((count, facet) => {
            const value = getIn(filters, facet.key);
            filters = setIn(filters, facet.key, undefined); // Remove facet from filters to avoid counting it
            return counter(count, value);
        }, 0) ?? 0
        // Count other filters (e.g., search term, offset)
        const otherFiltersCount = Object.keys(filters).reduce((count, key) => {
            const value = filters[key];
            return counter(count, value);
        }, 0);

        return facetsCount + otherFiltersCount;
    }, [definitiveFacets, savedState])

    const hasFilters = filtersCount > 0;

    return (
        <Stack
            gap={3.5}
            sx={{
                flexGrow: 0.25,
                flexShrink: 0.75,
                maxWidth: 400,
                minWidth: 200
            }}
        >
            <TitleDivider title={t("filter")} size='subtitle1' />
            {additionalFilters}
            {facetsDisplay}
            <Stack
                alignItems="center"
                direction="row"
                width="100%"
                gap={2}
                sx={{
                    position: "sticky",
                    bottom: "-70px",
                    backgroundColor: "background.paper",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    zIndex: 11,
                    borderColor: "divider",
                    borderStyle: "solid",
                    borderWidth: "1px"
                }}
            >

                <Typography
                    variant='subtitle2'
                >
                    {t("filtersCount", { count: filtersCount })}
                </Typography>
                <Box flex={1} />
                {hasFilters && <CustomButton
                    onClick={onClear}
                    variant="text"
                >
                    {t("clear")}
                </CustomButton>}
                <CustomButton
                    onClick={onValidate}
                >
                    {t("validate")}
                </CustomButton>
            </Stack>
        </Stack>
    )
}
