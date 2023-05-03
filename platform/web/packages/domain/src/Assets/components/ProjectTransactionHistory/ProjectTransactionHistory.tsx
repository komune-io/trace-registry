import {Box, Divider, Typography} from "@mui/material";
import {FormComposable, FormComposableField, useFormComposable} from "@smartb/g2";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {Project} from "../../../Project";
import {Transaction} from "../ProjectTransactionsTable";




export interface ProjectTransactionHistoryProps {
    isLoading: boolean
    project?: Project
    transaction?: Transaction
}

export const ProjectTransactionHistory = (props: ProjectTransactionHistoryProps) => {
    const { isLoading, project, transaction } = props

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
        defaultValue : t('projects.assets.history1', {resultName: "Odilon", name: project?.name, country: project?.country}),
        params: {
            orientation: "horizontal"
        }
    },{
        name: "dataTons2",
        type: "textField",
        label: t('projects.assets.dataTons', { count: 100 }),
        defaultValue : t('projects.assets.sellTo', {name: "Phease"}),
        params: {
            orientation: "horizontal"
        }
    },{
        name: "dataTons3",
        type: "textField",
        label: t('projects.assets.dataTons', { count: 100 }),
        defaultValue : t('projects.assets.retired', {name: "0x....3232"}),
        params: {
            orientation: "horizontal"
        }
    }], [transaction])


    return (
        <Box>
            <Typography variant="h5" >{t("projects.assets.history")}</Typography>
            <Divider sx={{ margin: "8px 0" }} />
            <FormComposable sx={{
                "& .AruiInputForm-readonlyText" : {
                    textAlign: "right"
                }
            }} fields={fields} formState={formStatebis} />

        </Box>
    )
}












