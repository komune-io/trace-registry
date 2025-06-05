import {Catalogue} from '../../model'
import {useCataloguePageQuery} from '../../api'
import {useTranslation} from 'react-i18next'
import {Box} from '@mui/material'
import {TitledImg, useRoutesDefinition} from 'components'
import {useMemo} from 'react'
import {g2Config} from '@komune-io/g2'

export interface SubCatalogueGridProps {
    catalogue?: Catalogue
    isLoading?: boolean
    parentIds?: string[]
}


export const SubCatalogueGrid = (props: SubCatalogueGridProps) => {
    const { catalogue, isLoading, parentIds } = props

    const { t, i18n } = useTranslation()
    const { cataloguesAll } = useRoutesDefinition()

    const { data, ["isLoading"]: subCatalogueLoading } = useCataloguePageQuery({
        query: {
            parentId: catalogue?.id,
            language: i18n.language
        },
        options: {
            enabled: catalogue?.id !== undefined
        }
    })

    const globalLoading = isLoading || subCatalogueLoading

    const dataDislpay = useMemo(() => data?.items.map((subCatalogue) => (
        <TitledImg
            key={subCatalogue.id}
            title={subCatalogue?.title}
            src={g2Config().platform.url + subCatalogue?.img}
            alt={t("sheetIllustration")}
            to={cataloguesAll(...(parentIds ?? []), subCatalogue?.identifier ?? "")}
        />
    )), [data?.items, parentIds, t])

    if ((!dataDislpay || dataDislpay.length === 0) && !globalLoading) return <></>
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                alignItems: "center", 
                p: 5
            }}
            gap={10}
        >
                {globalLoading && Array.from({ length: 9 }, (_, index) => (
                    <TitledImg
                        key={index}
                        isLoading
                    />
                ))}
                {dataDislpay}
        </Box>
    )
}
