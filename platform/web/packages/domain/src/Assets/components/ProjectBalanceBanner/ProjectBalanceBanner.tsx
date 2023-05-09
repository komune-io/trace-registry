import {Box, Divider, Stack, Typography} from '@mui/material'
import {FormComposable, FormComposableField, FormComposableState} from '@smartb/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {ArrowUpwardRounded, CompareArrowsRounded, DownloadRounded} from "@mui/icons-material";
import {useAssetGetQuery, Project} from "domain-components";
import {useParams} from "react-router-dom";


export interface ProjectBalanceBannerProps {
    formState: FormComposableState
}


// enlever '||  "1200 tons"' quand données
export const ProjectBalanceBanner = (props: ProjectBalanceBannerProps) => {
    const { formState } = props
    const { t } = useTranslation()
    const { projectId } = useParams()

    const assetQuery = useAssetGetQuery({ query: { projectId: projectId! } })
    const available = assetQuery.data?.available
    const withdrawn = assetQuery.data?.withdrawn
    const traded = assetQuery.data?.traded

    const fieldsAvailable = useMemo((): FormComposableField[] => [{
        name: "type",
        type: "select",
        label: t("projects.assets.availableQuantity"),
        params: {
            readonlyType: "customElement",
            readonlyElement: (() => { return <Typography>{available ||  "1200 tons"}</Typography>}) // format number g2 utils
            }
        },
    ], [t])

    const fieldsRetired = useMemo((): FormComposableField[] => [{
        name: "type",
        type: "select",
        label: t("projects.assets.retiredQuantity"),
        params: {
            readonlyType: "customElement",
            readonlyElement: (() => { return <Typography>{withdrawn ||  "1200 tons"}</Typography>})
        }
    }
    ], [t])

    const fieldsTraded = useMemo((): FormComposableField<keyof Project>[] => [{
        name: "type",
        type: "select",
        label: t("projects.assets.tradedQuantity"),
        params: {
            readonlyType: "customElement",
            readonlyElement: (() => { return <Typography>{traded ||  "1200 tons"}</Typography>})
        }
    }
    ], [t])


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
                <Stack
                    direction="row"
                    gap={1}
                    sx={{
                        padding: "24px 32px",
                        background: (theme) => theme.palette.background.default,
                        borderRadius: (theme) => theme.shape.borderRadius + "px",
                        "& .MuiFormLabel-root": {
                            fontSize: "1.25rem",
                            fontWeight: 500
                        },
                        "& .MuiStack-root": {
                            gap: (theme) => theme.spacing(1.5)
                        }
                    }}
                >
                    <ArrowUpwardRounded sx={{ color: "#159D50" }}/>
                    <FormComposable formState={formState} fields={fieldsAvailable} fieldsStackProps={{ flexDirection: "row", justifyContent: "space-between" }} />
                </Stack>
                <Stack
                    direction="row"
                    gap={1}
                    sx={{
                        padding: "24px 32px",
                        background: (theme) => theme.palette.background.default,
                        borderRadius: (theme) => theme.shape.borderRadius + "px",
                        "& .MuiFormLabel-root": {
                            fontSize: "1.25rem",
                            fontWeight: 500
                        },
                        "& .MuiStack-root": {
                            gap: (theme) => theme.spacing(1.5)
                        }
                    }}
                >
                    <DownloadRounded sx={{ color: "#F36D25" }}/>
                    <FormComposable formState={formState} fields={fieldsRetired} fieldsStackProps={{ flexDirection: "row", justifyContent: "space-between" }} />
                </Stack>
                <Stack
                    direction="row"
                    gap={1}
                    sx={{
                        padding: "24px 32px",
                        background: (theme) => theme.palette.background.default,
                        borderRadius: (theme) => theme.shape.borderRadius + "px",
                        "& .MuiFormLabel-root": {
                            fontSize: "1.25rem",
                            fontWeight: 500
                        },
                        "& .MuiStack-root": {
                            gap: (theme) => theme.spacing(1.5)
                        }
                    }}
                >
                    <CompareArrowsRounded sx={{ color: "#284FDB" }}/>
                    <FormComposable formState={formState} fields={fieldsTraded} fieldsStackProps={{ flexDirection: "row", justifyContent: "space-between" }} />
                </Stack>
            </Stack>
        </>
    )
}
