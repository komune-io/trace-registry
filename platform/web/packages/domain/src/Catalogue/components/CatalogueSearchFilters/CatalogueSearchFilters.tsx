import { Stack } from '@mui/material'
import { SelectableChipGroup, TitleDivider } from 'components'
import { useTranslation } from 'react-i18next'
import {FacetDistribution} from '../../api'

interface CatalogueSearchFiltersProps {
    licences?: string[]
    licencesDistribution?: FacetDistribution[]
    onChangeLicenses?: (values: string[]) => void
    accesses?: string[]
    accessesDistribution?: FacetDistribution[]
    onChangeAccesses?: (values: string[]) => void
    themes?: string[]
    themesDistribution?: FacetDistribution[]
    onChangeThemes?: (values: string[]) => void
}

export const CatalogueSearchFilters = (props: CatalogueSearchFiltersProps) => {
    const { licences, onChangeLicenses, licencesDistribution = [],
      accesses, onChangeAccesses, accessesDistribution = [],
      themes, onChangeThemes, themesDistribution = []
    } = props
    const { t } = useTranslation()
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
            <SelectableChipGroup
                title={t("licence")}
                options={licencesDistribution?.map((distribution) => ({
                    key: distribution.id,
                    label: `${distribution.name} - ${distribution.size}`
                }))}
                values={licences}
                onChange={onChangeLicenses}
            />
            <SelectableChipGroup
                title={t("access")}
                options={accessesDistribution?.map((distribution) => ({
                  key: distribution.id,
                  label: `${distribution.name} - ${distribution.size}`
                }))}
                values={accesses}
                onChange={onChangeAccesses}
            />
            <SelectableChipGroup
                title={t("category")}
                options={themesDistribution.map((distribution) => ({
                  key: distribution.id,
                  label: `${distribution.name} - ${distribution.size}`
                }))}
                values={themes}
                onChange={onChangeThemes}
            />
        </Stack>
    )
}
