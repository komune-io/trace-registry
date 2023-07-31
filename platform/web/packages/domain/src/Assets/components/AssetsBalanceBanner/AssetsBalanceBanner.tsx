import {Box, Divider, Stack, Typography} from '@mui/material'
import {useFormComposable} from '@smartb/g2'

import {useTranslation} from 'react-i18next'
import {ArrowUpwardRounded, CompareArrowsRounded, DownloadRounded} from "@mui/icons-material";
import {AssetsDataSummary, useAssetGetQuery} from "domain-components";
import {useParams} from "react-router-dom";


export interface AssetsBalanceBannerProps {
}

export const AssetsBalanceBanner = (props: AssetsBalanceBannerProps) => {
    const { } = props
    const { t } = useTranslation()
    const { projectId } = useParams()

    const assetQuery = useAssetGetQuery({ query: { projectId: projectId! } })

    const formState= useFormComposable({
        readOnly: true,
        formikConfig: {
            initialValues: {
                retired: assetQuery.data?.retired ?? 0,
                available: assetQuery.data?.available ?? 0,
                transferred: assetQuery.data?.transferred ?? 0
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
                <AssetsDataSummary name={"available"} icon={<ArrowUpwardRounded sx={{ color: "#159D50" }}/>} label={t("projects.assets.availableQuantity")} formState={formState} />
                <AssetsDataSummary name={"retired"} icon={<DownloadRounded sx={{ color: "#F36D25" }}/>} label={t("projects.assets.retiredQuantity")} formState={formState} />
                <AssetsDataSummary name={"transferred"} icon={<CompareArrowsRounded sx={{ color: "#284FDB" }}/>} label={t("projects.assets.transferredQuantity")} formState={formState} />
            </Stack>
        </>
    )
}
