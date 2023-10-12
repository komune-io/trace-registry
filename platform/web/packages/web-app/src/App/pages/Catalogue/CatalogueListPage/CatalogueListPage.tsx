import { Typography, Box } from '@mui/material'
import {
    CatalogueBreadcrumbs,
    CatalogueGrid, Catalogue,
    useCatalogueFilters,
    useCataloguePageQuery,
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'

interface CatalogueViewPageProps {
    catalogue?: Catalogue
    isLoading: boolean
}

export const CatalogueListPage = (props: CatalogueViewPageProps) => {
    const { catalogue, isLoading } = props
    const { t } = useTranslation()

    const { component, submittedFilters } = useCatalogueFilters({
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
            <CatalogueBreadcrumbs />
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
            <CatalogueGrid items={subCatalogues.data?.items} isLoading={isLoading} />
        </AppPage>
    )
}
