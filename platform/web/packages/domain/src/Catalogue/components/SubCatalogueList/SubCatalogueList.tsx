import {Catalogue, CatalogueRef} from '../../model'
import { Stack } from '@mui/material'
import { TitleSeeAllLink } from 'components'
import { CatalogueCard } from '../CatalogueCard'
import { useMemo } from 'react'
import {LexicalDistribution} from "../../api";

export interface SubCatalogueListProps {
    catalogue?: Catalogue
    subCatalogues?: CatalogueRef[]
    catalogueId?: string
    lexicalDistribution?: LexicalDistribution
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
        isLoading, description, linkLabel, title, lexicalDistribution,
        seeAllLink, catalogueId, titleVariant, parentIds
    } = props

    const id = catalogueId ?? catalogue?.id

    const globalLoading = isLoading

    const dataDislpay = useMemo(() => subCatalogues?.slice(0,4)?.map((subCatalogue) => (
        <CatalogueCard key={subCatalogue.id} catalogue={subCatalogue} parentIds={[...(parentIds ?? []), id!]} />
    )), [subCatalogues, parentIds, id])

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
                lexicalDistribution={lexicalDistribution}
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
