import { Box, Paper, Skeleton, Stack, Typography } from '@mui/material'
import {Catalogue, CatalogueRef} from '../../model'
import { addLineClampStyles, LocalTheme, UnCachedImage, useRoutesDefinition } from 'components'
import { useState } from "react"
import { g2Config, useTheme } from '@komune-io/g2'
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import { useCataloguesRouteParams } from '../useCataloguesRouteParams'
import { useCatalogueIdentifierNumber } from '../../api'

export interface CatalogueCardProps {
    catalogue?: Catalogue | CatalogueRef
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

    const identifierNumber = useCatalogueIdentifierNumber(catalogue)

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
                to={cataloguesAll(...(parentIds ?? ids), catalogue?.identifier ?? "")}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {!noimage && !isLoading ?
                    <UnCachedImage src={g2Config().platform.url + catalogue?.img} alt={t("sheetIllustration")} className='illustration' onError={() => setnoimage(true)} />
                    :
                    <Box
                        sx={{
                            bgcolor: theme.local?.colors[catType] ?? "#F9DC44",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "150px",
                            flexShrink: 0
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Milanesa Serif",
                                fontSize: "2rem",
                                fontWeight: 700
                            }}
                        >
                            {identifierNumber}
                        </Typography>
                    </Box>
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
                        {isLoading ? <Skeleton animation="wave" width="150px" /> : catalogue?.title}
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
