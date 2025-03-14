import { g2Config, useTheme } from '@komune-io/g2'
import { Typography, Stack } from '@mui/material'
import { ContentIllustrated, LocalTheme, useRoutesDefinition } from 'components'
import {
    CatalogueBreadcrumbs,
    useCataloguePageQuery,
    useCatalogueGetByIdentifierQuery,
    SubCatalogueList
} from 'domain-components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'

interface CataloguesEntryPointProps {
    identifier: string
}

export const CataloguesEntryPoint = (props: CataloguesEntryPointProps) => {
    const { identifier } = props
    const { t, i18n } = useTranslation()
    const { cataloguesTab } = useRoutesDefinition()
    const theme = useTheme<LocalTheme>()
    const catalogueGet = useCatalogueGetByIdentifierQuery({
        query: {
            identifier: identifier,
            language: i18n.language
        }
    })

    const catalogue = catalogueGet.data?.item

    const title = identifier === "100m-systems" ? t('systems') : t('sectors')

    const { data, ["isLoading"]: subCatalogueLoading } = useCataloguePageQuery({
        query: {
            parentIdentifier: identifier,
            language: i18n.language
        }
    })

    const dataDisplay = useMemo(() => data?.items.map((subCatalogue) => (
        <SubCatalogueList
            key={subCatalogue.id}
            catalogue={subCatalogue}
            seeAllLink={cataloguesTab("subCatalogues", identifier, subCatalogue.identifier)}
            titleVariant="h4"
            parentIds={[identifier]}
        />
    )), [data?.items, identifier])

    return (
        <AppPage
            title={title}
            sx={{
                paddingBottom: "90px"
            }}
        >
            <CatalogueBreadcrumbs />
            <ContentIllustrated
                title={catalogue?.title ?? 'Découvrez les Systèmes : Une Vision Structurée pour la Décarbonation'}
                description={catalogue?.description ?? description}
                illustration={catalogue?.img ? g2Config().platform.url + catalogue?.img : undefined}
                color={identifier === "100m-systems" ? theme.local?.colors.system : theme.local?.colors.sector}
            />
            <Stack
                gap={5}
            >
                <Typography
                    variant="h3"
                >
                    {identifier === "100m-systems" ? t("exploreSystems") : t("exploreSectors")}
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

const description = `
Les systèmes constituent la colonne vertébrale de l'approche WikiCO2. Ils regroupent des domaines technologiques clés et des sous-systèmes pour vous aider à identifier les leviers d’action adaptés à vos projets. Chaque système offre une vue d’ensemble des solutions disponibles.

Grâce à cette organisation, vous pouvez explorer les technologies et processus spécifiques à chaque système, comprendre leur fonctionnement, et évaluer leur impact environnemental. Que vous travailliez dans l'industrie, l'énergie, la construction, ou d'autres secteurs, cette approche structurée vous guide pas à pas vers des actions efficaces et durables.
`