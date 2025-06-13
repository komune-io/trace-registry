import { Fragment, useMemo, useState } from 'react'
import { Catalogue } from '../../model'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { autoFormFormatter, BackAutoFormData, useTheme } from "@komune-io/g2"
import { Link } from 'react-router-dom'
import { config, defaultCatalogueImg, LocalTheme, UnCachedImage, useRoutesDefinition } from 'components'
import { useCatalogueIdentifierNumber } from '../../api'
import { useTranslation } from 'react-i18next'
import { useCataloguesRouteParams } from '../useCataloguesRouteParams'
import { CatalogueAutoDetailsForm } from '../CatalogueAutoDetailsForm'

interface CatalogueResultListProps {
    catalogues?: Catalogue[]
    groupLabel?: string
    withImage?: boolean
}

export const CatalogueResultList = (props: CatalogueResultListProps) => {
    const { catalogues, groupLabel, withImage } = props

    const display = useMemo(() => catalogues?.map((catalogue, index) => (
        <Fragment key={catalogue.id}>
            <CatalogueResult {...catalogue} withImage={withImage} />
            {index < catalogues.length - 1 && <Divider />}
        </Fragment>
    )), [catalogues, withImage])

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

const CatalogueResult = (props: Catalogue & { withImage?: boolean }) => {
    const { title, id, type, img, structure, withImage = structure?.illustration === "IMAGE" } = props

    const formData = useMemo(() => structure?.tagForm ? autoFormFormatter(structure?.tagForm as BackAutoFormData) : undefined, [structure])

    const [imageError, setImageError] = useState(false)
    const { t } = useTranslation()
    const theme = useTheme<LocalTheme>()
    const { ids } = useCataloguesRouteParams()
    const catType = type.split("-").pop() ?? ""

    const { cataloguesAll } = useRoutesDefinition()

    const identifierNumber = useCatalogueIdentifierNumber(props)

    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={3}
            component={Link}
            to={cataloguesAll(...ids, id)}
            sx={{
                textDecoration: "none",
                "& .illustration": {
                    width: "100px",
                    height: "auto",
                    borderRadius: 1,
                    flexShrink: 0
                }
            }}
        >
            {withImage ? (
                !imageError && !!img ?
                    <UnCachedImage src={config().platform.url + img} alt={t("sheetIllustration")} className='illustration' onError={() => setImageError(true)} />
                    :
                    <img src={defaultCatalogueImg} alt={t("sheetIllustration")} className='illustration' />
            ) : (
                <Box
                    sx={{
                        bgcolor: theme.local?.colors[catType],
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
                            fontFamily: theme.local?.numberFont,
                            fontSize: "2rem",
                            fontWeight: 700
                        }}
                    >
                        {identifierNumber}
                    </Typography>
                </Box>
            )}
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
                    flexWrap={"wrap"}
                    gap={1}
                    sx={{
                        "& .MuiStack-root": {
                            flexWrap: "wrap",
                            gap: 1,
                            flexDirection: "row",
                            alignItems: "center",
                        },
                        "& .AruiForm-field": {
                            width: "unset"
                        }
                    }}
                >
                    <CatalogueAutoDetailsForm
                        formData={formData}
                        catalogue={props}
                    />
                </Stack>
            </Stack>
        </Stack>
    )
}
