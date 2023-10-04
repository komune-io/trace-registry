import { Box, Card, CardProps, Divider, Skeleton, Stack, Typography } from '@mui/material'
import { Catalogue } from '../../model'
import { DescriptedLimitedChipList, useRoutesDefinition } from 'components'
import { useTranslation } from 'react-i18next'
import { useMemo } from "react"
import { LinkButton, Option } from '@smartb/g2'
import { t } from 'i18next'

export interface StandardCardProps extends CardProps {
    catalog?: Catalogue
    isLoading?: boolean
}

export const StandardCard = (props: StandardCardProps) => {
    const { catalog, isLoading, ...other } = props

    const { i18n } = useTranslation()
    const {catalogsCatalogIdViewTab} = useRoutesDefinition()

    const themes = useMemo(() => catalog?.themes?.map((theme: any): Option => ({ key: theme.id, label: theme.prefLabels[i18n.language], color: "#18159D" })), [catalog, i18n.language])
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
                    {catalog?.img ? <img
                        className='catalogLogo'
                        src={catalog.img}
                        alt="The standard logo"
                    /> : isLoading ? <Skeleton sx={{width: "80px", height: "40px"}} animation="wave" /> : <Box />}
                    <Typography
                        variant="subtitle2"
                    >
                        {isLoading ? <Skeleton animation="wave" width="50px" /> : catalog?.title}
                    </Typography>
                </Stack>
                <DescriptedLimitedChipList
                    tags={themes}
                    description={catalog?.description}
                    isLoading={isLoading}
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
                        {isLoading ? <Skeleton animation="wave" width="100px" /> : t("catalogs.verifiedProjects", { count: catalog?.datasets?.filter((dataset: any) => dataset.type === "project").length })}
                    </Typography>
                    <LinkButton to={catalogsCatalogIdViewTab(catalog?.identifier ?? "")} >{t("details")}</LinkButton>
                </Stack>
            </Box>

        </Card>
    )
}
