import {g2Config} from '@komune-io/g2'
import {Stack} from '@mui/material'
import {ContentIllustrated, useExtendedAuth, useRoutesDefinition} from 'components'
import {
    useCataloguePageQuery,
    Catalogue, SubCatalogueList, orderByCatalogueIdentifierNumber, useLexicalDistribution,
    CreateDraftButton,
} from 'domain-components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'

interface CatalogueHomeEntryPointProps {
    catalogue: Catalogue
}

export const CatalogueHomeEntryPoint = (props: CatalogueHomeEntryPointProps) => {
    const { catalogue } = props
    const { i18n } = useTranslation()
    const { data } = useCataloguePageQuery({
        query: {
            parentIdentifier: catalogue.identifier,
            language: i18n.language,
        }
    })

    const dataDisplay = useMemo(() => data?.items
      ?.sort(orderByCatalogueIdentifierNumber)
      ?.map((subCatalogue) => (
      <CatalogueHomeSection
            key={subCatalogue.id}
            catalogue={subCatalogue}
            parent={catalogue}
        />
    )), [data, catalogue])

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
            {dataDisplay}
        </AppPage>
    )
}

interface CatalogueContentProps {
    catalogue: Catalogue,
    parent: Catalogue
}

export const CatalogueHomeSection = (props: CatalogueContentProps) => {
    const { catalogue, parent } = props
    const { i18n } = useTranslation()
    const { cataloguesAll } = useRoutesDefinition()
    const { policies } = useExtendedAuth()
    const { data } = useCataloguePageQuery({
        query: {
            parentIdentifier: catalogue.identifier,
            language: i18n.language,
        }
    })
    const lexicalDistribution = useLexicalDistribution(catalogue)

    const dataDisplay = useMemo(() => {
        return data?.items
          ?.map((item) => {
            return <SubCatalogueList
              key={item.id}
              lexicalDistribution={lexicalDistribution}
              catalogue={catalogue}
              catalogueId={item?.id}
              subCatalogues={item.catalogues}
              seeAllLink={cataloguesAll(item?.id)}
              titleVariant="h4"
            />
        })
    }, [data?.items, lexicalDistribution, parent])
    return <>
        <ContentIllustrated
          title={catalogue?.title ?? ""}
          description={catalogue?.description ?? ""}
          illustration={catalogue?.img ? g2Config().platform.url + catalogue?.img : undefined}
          actions={<CreateDraftButton catalogue={catalogue} canCreate={policies.catalogue.canUpdate(catalogue)} />}
        />
        <Stack gap={5}>
            {dataDisplay}
        </Stack>
    </>;
}
