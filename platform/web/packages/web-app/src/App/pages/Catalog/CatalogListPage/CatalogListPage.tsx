import { Typography, Box } from '@mui/material'
import {CatalogGrid, CatalogueRef, useCatalogFilters, useCatalogueGetQuery} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'
import { FixedPagination } from 'template/src/OffsetTable/FixedPagination'
import {useMemo} from "react";


export const CatalogListPage = () => {
    const { t } = useTranslation()

    const { component, submittedFilters,setOffset } = useCatalogFilters()

    // const cataloguePage = useCataloguePageQuery({
    //     query: {
    //         ...submittedFilters
    //     }
    // })
    const catalogue = useCatalogueGetQuery({
        query: {
            identifier: "standards"
        }
    })
    const cataloguePage = catalogue.data?.item?.catalogues ?? [] as CatalogueRef[]
    const page = useMemo(() => ({
        items: cataloguePage ?? [],
        total: cataloguePage.length
      }), [cataloguePage])

    return (
        <AppPage
            title={t("exploreStandards")}
            flexContent
        >
            <Typography
                sx={{ maxWidth: "1000px", alignSelf: "center" }}
            >
                {t("catalogs.exploreDetails")}
            </Typography>
            <Box
                sx={{
                    alignSelf: "center"
                }}
            >
                {component}
            </Box>
            <CatalogGrid items={cataloguePage} isLoading={catalogue.isInitialLoading}  />
            <FixedPagination pagination={submittedFilters} page={page} isLoading={catalogue.isInitialLoading} onOffsetChange={setOffset} />
        </AppPage>
    )
}
