import { Box, Card, CardProps, Divider, Skeleton, Stack, Typography } from '@mui/material'
import { Catalogue } from '../../model'
import { DescriptedLimitedChipList, useRoutesDefinition } from 'components'
import { useTranslation } from 'react-i18next'
import { useMemo } from "react"
import { LinkButton, Option } from '@smartb/g2'
import { t } from 'i18next'
import {config} from "../../../config";

export interface StandardCardProps extends CardProps {
    catalog?: Catalogue
    isLoading?: boolean
}

export const StandardCard = (props: StandardCardProps) => {
    const { catalog, isLoading, ...other } = props

    const { i18n } = useTranslation()
    const {catalogsCatalogIdViewTab} = useRoutesDefinition()

    const themes = useMemo(() =>
        catalog?.themes?.map((theme: any): Option => ({
            key: theme.id, label: theme.prefLabels[i18n.resolvedLanguage ?? "en"], color: "#18159D"
        }))
        , [catalog, i18n.language])

    const projectsCountLabel = useMemo(() => {
        type Dataset = {type: string, length: number}
        const datasets = catalog?.datasets ?? [] as Array<Dataset>
        const count = datasets
            .filter((dataset: Dataset) => dataset.type === "project")
            .map((dataset: Dataset) => dataset.length)
            .reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0)

        return count > 0 ? t("catalogs.verifiedProjects", { count: count }) : ""
    }, [catalog?.datasets])
    console.log(projectsCountLabel)
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
                    {catalog?.id ? <img
                        className='catalogLogo'
                        src={`${config().platform.url}/catalogues/${catalog.id}/logo`}
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
                        {isLoading ? <Skeleton animation="wave" width="100px" /> : projectsCountLabel}
                    </Typography>
                    <LinkButton to={catalogsCatalogIdViewTab(catalog?.identifier ?? "")} >{t("details")}</LinkButton>
                </Stack>
            </Box>

        </Card>
    )
}
