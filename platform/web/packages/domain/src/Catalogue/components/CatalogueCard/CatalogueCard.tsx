import { Box, Paper, Skeleton, Stack, Typography } from '@mui/material'
import { Catalogue } from '../../model'
import { addLineClampStyles, LocalTheme, useRoutesDefinition } from 'components'
import { useState } from "react"
import { g2Config, useTheme } from '@komune-io/g2'
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import { useCataloguesRouteParams } from '../useCataloguesRouteParams'

export interface CatalogueCardProps {
    catalogue?: Catalogue
    isLoading?: boolean
    parentIds?: string[]
}

export const CatalogueCard = (props: CatalogueCardProps) => {
    const { catalogue, isLoading, parentIds } = props
    const [noimage, setnoimage] = useState(!catalogue?.img)
    const { cataloguesAll } = useRoutesDefinition()
    const theme = useTheme<LocalTheme>()
    const { ids } = useCataloguesRouteParams()

    const catType = catalogue?.type.split("-").pop() ?? ""

    return (
        <Paper
            sx={{
                border: "1px solid #E4DEE7",
                width: "282px",
                borderRadius: 1,
                overflow: "hidden",
                "& .illustration": {
                    width: "100%",
                    flexShrink: 0,
                    height: "150px",
                    objectFit: "cover",
                },
                "& *": {
                    textDecoration: "none"
                }
            }}
        >
            <Link
                to={cataloguesAll( ...(parentIds ?? ids), catalogue?.identifier ?? "")}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {!noimage && !isLoading ?
                    <img src={g2Config().platform.url + catalogue?.img} alt={t("sheetIllustration")} className='illustration' onError={() => setnoimage(true)} />
                    :
                    <Box
                        sx={{
                            bgcolor: theme.local?.colors[catType] ?? "#F9DC44",
                            width: "100%",
                            height: "150px",
                            flexShrink: 0
                        }}
                    />
                }
                <Stack
                    sx={{
                        py: 1.5,
                        px: 2.25,
                        pb: 2,
                        gap: 1.25
                    }}
                >
                    <Typography
                        variant='h5'
                    >
                        {isLoading ? <Skeleton animation="wave" width="100px" /> : catalogue?.title}
                    </Typography>
                    <Typography
                        variant='body2'
                        sx={{
                            ...addLineClampStyles(8)
                        }}
                    >
                        {isLoading ? <Skeleton animation="wave" width="100%" height="150px" /> : catalogue?.description}
                    </Typography>
                </Stack>
            </Link>
        </Paper>
    )
}
