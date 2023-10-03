import { Box } from '@mui/material'
import { StandardCard } from '../StandardCard'
import { Catalogue } from '../../model'

export interface CatalogGridProps {
    catalogs?: Catalogue[]
}

export const CatalogGrid = (props: CatalogGridProps) => {
    const { catalogs } = props
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
            }}
            gap={4}
        >
            {
                catalogs?.map((catalog) => (
                    <StandardCard key={catalog.identifier} catalog={catalog} />
                ))
            }
        </Box>
    )
}
