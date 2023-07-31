import { Box } from '@mui/material'
import { FormComposable, FormComposableField, FormComposableState } from '@smartb/g2'
import { getSdgsOptions, Sdg, ProjectType, getProjectTypesOptions } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Project } from '../../model'

export interface ProjectBannerProps {
    formState: FormComposableState
}

const SdgElement = ({ valueKey }: { valueKey: number }) => {
    return (
        <Sdg sdgId={Number(valueKey)} size="extraLarge" />
    )
}


const TypeElement = ({ valueKey }: { valueKey: number }) => {
    return (
        <ProjectType projectType={valueKey} labelProps={{variant: "h6", sx: {color: "#666560"}}} size="large" />
    )
}

export const ProjectBanner = (props: ProjectBannerProps) => {
    const { formState } = props

    const { t } = useTranslation()
    const fields = useMemo((): FormComposableField<keyof Project>[] => [{
        name: "type",
        type: "select",
        label: t("projects.type"),
        params: {
            readOnlyType: "customElement",
            readOnlyElement: TypeElement,
            options: getProjectTypesOptions(t)
        }
    }, {
        name: "sdgs",
        type: "select",
        label: t("sdgsImpact"),
        params: {
            readOnlyType: "customElement",
            multiple: true,
            readOnlyElement: SdgElement,
            options: getSdgsOptions(t)
        }
    }], [t])

    return (
        <Box
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
                },
                "& .AruiForm-field": {
                    flexGrow: 1,
                    flexBasis: 0,
                    maxWidth: "50%"
                }
            }}
        >
            <FormComposable formState={formState} fields={fields} fieldsStackProps={{ flexDirection: "row", justifyContent: "space-between" }} />
        </Box>
    )
}
