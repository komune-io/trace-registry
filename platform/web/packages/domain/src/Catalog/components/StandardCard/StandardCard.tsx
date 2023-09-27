import { Box, Card, CardProps, Divider, Stack, Typography } from '@mui/material'
import { Catalog } from '../../model'
import { LimitedTagList, Tag } from 'components'
import { useTranslation } from 'react-i18next'
import { useMemo } from "react"
import { Button } from '@smartb/g2'
import { t } from 'i18next'

export interface StandardCardProps extends CardProps {
    catalog?: Catalog
}

export const StandardCard = (props: StandardCardProps) => {
    const { catalog, ...other } = props

    const { i18n } = useTranslation()

    const themes = useMemo(() => catalog?.themes.map((theme: any): Tag => ({ key: theme.id, label: theme.prefLabels[i18n.language], color: "#18159D" })), [catalog, i18n.language])
    return (
        <Card
            {...other}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
                gap={2}
                padding={1.5}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    gap={2}
                >
                    {catalog?.img ? <img
                        src={catalog?.img}
                        alt="The standard logo"
                    /> : <Box />}
                    <Typography
                        variant="subtitle2"
                    >
                        {catalog?.title}
                    </Typography>
                </Stack>
                <LimitedTagList
                    tags={themes}
                    description={catalog?.description}
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
                        {t("catalogs.verifiedProjects", { count: catalog?.datasets.filter((dataset: any) => dataset.type === "project").length })}
                    </Typography>
                    <Button>{t("details")}</Button>
                </Stack>
            </Box>

        </Card>
    )
}
