import { Stack } from '@mui/material'
import { SelectableChipGroup, TitleDivider } from 'components'
import { useTranslation } from 'react-i18next'
import { useCatalogueListAvailableThemesQuery, useLicenseListQuery } from '../../api'

interface CatalogueSearchFiltersProps {
    licences?: string[]
    onChangeLicenses?: (values: string[]) => void
    accesses?: string[]
    onChangeAccesses?: (values: string[]) => void
    themes?: string[]
    onChangeThemes?: (values: string[]) => void
}

export const CatalogueSearchFilters = (props: CatalogueSearchFiltersProps) => {
    const { licences, onChangeLicenses, accesses, onChangeAccesses, themes, onChangeThemes } = props
    const { t, i18n } = useTranslation()

    const licenceList = useLicenseListQuery({
        query: {

        }
    }).data?.items

    const catalogueThemesQuery = useCatalogueListAvailableThemesQuery({
        query: {
            language: i18n.language,
            type: "100m-solution"
        },
    })


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
                options={licenceList?.map((licence) => ({
                    key: licence.id,
                    label: licence.name
                }))}
                values={licences}
                onChange={onChangeLicenses}
            />
            <SelectableChipGroup
                title={t("access")}
                options={[{
                    key: "public",
                    label: t("public")
                }, {
                    key: "private",
                    label: t("private")
                }]}
                values={accesses}
                onChange={onChangeAccesses}
            />
            <SelectableChipGroup
                title={t("category")}
                options={catalogueThemesQuery.data?.items.map((theme) => ({
                    key: theme.id,
                    label: theme.prefLabel,
                }))}
                values={themes}
                onChange={onChangeThemes}
            />
        </Stack>
    )
}
