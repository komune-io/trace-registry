import { Typography, Box } from '@mui/material'
import { CatalogGrid, CatalogueRef, useCatalogFilters, useCatalogsRouteParams, useCatalogueGetQuery, useCataloguePageQuery } from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'
import { useMemo } from "react";
import { FixedPagination } from 'template';

export interface CatalogListPageProps {
    display?: "standards" | "grid"
}

export const CatalogListPage = (props: CatalogListPageProps) => {
    const { display = "standards" } = props
    const { t } = useTranslation()

    const { ids } = useCatalogsRouteParams()

    const parentId = display === "grid" ? ids[ids.length - 1] : undefined

    const { component, setOffset, submittedFilters } = useCatalogFilters({
        initialValues: {
            limit: 12
        }
    })

    const catalogue = useCatalogueGetQuery({
        query: {
            identifier: "standards"
        },
        options: {
            enabled: display === "standards"
        }
    })

    const cataloguePage = useCataloguePageQuery({
        query: {
            parentIdentifier: parentId,
            ...submittedFilters
        },
        options: {
            enabled: display === "grid"
        }
    })

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
            {display === "standards" ?
                <>
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
                </>
                :
                <>
                    <Box
                        sx={{
                            alignSelf: "center"
                        }}
                    >
                        {component}
                    </Box>
                    <CatalogGrid items={cataloguePage.data?.items} isLoading={cataloguePage.isInitialLoading} />
                    <FixedPagination pagination={submittedFilters} isLoading={cataloguePage.isInitialLoading} onOffsetChange={setOffset} page={cataloguePage.data} />
                </>
            }
        </AppPage>
    )
}
