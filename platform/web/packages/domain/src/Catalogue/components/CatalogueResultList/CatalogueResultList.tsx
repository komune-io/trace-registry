import { Fragment, useMemo, useState } from 'react'
import { Catalogue } from '../../model'
import { Divider, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import {Chip, g2Config} from "@komune-io/g2"
import { Link } from 'react-router-dom'
import { useRoutesDefinition } from 'components'

interface CatalogueResultListProps {
    catalogues?: Catalogue[]
    groupLabel?: string
}

export const CatalogueResultList = (props: CatalogueResultListProps) => {
    const { catalogues, groupLabel } = props

    const display = useMemo(() => catalogues?.map((catalogue, index) => (
        <Fragment
        key={catalogue.id}
        >
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
    const { title, themes, id } = props

    const {cataloguesAll} = useRoutesDefinition()

    const [noImage, setnoImage] = useState(false)

    const { t } = useTranslation()

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
            {!noImage && <img
                alt={t("sheetIllustration")}
                src={g2Config().platform.url + `/data/catalogues/${id}/img`}
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
                    variant='subtitle2'
                    color="primary"

                >
                    {title}
                </Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={1}
                >
                    <Chip color="#1F1F1F" label={"System"}   />
                    {themes?.map((theme) => (
                        <Chip key={theme.id} color="#492161" label={theme.prefLabel}   />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}
