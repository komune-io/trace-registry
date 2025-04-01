import {g2Config} from '@komune-io/g2'
import {Stack} from '@mui/material'
import {ContentIllustrated, useRoutesDefinition} from 'components'
import {
    useCataloguePageQuery,
    Catalogue, SubCatalogueList, orderByCatalogueIdentifierNumber, useLexicalDistribution,
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

        />
    )), [data])

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
            {dataDisplay}
        </AppPage>
    )
}

interface CatalogueContentProps {
    catalogue: Catalogue,
}

export const CatalogueHomeSection = (props: CatalogueContentProps) => {
    const { catalogue } = props
    const { i18n } = useTranslation()
    const { cataloguesAll } = useRoutesDefinition()
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
              subCatalogues={item.catalogues}
              seeAllLink={cataloguesAll(item?.identifier)}
              titleVariant="h4"
            />
        })
    }, [data?.items, lexicalDistribution])
    return <>
        <ContentIllustrated
          title={catalogue?.title ?? ""}
          description={catalogue?.description ?? ""}
          illustration={catalogue?.img ? g2Config().platform.url + catalogue?.img : undefined}
        />
        <Stack gap={5}>
            {dataDisplay}
        </Stack>
    </>;
}
