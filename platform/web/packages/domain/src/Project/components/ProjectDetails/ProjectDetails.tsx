import { Divider, Stack, Typography } from '@mui/material'
import { FormComposable, FormComposableField, useFormComposable } from '@smartb/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Project } from '../../model'

export interface ProjectDetailsProps {
    project?: Project
    isLoading?: boolean
    readonly?: boolean
}

export const ProjectDetails = (props: ProjectDetailsProps) => {
    const { isLoading, project, readonly } = props

    const {t} = useTranslation()

    const formState = useFormComposable({
        onSubmit: () => {},
        isLoading,
        readonly,
        formikConfig: {
            initialValues: project
        }
    })

    const fields = useMemo((): FormComposableField<keyof Project>[] => [{
        name: "country",
        label: t("country"),
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
    },{
        //@ts-ignore
        name: "vvb",
        label: t("vvb"),
        type: "textField",
        params: {
            orientation: "horizontal",
        }
    },{
        //@ts-ignore
        name: "assesssor",
        label: t("assesssor"),
        type: "textField",
        params: {
            orientation: "horizontal",
        }
    },{
        name: "name",
        label: t("project"),
        type: "textField",
        params: {
            orientation: "horizontal",
        }
    },{
        name: "status",
        label: t("project"),
        type: "textField",
        params: {
            orientation: "horizontal",
            readonlyType: "chip",
            getReadonlyChipColor: () => "#038538"
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
        >
            <Typography variant="h6">{t("details")}</Typography>
            <FormComposable formState={formState} fields={fields} />
            <FormComposable formState={formState} fields={description} />
        </Stack>
    )
}
