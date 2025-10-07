import {Catalogue} from '../../model'
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

    const { t } = useTranslation()
    const { cataloguesAll } = useRoutesDefinition()

    const dataDisplay = useMemo(() => catalogue?.catalogues.map((subCatalogue) => (
        <TitledImg
            key={subCatalogue.id}
            title={subCatalogue.title}
            src={g2Config().platform.url + subCatalogue.img}
            alt={t("sheetIllustration")}
            to={cataloguesAll(...(parentIds ?? []), subCatalogue.id ?? "")}
        />
    )), [catalogue, parentIds, t])

    if ((!dataDisplay || dataDisplay.length === 0) && !isLoading) return <></>
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
                {isLoading && Array.from({ length: 9 }, (_, index) => (
                    <TitledImg
                        key={index}
                        isLoading
                    />
                ))}
                {dataDisplay}
        </Box>
    )
}
