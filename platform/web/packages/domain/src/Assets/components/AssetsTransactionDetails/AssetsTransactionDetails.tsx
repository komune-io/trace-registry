import {FormComposable, FormComposableField, useFormComposable} from '@smartb/g2'
import {Divider, Stack, Typography} from '@mui/material'
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {AssetsTransactionStatus, Transaction} from 'domain-components';

export interface ProjectTransactionDetailsProps {
    isLoading: boolean
    transaction?: Transaction
}

export const AssetsTransactionDetails = (props: ProjectTransactionDetailsProps) => {
    let { isLoading, transaction } = props

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

    const fields = useMemo((): FormComposableField<keyof Transaction | "purchasedBy" | "retirementDate">[] =>
        [{ // enlever | "purchasedby" | "retirementDate", quand back accessible
            name: "type",
            type: "textField",
            label: t('status'),
            params: {
                orientation: "horizontal",
                readonlyType: "customElement",
                readonlyElement: AssetsTransactionStatus
            }
        },
        {
            name: "retirementDate",
            type: "textField",
            label: t('retirementDate'),
            params: {
                orientation: "horizontal"
            }
        },
        {
            name: "purchasedBy",
            type: "textField",
            label: t('purchasedBy'),
            params: {
                orientation: "horizontal"
            }
        }], [t])

    return (
        <Stack gap={1}>
            <Typography variant="h5" >{t("projects.assets.transactionDetails")}</Typography>
            <Divider/>
            <Typography sx={{marginBottom : (theme) => `${theme.spacing(2)}`}}>{t("projects.assets.transactionId", { id: transaction?.id })}</Typography>
            <FormComposable fields={fields} formState={formState}/>
        </Stack>
    )
}