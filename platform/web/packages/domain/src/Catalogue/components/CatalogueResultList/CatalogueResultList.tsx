import { Fragment, useMemo } from 'react'
import { Catalogue } from '../../model'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { Chip, useTheme } from "@komune-io/g2"
import { Link } from 'react-router-dom'
import { LocalTheme, useRoutesDefinition } from 'components'
import { useCatalogueIdentifierNumber } from '../../api'

interface CatalogueResultListProps {
    catalogues?: Catalogue[]
    groupLabel?: string
}

export const CatalogueResultList = (props: CatalogueResultListProps) => {
    const { catalogues, groupLabel } = props

    const display = useMemo(() => catalogues?.map((catalogue, index) => (
        <Fragment key={catalogue.id}>
            <CatalogueResult {...catalogue} />
            {index < catalogues.length - 1 && <Divider />}
        </Fragment>
    )), [catalogues])

    return (
        <Stack
            gap={2}
        >
            {groupLabel &&
                <Typography
                    variant='subtitle1'
                    sx={{
                        pb: 2
                    }}
                >
                    {groupLabel}
                </Typography>
            }
            {display}
        </Stack>
    )
}

const CatalogueResult = (props: Catalogue) => {
    const { title, themes, id, type, parent } = props
    const theme = useTheme<LocalTheme>()
    const catType = type.split("-").pop() ?? ""

    const { cataloguesAll } = useRoutesDefinition()

    const identifierNumber = useCatalogueIdentifierNumber(props)

    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={3}
            component={Link}
            to={cataloguesAll(id)}
            sx={{
                textDecoration: "none"
            }}
        >
            <Box
                sx={{
                    bgcolor: theme.local?.colors[catType] ?? "#F9DC44",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "140px",
                    height: "80px",
                    borderRadius: 1,
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
            <Stack
                gap={1}
            >
                <Typography
                    variant='h5'
                >
                    {title}
                </Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={1}
                >
                    {parent && <Chip color="#1F1F1F" label={parent.title} />}
                    {themes?.map((theme) => (
                        <Chip key={theme.id} color="#492161" label={theme.prefLabel} />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}
