import { Box, Stack, Typography } from '@mui/material'
import { FormComposable, FormComposableField, FormComposableState } from '@smartb/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Project } from '../../model'

export interface ProjectProtocolesLocationProps {
    formState: FormComposableState
}

export const ProjectProtocolesLocation = (props: ProjectProtocolesLocationProps) => {
    const { formState } = props
    const { t } = useTranslation()

    const map = useMemo((): FormComposableField<keyof Project>[] => [{
        //@ts-ignore
        name: "gps",
        type: "map",
        params: {
            draggableMarkerPlugin: {
                enable: true
            },
            style: {
                height: "400px"
            }
        },
    }], [t])

    return (
        <Stack
            gap={2}
            sx={{
                flexGrow: 1,
                flexBasis: 0
            }}
        >
            <Typography variant="h6">{t("protocoles")}</Typography>
            <Box
                sx={{
                    height: "100px",
                    width: "100%",
                    background: (theme) => theme.palette.background.default,
                    borderRadius: (theme) => theme.shape.borderRadius + "px",
                }}
            />
            <Box
                sx={{
                    height: "100px",
                    width: "100%",
                    background: (theme) => theme.palette.background.default,
                    borderRadius: (theme) => theme.shape.borderRadius + "px",
                }}
            />
            <FormComposable fields={map} formState={formState} />
        </Stack>
    )
}
