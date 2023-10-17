import { Box, Card, CardProps, Divider, Skeleton, Stack, Typography } from '@mui/material'
import { Catalogue } from '../../model'
import { DescriptedLimitedChipList, useRoutesDefinition } from 'components'
import { useTranslation } from 'react-i18next'
import { useMemo } from "react"
import { LinkButton, Option } from '@smartb/g2'
import { t } from 'i18next'
import {config} from "../../../config";
import { useCataloguesRouteParams } from '../useCataloguesRouteParams'

export interface CatalogueCardProps extends CardProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CatalogueCard = (props: CatalogueCardProps) => {
    const { catalogue, isLoading, ...other } = props
    const { ids } = useCataloguesRouteParams()
    const { i18n } = useTranslation()
    const {cataloguesAll} = useRoutesDefinition()

    const themes = useMemo(() =>
        catalogue?.themes?.map((theme: any): Option => ({
            key: theme.id, label: theme.prefLabels[i18n.resolvedLanguage ?? "en"], color: "#18159D"
        }))
        , [catalogue, i18n.resolvedLanguage])

    const projectsCountLabel = useMemo(() => {
        type Dataset = {type: string, length: number}
        const datasets = catalogue?.datasets ?? [] as Array<Dataset>
        const count = datasets
            .filter((dataset: Dataset) => dataset.type === "project")
            .map((dataset: Dataset) => dataset.length)
            .reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0)

        return count > 0 ? t("catalogues.verifiedProjects", { count: count }) : ""
    }, [catalogue?.datasets])

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
                    {catalogue?.img ? <img
                        className='catalogLogo'
                        src={`${config().platform.url}${catalogue.img}`}
                        alt="The standard logo"
                    /> : isLoading ? <Skeleton sx={{width: "80px", height: "40px"}} animation="wave" /> : <Box />}
                    <Typography
                        variant="subtitle2"
                    >
                        {isLoading ? <Skeleton animation="wave" width="50px" /> : catalogue?.title}
                    </Typography>
                </Stack>
                <DescriptedLimitedChipList
                    tags={themes}
                    description={catalogue?.description}
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
                    <LinkButton to={cataloguesAll(undefined, ...ids, catalogue?.identifier ?? "")} >{t("details")}</LinkButton>
                </Stack>
            </Box>
        </Card>
    )
}
