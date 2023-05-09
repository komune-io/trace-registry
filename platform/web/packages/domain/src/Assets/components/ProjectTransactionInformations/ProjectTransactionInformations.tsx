import {FormComposable, FormComposableField, useFormComposable} from '@smartb/g2'
import {Box, Divider, IconButton, Stack, Typography} from '@mui/material'
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {ProjectTransactionStatus} from "./ProjectTransactionStatus";
import {CloseRounded} from "@mui/icons-material";
import {Transaction} from 'domain-components';

export interface ProjectTransactionInformationsProps {
    isLoading: boolean
    transaction?: Transaction
    onBack: () => void
}

export const ProjectTransactionInformations = (props: ProjectTransactionInformationsProps) => {
    let { isLoading, transaction, onBack } = props

    const { t } = useTranslation()

    const formState = useFormComposable({
        isLoading: isLoading,
        readonly: true,
        emptyValueInReadonly: "-",
        formikConfig:{
            initialValues:{
                ...transaction
            }
        }
    })

    const fields = useMemo((): FormComposableField<keyof Transaction>[] => [{
        name: "type",
        type: "textField",
        label: t('status'),
        params: {
            orientation: "horizontal",
            readonlyType: "customElement",
            readonlyElement: ProjectTransactionStatus
        }
    },
        {
            name: "date",
            type: "textField",
            label: t('issuanceDate'),
            params: {
                orientation: "horizontal"
            }
        },
        {
            name: "date",
            type: "textField",
            label: t('retirementDate'),
            params: {
                orientation: "horizontal"
            }
        }], [transaction, t])

    return (
                <Box>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Typography variant="h5" >{t("projects.assets.transactionInformations")}</Typography>
                        <IconButton aria-label="close" onClick={onBack} >
                            <CloseRounded />
                        </IconButton>
                    </Stack>
                    <Divider sx={{ margin: "8px 0" }} />

                    <Typography sx={{ marginBottom: "40px"}}>{t("projects.assets.transactionId", { id: transaction?.id })}</Typography>
                    <FormComposable fields={fields} formState={formState} sx={{ margin: "40px 0" }}/>

                </Box>
    )
}
