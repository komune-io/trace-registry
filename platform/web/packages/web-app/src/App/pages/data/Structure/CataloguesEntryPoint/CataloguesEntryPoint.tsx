import { g2Config } from '@komune-io/g2'
import { Stack } from '@mui/material'
import { ContentIllustrated, useExtendedAuth, useRoutesDefinition } from 'components'
import {
    CatalogueBreadcrumbs,
    useCataloguePageQuery,
    SubCatalogueList,
    Catalogue, useLexicalDistribution, DistributionLexicalEditor,
    CreateDraftButton,
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
    const {policies} = useExtendedAuth()

    const { data, ["isLoading"]: subCatalogueLoading } = useCataloguePageQuery({
        query: {
            parentIdentifier: catalogue?.identifier,
            language: i18n.language,
        }
    })
    const lexicalDistribution = useLexicalDistribution(catalogue)
    const dataDisplay = useMemo(() => data?.items.map((subCatalogue) => {
        return (
          catalogue?.id && <SubCatalogueList
            key={subCatalogue.id}
            catalogue={subCatalogue}
            subCatalogues={subCatalogue.catalogues}
            seeAllLink={cataloguesTab("subCatalogues", catalogue?.id, subCatalogue.id)}
            titleVariant="h4"
            parentIds={[catalogue?.id]}
          />
        )
    }), [data?.items, catalogue?.id])

    return (
        <AppPage
            title={catalogue?.title ?? ""}
            sx={{
                gap: {
                    xs: 4,
                    sm: 4,
                    md: 9,
                },
                py: {
                    xs: 4,
                    sm: 4,
                    md: 9,  
                },
            }}
        >
            <CatalogueBreadcrumbs />
            <ContentIllustrated
                title={catalogue?.title ?? ""}
                description={catalogue?.description ?? ""}
                illustration={catalogue?.img ? g2Config().platform.url + catalogue?.img : undefined}
                actions={
                    <CreateDraftButton catalogue={catalogue} canCreate={policies.catalogue.canUpdate(catalogue)} />
                }
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
