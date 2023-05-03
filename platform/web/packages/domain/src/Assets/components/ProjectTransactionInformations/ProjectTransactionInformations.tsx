import {FormComposable, FormComposableField, useFormComposable} from '@smartb/g2'
import {Box, Divider, IconButton, Stack, Typography} from '@mui/material'
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {Transaction} from "../ProjectTransactionsTable";
import {ProjectTransactionStatus} from "./ProjectTransactionStatus";
import {CloseRounded} from "@mui/icons-material";

export interface ProjectTransactionInformationsProps {
    isLoading: boolean
    transaction?: Transaction
    onBack: () => void
}

export const ProjectTransactionInformations = (props: ProjectTransactionInformationsProps) => {
    let { isLoading, transaction, onBack } = props

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
            readonlyType: "customElement",
            readonlyElement: ProjectTransactionStatus
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
        }], [transaction, t])


    return (
                <Box>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between">
                        <Typography variant="h5" >{t("projects.assets.transactionInformations")}</Typography>
                        <IconButton aria-label="close" onClick={onBack} >
                            <CloseRounded />
                        </IconButton>
                    </Stack>
                    <Divider sx={{ margin: "8px 0" }} />

                    <Typography sx={{ marginBottom: "40px"}}>{t("projects.assets.transaction", { count: 6 })}</Typography>
                    <FormComposable fields={fields} formState={formStatebis} sx={{ margin: "40px 0" }}/>

                </Box>
    )
}
