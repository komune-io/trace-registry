import { Typography, Box } from '@mui/material'
import {
    CatalogBreadcrumbs,
    CatalogGrid, Catalogue,
    useCatalogFilters,
    useCataloguePageQuery,
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'

interface CatalogViewPageProps {
    catalogue?: Catalogue
    isLoading: boolean
}

export const CatalogListPage = (props: CatalogViewPageProps) => {
    const { catalogue, isLoading } = props
    const { t } = useTranslation()

    const { component, submittedFilters } = useCatalogFilters({
        initialValues: {
            limit: 12
        }
    })

    const subCatalogues  = useCataloguePageQuery({
        query: {
            parentIdentifier: catalogue?.identifier,
            ...submittedFilters
        },
    })

    return (
        <AppPage
            title={t("exploreStandards")}
            flexContent
            sx={{
                paddingBottom:"90px"
            }}
        >
            <CatalogBreadcrumbs />
            <Typography
                sx={{ maxWidth: "1000px", alignSelf: "center" }}
            >
                {catalogue?.description}
            </Typography>
            <Box
                sx={{
                    alignSelf: "center"
                }}
            >
                {component}
            </Box>
            <CatalogGrid items={subCatalogues.data?.items} isLoading={isLoading} />
        </AppPage>
    )
}
