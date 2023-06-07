import {FormComposable, FormComposableField, useFormComposable} from '@smartb/g2'
import {Divider, Stack, Typography} from '@mui/material'
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {Project, Transaction} from 'domain-components';

export interface ProjectImpactDetailsProps {
    isLoading: boolean
    project?: Project
    transaction?:  Transaction
}

export const AssetsImpactDetails = (props: ProjectImpactDetailsProps) => {
    let { isLoading, project, transaction } = props
    const { t } = useTranslation()

    const formState = useFormComposable({
        isLoading: isLoading,
        readonly: true,
        emptyValueInReadonly: "-",
        formikConfig:{
            initialValues:{
                ...project,
                ...transaction,
                amount : transaction ? transaction?.quantity + " " + transaction?.unit : "-"
            }
        }
    })

    const fields = useMemo((): FormComposableField<keyof Project | keyof Transaction | "projectPartner"| "amount" >[] => [{
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
            name: "amount",
            type: "textField",
            label: t('amount'),
            params: {
                orientation: "horizontal"
            }
        },
        {
            name: "projectPartner", // attente du back
            type: "textField",
            label: t('projects.partner'),
            params: {
                orientation: "horizontal"
            }
        }], [t])

    return (
        <Stack gap={1}>
            <Typography variant="h5" >{t("projects.assets.titles.impactDetails")}</Typography>
            <Divider />
            <FormComposable fields={fields} formState={formState} />
        </Stack>
    )
}
