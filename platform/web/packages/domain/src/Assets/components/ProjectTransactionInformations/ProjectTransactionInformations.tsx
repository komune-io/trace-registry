import {FormComposable, FormComposableField, useFormComposable} from '@smartb/g2'
import {Box, Divider, Typography} from '@mui/material'
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {Transaction} from "../ProjectTransactionsTable";

export interface ProjectTransactionInformationsProps {
    isLoading: boolean
    transaction?: Transaction
}

export const ProjectTransactionInformations = (props: ProjectTransactionInformationsProps) => {
    const { isLoading, transaction } = props

    const { t } = useTranslation()

    const formStatebis = useFormComposable({
        isLoading: isLoading,
        readonly: true,
        emptyValueInReadonly: "empty",
    })


    const fields = useMemo((): FormComposableField[] => [{
        name: "status",
        type: "textField",
        label: t('status'),
        defaultValue : "Withdraw",
        params: {
            orientation: "horizontal",
            readonlyType: 'chip'
        }
    },
        {
            name: "issuanceDate",
            type: "textField",
            label: t('projects.assets.issuanceDate'),
            defaultValue : "6/02/2023",
            params: {
                orientation: "horizontal"
            }
        },
        {
            name: "retirementDate",
            type: "textField",
            label: t('projects.assets.retirementDate'),
            defaultValue : "7/10/2023",
            params: {
                orientation: "horizontal"
            }
        }], [transaction])


    return (
                <Box>
                    <Typography variant="h5" >{t("projects.assets.transactionInformations")}</Typography>
                    <Divider sx={{ margin: "8px 0" }} />

                    <Typography sx={{ marginBottom: "40px"}}>{t("projects.assets.transaction", { count: 6 })}</Typography>
                    <FormComposable fields={fields} formState={formStatebis} sx={{ margin: "40px 0" }}/>

                </Box>
    )
}
