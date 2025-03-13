import { Catalogue } from '../../model'
import { useCataloguePageQuery } from '../../api'
import { useTranslation } from 'react-i18next'
import { Stack } from '@mui/material'
import { TitleSeeAllLink } from 'components'
import { CatalogueCard } from '../CatalogueCard'
import { useMemo } from 'react'

export interface SubCatalogueListProps {
    catalogue?: Catalogue
    catalogueIdentifier?: string
    isLoading?: boolean
    title?: string
    description?: string
    linkLabel?: string
    seeAllLink?: string
    titleVariant?: "h3" | "h4"
}


export const SubCatalogueList = (props: SubCatalogueListProps) => {
    const { catalogue, isLoading, description, linkLabel, title, seeAllLink, catalogueIdentifier, titleVariant } = props

    const { i18n } = useTranslation()

    const { data, ["isLoading"]: subCatalogueLoading } = useCataloguePageQuery({
        query: {
            parentIdentifier: catalogue?.identifier ?? catalogueIdentifier,
            language: i18n.language
        },
        options: {
            enabled: (catalogue?.identifier ?? catalogueIdentifier) !== undefined
        }
    })

    const globalLoading = isLoading || subCatalogueLoading

    const dataDislpay = useMemo(() => data?.items.slice(0, 4).map((subCatalogue) => (
        <CatalogueCard key={subCatalogue.id} catalogue={subCatalogue} />
    )), [data?.items])

    return (
        <Stack
            gap={5}
        >
            <TitleSeeAllLink
                link={seeAllLink}
                title={title ?? catalogue?.title}
                isLoading={isLoading}
                description={description}
                linkLabel={linkLabel}
                titleVariant={titleVariant}
            />
            <Stack
                gap={3}
                direction={'row'}
                flexWrap={'wrap'}
            >
                {globalLoading && (
                    <>
                        <CatalogueCard isLoading />
                        <CatalogueCard isLoading />
                        <CatalogueCard isLoading />
                        <CatalogueCard isLoading />
                    </>
                )}
                {dataDislpay}
            </Stack>
        </Stack>
    )
}
