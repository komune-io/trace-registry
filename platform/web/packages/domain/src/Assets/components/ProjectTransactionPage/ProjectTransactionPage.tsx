import {FormComposable, FormComposableField, useFormComposable} from '@smartb/g2'
import {Box, Divider, Typography} from '@mui/material'
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {Transaction} from "../ProjectTransactionsTable";
import {Project} from "../../../Project";

export interface ProjectTransactionPageProps {
    isLoading: boolean
    project?: Project
    transaction?: Transaction
}

export const ProjectTransactionPage = (props: ProjectTransactionPageProps) => {
    const { isLoading, project, transaction } = props

    const { t } = useTranslation()

    return (
        <Box>
            <Typography variant="h5" >{t("projects.assets.transactionInformations")}</Typography>
            <Divider sx={{ margin: "8px 0" }} />

            <Typography sx={{ marginBottom: "40px"}}>{t("projects.assets.transaction", { count: 6 })}</Typography>
            <FormComposable fields={fields} formState={formStatebis} sx={{ margin: "40px 0" }}/>

        </Box>
    )
}
