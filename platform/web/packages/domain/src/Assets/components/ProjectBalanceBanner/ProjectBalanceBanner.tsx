import {Box, Divider, Stack, Typography} from '@mui/material'
import {useFormComposable} from '@smartb/g2'

import { useTranslation } from 'react-i18next'
import {ArrowUpwardRounded, CompareArrowsRounded, DownloadRounded} from "@mui/icons-material";
import {ProjectDataSummary, useAssetGetQuery} from "domain-components";
import {useParams} from "react-router-dom";


export interface ProjectBalanceBannerProps {
}

export const ProjectBalanceBanner = (props: ProjectBalanceBannerProps) => {
    const { } = props
    const { t } = useTranslation()
    const { projectId } = useParams()

    const assetQuery = useAssetGetQuery({ query: { projectId: projectId! } })

    const formState= useFormComposable({
        readonly: true,
        formikConfig: {
            initialValues: {
                retired: assetQuery.data?.retired ?? 0,
                available: assetQuery.data?.available ?? 0,
                traded: assetQuery.data?.traded ?? 0
            }
        }
    })

    return (
        <>
            <Box>
                <Typography variant="h5" >{t("projects.assets.titles.balance")}</Typography>
                <Divider sx={{ marginTop: "8px" }} />
            </Box>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={8}
                height="150px"
                >
                <ProjectDataSummary name={"available"} icon={<ArrowUpwardRounded sx={{ color: "#159D50" }}/>} label={t("projects.assets.availableQuantity")} formState={formState} />
                <ProjectDataSummary name={"retired"} icon={<DownloadRounded sx={{ color: "#F36D25" }}/>} label={t("projects.assets.retiredQuantity")} formState={formState} />
                <ProjectDataSummary name={"traded"} icon={<CompareArrowsRounded sx={{ color: "#284FDB" }}/>} label={t("projects.assets.tradedQuantity")} formState={formState} />
            </Stack>
        </>
    )
}
