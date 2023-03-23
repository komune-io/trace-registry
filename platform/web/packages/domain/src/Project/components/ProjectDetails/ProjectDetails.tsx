import { Divider, Stack, Typography } from '@mui/material'
import { FormComposable, FormComposableField, FormComposableState } from '@smartb/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Project } from '../../model'
import { ProjectStatus } from '../ProjectTable/ProjectStatus'

export interface ProjectDetailsProps {
    formState: FormComposableState
}

export const ProjectDetails = (props: ProjectDetailsProps) => {
    const { formState } = props

    const { t } = useTranslation()

    const fields = useMemo((): FormComposableField<keyof Project | "vvb.name">[] => [{
        name: "country",
        label: t("origin"),
        type: "select",
        params: {
            orientation: "horizontal",
        }
    }, {
        name: "proponent",
        label: t("proponent"),
        type: "textField",
        params: {
            orientation: "horizontal",
        }
    }, {
        name: "vvb.name",
        label: t("vvb"),
        type: "textField",
        params: {
            orientation: "horizontal",
        }
    }, {
        name: "assessor",
        label: t("assesssor"),
        type: "textField",
        params: {
            orientation: "horizontal",
        }
    }, {
        name: "name",
        label: t("project"),
        type: "textField",
        params: {
            orientation: "horizontal",
        }
    }, {
        name: "status",
        label: t("status"),
        type: "textField",
        params: {
            orientation: "horizontal",
            readonlyType: "customElement",
            readonlyElement: ProjectStatus
        }
    }], [t])

    const description = useMemo((): FormComposableField<keyof Project>[] => [{
        name: "description",
        label: t("projects.details"),
        type: "textField",
        params: {
            multiline: true,
            rows: 8
        }
    }], [t])

    return (
        <Stack
            gap={2}
            divider={<Divider flexItem />}
            sx={{
                flexGrow: 1,
                flexBasis: 0
            }}
        >
            <Typography variant="h6">{t("details")}</Typography>
            <FormComposable
                sx={{
                    "& .AruiForm-field": {
                        justifyContent: "flex-start"
                    },
                    "& .AruiForm-field > *": {
                        flexGrow: 1,
                        flexBasis: 0
                    }
                }}
                formState={formState}
                fields={fields}
            />
            <FormComposable formState={formState} fields={description} />
        </Stack>
    )
}
