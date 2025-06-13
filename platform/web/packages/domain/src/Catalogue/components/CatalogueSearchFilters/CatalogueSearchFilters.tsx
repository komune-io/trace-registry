import { Stack } from '@mui/material'
import { SelectableChipGroup, TitleDivider } from 'components'
import { useTranslation } from 'react-i18next'
import { FacetDTO } from '../../api'
import { useMemo } from 'react'

interface CatalogueSearchFiltersProps {
    additionalFilters?: React.ReactNode,
    savedState: any
    facets?: FacetDTO[]
    onChangeFacet: (key: string) => (values: string[]) => void
}

export const CatalogueSearchFilters = (props: CatalogueSearchFiltersProps) => {
    const { additionalFilters, facets, onChangeFacet, savedState } = props
    const { t } = useTranslation()

    const facetsDisplay = useMemo(() => facets?.map((facets) => (
        <SelectableChipGroup
            key={facets.key}
            title={facets.label}
            options={facets.values.map((value) => ({
                key: value.key,
                label: `${value.label} - ${value.count}`
            }))}
            values={savedState[facets.key]}
            onChange={onChangeFacet(facets.key)}
        />
    )), [facets, savedState, onChangeFacet])

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
        </Stack>
    )
}
