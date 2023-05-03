import {Box, Divider, Stack, Typography} from '@mui/material'
import {FormComposable, FormComposableField, FormComposableState} from '@smartb/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Project } from '../../../Project'
import {AvailableIcon, CompareIcon, RetireIcon} from "components";


export interface ProjectBalanceBannerProps {
    formState: FormComposableState
}


const TypeElement = () => {
    return (
        <Typography>1200 tons</Typography> // temporaire attente du back pour valeur
    )
}

export const ProjectBalanceBanner = (props: ProjectBalanceBannerProps) => {
    const { formState } = props
    const { t } = useTranslation()

    const fieldsAvailable = useMemo((): FormComposableField<keyof Project>[] => [{
        name: "type",
        type: "select",
        label: t("projects.assets.availableQuantity"),
        params: {
            readonlyType: "customElement",
            readonlyElement: TypeElement
            }
        },
    ], [t])

    const fieldsRetired = useMemo((): FormComposableField<keyof Project>[] => [{
        name: "type",
        type: "select",
        label: t("projects.assets.retiredQuantity"),
        params: {
            readonlyType: "customElement",
            readonlyElement: TypeElement
        }
    }
    ], [t])

    const fieldsFinanced = useMemo((): FormComposableField<keyof Project>[] => [{
        name: "type",
        type: "select",
        label: t("projects.assets.financedQuantity"),
        params: {
            readonlyType: "customElement",
            readonlyElement: TypeElement
        }
    }], [t])

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
                    <AvailableIcon />
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
                    <RetireIcon />
                    <FormComposable formState={formState} fields={fieldsFinanced} fieldsStackProps={{ flexDirection: "row", justifyContent: "space-between" }} />
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
                    <CompareIcon />
                    <FormComposable formState={formState} fields={fieldsRetired} fieldsStackProps={{ flexDirection: "row", justifyContent: "space-between" }} />
                </Stack>
            </Stack>
        </>
    )
}
