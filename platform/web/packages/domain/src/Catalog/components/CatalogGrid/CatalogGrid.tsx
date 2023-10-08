import { Box } from '@mui/material'
import { CatalogueCard } from '../StandardCard'
import { Catalogue } from '../../model'

export interface CatalogGridProps {
    items?: Catalogue[]
    isLoading?: boolean
}

export const CatalogGrid = (props: CatalogGridProps) => {
    const { items, isLoading } = props
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
            }}
            gap={4}
        >
            { isLoading ?
                    Array.from({length: 4}, (_, index) => (
                        <CatalogueCard
                            key={index}
                            isLoading
                        />
                    ))
                :
                items?.map((catalog) => (
                    <CatalogueCard key={catalog.identifier} catalogue={catalog} />
                ))
            }
        </Box>
    )
}
