import {Catalogue, CatalogueRef} from '../../model'
import { Stack } from '@mui/material'
import { TitleSeeAllLink } from 'components'
import { CatalogueCard } from '../CatalogueCard'
import { useMemo } from 'react'
import {LexicalDownloadDistribution} from "../../api";

export interface SubCatalogueListProps {
    catalogue?: Catalogue
    subCatalogues?: CatalogueRef[]
    catalogueIdentifier?: string
    lexicalDownloadDistribution?: LexicalDownloadDistribution
    isLoading?: boolean
    title?: string
    description?: string
    linkLabel?: string
    seeAllLink?: string
    titleVariant?: "h3" | "h4"
    parentIds?: string[]
}


export const SubCatalogueList = (props: SubCatalogueListProps) => {
    const { catalogue, subCatalogues,
        isLoading, description, linkLabel, title, lexicalDownloadDistribution,
        seeAllLink, catalogueIdentifier, titleVariant, parentIds
    } = props

    const identifier = catalogue?.identifier ?? catalogueIdentifier

    const globalLoading = isLoading

    const dataDislpay = useMemo(() => subCatalogues?.slice(0,4)?.map((subCatalogue) => (
        <CatalogueCard key={subCatalogue.id} catalogue={subCatalogue} parentIds={[...(parentIds ?? []), identifier!]} />
    )), [subCatalogues, parentIds, identifier])

    if ((!dataDislpay || dataDislpay.length === 0) && !globalLoading) return <></>
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
                lexicalDownloadDistribution={lexicalDownloadDistribution}
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
