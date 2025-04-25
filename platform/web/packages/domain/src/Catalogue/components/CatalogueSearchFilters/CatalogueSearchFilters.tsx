import { Stack } from '@mui/material'
import { SelectableChipGroup, TitleDivider } from 'components'
import { useTranslation } from 'react-i18next'
import { FacetDistribution } from '../../api'
import { useMemo } from 'react'

interface CatalogueSearchFiltersProps {
    savedState: any
    distributions?: Record<string, FacetDistribution[]>
    onChangeDistribution: (key: string) => (values: string[]) => void
}

export const CatalogueSearchFilters = (props: CatalogueSearchFiltersProps) => {
    const { distributions, onChangeDistribution, savedState } = props
    const { t } = useTranslation()

    const distributionsDisplay = useMemo(() => Object.entries(distributions ?? {}).map(([key, facets]) => (
        <SelectableChipGroup
            key={key}
            title={t(key)}
            options={facets?.map((distribution) => ({
                key: distribution.id,
                label: `${distribution.name} - ${distribution.size}`
            }))}
            values={savedState[key]}
            onChange={onChangeDistribution(key)}
        />
    )), [distributions, savedState, onChangeDistribution])

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
           {distributionsDisplay}
        </Stack>
    )
}
