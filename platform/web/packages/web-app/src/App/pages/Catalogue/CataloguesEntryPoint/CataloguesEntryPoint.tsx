import { g2Config, useTheme } from '@komune-io/g2'
import { Typography, Stack } from '@mui/material'
import { ContentIllustrated, LocalTheme, useRoutesDefinition } from 'components'
import {
    CatalogueBreadcrumbs,
    useCataloguePageQuery,
    SubCatalogueList,
    CatalogueTypes, Catalogue,
} from 'domain-components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'

interface CataloguesEntryPointProps {
    catalogue: Catalogue
}

export const CataloguesEntryPoint = (props: CataloguesEntryPointProps) => {
    const { catalogue } = props
    const { t, i18n } = useTranslation()
    const { cataloguesTab } = useRoutesDefinition()
    const theme = useTheme<LocalTheme>()

    const typeFilter = catalogue?.identifier === "100m-systems" ? ["100m-system"] as CatalogueTypes[] : ["100m-sector"] as CatalogueTypes[]

    const { data, ["isLoading"]: subCatalogueLoading } = useCataloguePageQuery({
        query: {
            parentIdentifier: catalogue?.identifier,
            language: i18n.language,
            // type: typeFilter
        }
    })

    const dataDisplay = useMemo(() => data?.items.map((subCatalogue) => (
      catalogue?.identifier && <SubCatalogueList
            key={subCatalogue.id}
            catalogue={subCatalogue}
            seeAllLink={cataloguesTab("subCatalogues", catalogue?.identifier, subCatalogue.identifier)}
            titleVariant="h4"
            parentIds={[catalogue?.identifier]}
            type={typeFilter}
        />
    )), [data?.items, catalogue?.identifier, typeFilter])

    return (
        <AppPage
            title={catalogue?.title ?? ""}
            sx={{
                paddingBottom: "90px"
            }}
        >
            <CatalogueBreadcrumbs />
            <ContentIllustrated
                title={catalogue?.title ?? ""}
                description={catalogue?.description ?? ""}
                illustration={catalogue?.img ? g2Config().platform.url + catalogue?.img : undefined}
                color={ catalogue?.identifier === "100m-systems" ? theme.local?.colors.system : theme.local?.colors.sector}
            />
            <Stack
                gap={5}
            >
                <Typography
                    variant="h3"
                >
                    {/* Replace by lexical distribution*/}
                    {  `${t("explore")} ${catalogue?.title?.toLowerCase() ?? ""}`}
                </Typography>
                {subCatalogueLoading ? (
                    <>
                        <SubCatalogueList titleVariant="h4" isLoading />
                        <SubCatalogueList titleVariant="h4" isLoading />
                        <SubCatalogueList titleVariant="h4" isLoading />
                        <SubCatalogueList titleVariant="h4" isLoading />
                    </>
                ) :
                    dataDisplay
                }
            </Stack>
        </AppPage>
    )
}
