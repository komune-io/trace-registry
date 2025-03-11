import { Fragment, useMemo, useState } from 'react'
import { Catalogue } from '../../model'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { Chip, g2Config, useTheme } from "@komune-io/g2"
import { Link } from 'react-router-dom'
import { useRoutesDefinition } from 'components'
import { useCatalogueIdentifierNumber, useCatalogueRefListQuery } from '../../api'
import { useTranslation } from 'react-i18next'

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
    const { title, themes, id, img, type, parentId } = props
    const theme = useTheme()
    const catType = type.split("-").pop() ?? ""
    const { t, i18n } = useTranslation()
    const [noImage, setnoImage] = useState(!img)

    const refsQuery = useCatalogueRefListQuery({
        query: {
            language: i18n.language
        }
    })

    const parent = useMemo(() => refsQuery.data?.items.find((parent) => parent.id === parentId), [refsQuery.data?.items, parentId])

    const { cataloguesAll } = useRoutesDefinition()

    const identifierNumber = useCatalogueIdentifierNumber(props)

    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={3}
            component={Link}
            to={cataloguesAll(undefined, id)}
            sx={{
                textDecoration: "none"
            }}
        >
            {noImage && <Box
                sx={{
                    bgcolor: theme.colors.custom[catType] ?? "#F9DC44",
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
            </Box>}
            {!noImage && <img
                alt={t("sheetIllustration")}
                src={g2Config().platform.url + img}
                style={{
                    height: "72px",
                    width: "auto",
                    borderRadius: "8px"
                }}
                onError={() => setnoImage(true)}
            />}
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
