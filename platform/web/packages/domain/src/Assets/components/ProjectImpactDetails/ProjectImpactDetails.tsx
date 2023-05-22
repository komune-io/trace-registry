import {FormComposable, FormComposableField, useFormComposable} from '@smartb/g2'
import {Box, Divider, Stack, Typography} from '@mui/material'
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {Project} from 'domain-components';

export interface ProjectImpactDetailsProps {
    isLoading: boolean
    project?: Project
}

export const ProjectImpactDetails = (props: ProjectImpactDetailsProps) => {
    let { isLoading, project } = props

    const { t } = useTranslation()

    const formState = useFormComposable({
        isLoading: isLoading,
        readonly: true,
        emptyValueInReadonly: "-",
        formikConfig:{
            initialValues:{
                ...project
            }
        }
    })

    const fields = useMemo((): FormComposableField<keyof Project | "amount">[] => [{

            name: "name",
            type: "textField",
            label: t('project'),
            params: {
                orientation: "horizontal"
            }
        },
        {
            name: "vintage",
            type: "textField",
            label: t('vintage'),
            params: {
                orientation: "horizontal"
            }
        },
        {
            name: "amount", // attente du back
            type: "textField",
            label: t('amount'),
            params: {
                orientation: "horizontal"
            }
        },
        {
            name: "id",
            type: "textField",
            label: t('projects.partner'),
            params: {
                orientation: "horizontal"
            }
        }], [t])

    return (
        <Box>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography variant="h5" >{t("projects.assets.titles.impactDetails")}</Typography>
            </Stack>
            <Divider sx={{ margin: "8px 0" }} />
            <FormComposable fields={fields} formState={formState} sx={{ marginBottom: "40px" }}/>
        </Box>
    )
}
