import { Typography, Box } from '@mui/material'
import {
    CatalogGrid,
    CatalogueRef,
    useCatalogFilters,
    useCatalogsRouteParams,
    useCatalogueGetQuery,
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'
import { useMemo } from "react";

export interface CatalogListPageProps {
    display?: "standards" | "grid"
}

export const CatalogListPage = (props: CatalogListPageProps) => {
    const { display = "standards" } = props
    const { t } = useTranslation()

    const { ids } = useCatalogsRouteParams()

    const parentId = ids[ids.length - 1] ??  "standards"

    const { component, submittedFilters } = useCatalogFilters({
        initialValues: {
            limit: 12
        }
    })

    const catalogue = useCatalogueGetQuery({
        query: {
            identifier: parentId,
            ...submittedFilters
        },
    })


    console.log("CatalogsRouter")
    console.log(display)

    const page = useMemo(() => {
        return catalogue.data?.item?.catalogues ?? [] as CatalogueRef[]
    }, [catalogue.data?.item?.catalogues])

    return (
        <AppPage
            title={t("exploreStandards")}
            flexContent
            sx={{
                paddingBottom:"90px"
            }}
        >
            <Typography
                sx={{ maxWidth: "1000px", alignSelf: "center" }}
            >
                {catalogue?.data?.item?.description}
            </Typography>
            <Box
                sx={{
                    alignSelf: "center"
                }}
            >
                {component}
            </Box>
            <CatalogGrid items={page} isLoading={catalogue.isInitialLoading} />
        </AppPage>
    )
}
