import { g2Config, useTheme } from '@komune-io/g2'
import { Stack } from '@mui/material'
import { ContentIllustrated, LocalTheme, useRoutesDefinition } from 'components'
import {
    CatalogueBreadcrumbs,
    useCataloguePageQuery,
    SubCatalogueList,
    Catalogue, DistributionLexicalEditor, useLexicalDistribution,
} from 'domain-components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'

interface CataloguesEntryPointProps {
    catalogue: Catalogue
}

export const CataloguesEntryPoint = (props: CataloguesEntryPointProps) => {
    const { catalogue } = props
    const { i18n } = useTranslation()
    const { cataloguesTab } = useRoutesDefinition()
    const theme = useTheme<LocalTheme>()

    const { data, ["isLoading"]: subCatalogueLoading } = useCataloguePageQuery({
        query: {
            parentIdentifier: catalogue?.identifier,
            language: i18n.language,
        }
    })
    const lexicalDistribution = useLexicalDistribution(catalogue)

    const dataDisplay = useMemo(() => data?.items.map((subCatalogue) => {
        return (
          catalogue?.identifier && <SubCatalogueList
            key={subCatalogue.id}
            catalogue={subCatalogue}
            subCatalogues={subCatalogue.catalogues}
            seeAllLink={cataloguesTab("subCatalogues", catalogue?.identifier, subCatalogue.identifier)}
            titleVariant="h4"
            parentIds={[catalogue?.identifier]}
          />
        )
    }), [data?.items, catalogue?.identifier])

    return (
        <AppPage
            title={catalogue?.title ?? ""}
            sx={{
                gap: {
                    md: 9,
                    sm: 4,
                },
                py: {
                    md: 9,
                    sm: 4,
                },
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
                <DistributionLexicalEditor readOnly {...lexicalDistribution} />
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
