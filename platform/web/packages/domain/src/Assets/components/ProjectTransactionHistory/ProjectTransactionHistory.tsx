import {Box, Divider, Typography} from "@mui/material";
import {FormComposable, FormComposableField, useFormComposable} from "@smartb/g2";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {Project} from "../../../Project";




export interface ProjectTransactionHistoryProps {
    isLoading: boolean
    project?: Project
}

export const ProjectTransactionHistory = (props: ProjectTransactionHistoryProps) => {
    const { isLoading, project } = props

    const { t } = useTranslation()

    const formStatebis = useFormComposable({
        isLoading: isLoading,
        readonly: true,
        emptyValueInReadonly: "empty",
    })

    const fields = useMemo((): FormComposableField[] => [{
        name: "dataTons1",
        type: "textField",
        label: t('projects.assets.dataTons', { count: 1000000 }),
        defaultValue : t('projects.assets.history1', {name: project?.name, country: project?.country}),
        params: {
            orientation: "horizontal",
            sx:{
                textAlign: "right"
            }
        }
    },{
        name: "dataTons2",
        type: "textField",
        label: t('projects.assets.dataTons', { count: 100 }),
        defaultValue : t('projects.assets.sellTo', {name: "Phease"}),
        params: {
            orientation: "horizontal"
        }
    }], [])


    return (
        <Box>
            <Typography variant="h5" >{t("projects.assets.history")}</Typography>
            <Divider sx={{ margin: "8px 0" }} />
            <FormComposable fields={fields} formState={formStatebis} />

        </Box>
    )
}












