import { Box, Card, CardProps, Divider, Stack, Typography } from '@mui/material'
import { Catalog } from '../../model'
import { DescriptedLimitedTagList, Tag, useRoutesDefinition } from 'components'
import { useTranslation } from 'react-i18next'
import { useMemo } from "react"
import { LinkButton } from '@smartb/g2'
import { t } from 'i18next'

export interface StandardCardProps extends CardProps {
    catalog: Catalog
}

export const StandardCard = (props: StandardCardProps) => {
    const { catalog, ...other } = props

    const { i18n } = useTranslation()
    const {catalogsCatalogIdViewTab} = useRoutesDefinition()

    const themes = useMemo(() => catalog.themes.map((theme: any): Tag => ({ key: theme.id, label: theme.prefLabels[i18n.language], color: "#18159D" })), [catalog, i18n.language])
    return (
        <Card
            {...other}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                }}
                gap={2}
                padding={1.5}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                        "& .catalogLogo": {
                            width: "auto",
                            height: "auto",
                            maxWidth: "80px",
                            maxHeight: "40px"
                        }
                    }}
                    gap={2}
                >
                    {catalog.img ? <img
                        className='catalogLogo'
                        src={catalog.img}
                        alt="The standard logo"
                    /> : <Box />}
                    <Typography
                        variant="subtitle2"
                    >
                        {catalog.title}
                    </Typography>
                </Stack>
                <DescriptedLimitedTagList
                    tags={themes}
                    description={catalog.description}
                />
                <Box
                flexGrow={1}
                sx={{
                    margin: (theme) => theme.spacing(-1, 0)
                }}
                />
                <Divider />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2}
                >
                    <Typography
                        variant='caption'
                    >
                        {t("catalogs.verifiedProjects", { count: catalog.datasets.filter((dataset: any) => dataset.type === "project").length })}
                    </Typography>
                    <LinkButton to={catalogsCatalogIdViewTab(catalog.identifier)} >{t("details")}</LinkButton>
                </Stack>
            </Box>

        </Card>
    )
}
