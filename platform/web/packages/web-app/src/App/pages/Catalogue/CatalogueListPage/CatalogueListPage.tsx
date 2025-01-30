import { Typography } from '@mui/material'
import { SearchFilter } from 'components'
import {
    CatalogueBreadcrumbs,
    CatalogueGrid, Catalogue,
    useCatalogueFilters,
    useCataloguePageQuery
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage, FixedPagination } from 'template'
import {useCallback} from "react"

interface CatalogueViewPageProps {
    catalogue?: Catalogue
    isLoading: boolean
}

export const CatalogueListPage = (props: CatalogueViewPageProps) => {
    const { catalogue, isLoading } = props
    const { t, i18n } = useTranslation()

    const { submittedFilters, setOffset, setAdditionalFilter } = useCatalogueFilters({
        initialValues: {
            limit: 12
        }
    })
    const {data, isInitialLoading}  = useCataloguePageQuery({
        query: {
            language: i18n.language,
            parentIdentifier: catalogue?.identifier,
            ...submittedFilters
        },
        options: {
            enabled: catalogue?.identifier !== undefined
        }
    })

    const onSearch = useCallback(
      (value: string) => {
        setAdditionalFilter("title", value)
      },
      [setAdditionalFilter],
    )

    const title =
        catalogue?.type === "methodologies" ?
            t("exploreMethodologies") : catalogue?.type === "programs"
                ? t("explorePrograms") : t("exploreStandards")

    return (
        <AppPage
            title={title}
            sx={{
                paddingBottom:"90px"
            }}
        >
            <CatalogueBreadcrumbs />
            <Typography
                sx={{ maxWidth: "900px", alignSelf: "center" }}
            >
                {t("catalogues.presentation")}
            </Typography>
            <SearchFilter rootProps={{
                sx: {
                    alignSelf: "center"
                }
            }} 
            placeholder={t("search")} 
            onSearch={onSearch}
             />
            <CatalogueGrid items={data?.items} isLoading={isLoading} />
            <FixedPagination pagination={submittedFilters} page={data} isLoading={isInitialLoading} onOffsetChange={setOffset} />
        </AppPage>
    )
}