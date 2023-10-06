import { Typography, Box } from '@mui/material'
import {CatalogGrid, CatalogueRef, useCatalogFilters, useCatalogueGetQuery} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'
import {useMemo} from "react";


export const CatalogListPage = () => {
    const { t } = useTranslation()

    const { component } = useCatalogFilters()

    const catalogue = useCatalogueGetQuery({
        query: {
            identifier: "standards"
        }
    })

    const page = useMemo(() => {
        return catalogue.data?.item?.catalogues ?? [] as CatalogueRef[]
    }, [catalogue.data?.item?.catalogues])

    return (
        <AppPage
            title={t("exploreStandards")}
            flexContent
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
            <CatalogGrid items={page} isLoading={catalogue.isInitialLoading}  />
        </AppPage>
    )
}
