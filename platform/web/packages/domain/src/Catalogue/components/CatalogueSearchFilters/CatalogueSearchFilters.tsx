import { Box, Stack, Typography } from '@mui/material'
import { CustomButton, SelectableChipGroup, TitleDivider } from 'components'
import { useTranslation } from 'react-i18next'
import { FacetDTO } from '../../api'
import { useMemo } from 'react'
import { getIn } from '@komune-io/g2'

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

    const facetsDisplay = useMemo(() => facets?.map((facets) => (
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
    )), [facets, savedState, onChangeFacet])

    const hasFilters = Object.keys(savedState).length > 2

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
            {hasFilters &&
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
                        {t("filtersCount", { count: Object.keys(savedState).length - 2 })}
                    </Typography>
                    <Box flex={1} />
                    <CustomButton
                        onClick={onClear}
                        variant="text"
                    >
                        {t("clear")}
                    </CustomButton>
                    <CustomButton
                        onClick={onValidate}
                    >
                        {t("validate")}
                    </CustomButton>
                </Stack>
            }
        </Stack>
    )
}
