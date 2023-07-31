import {FormComposable, FormComposableField, useFormComposable} from '@smartb/g2'
import {Divider, Stack, Typography} from '@mui/material'
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {Transaction, transactionStatusValuesOption} from 'domain-components';

export interface ProjectTransactionDetailsProps {
    isLoading: boolean
    transaction?: Transaction
}

export const AssetsTransactionDetails = (props: ProjectTransactionDetailsProps) => {
    let { isLoading, transaction } = props
    const { t } = useTranslation()

    const formState = useFormComposable({
        isLoading: isLoading,
        readOnly: true,
        emptyValueInReadOnly: "-",
        formikConfig:{
            initialValues:{
                ...transaction
            }
        }
    })

    const fields = useMemo((): FormComposableField<keyof Transaction>[] =>
        [{
            name: "date",
            type: "datePicker",
            label: t('offsetDate'),
            params: {
                // @ts-ignore
                orientation: "horizontal"
            }
        },
        {
            name: "by",
            type: "textField",
            label: t('offsettedBy'),
            params: {
                orientation: "horizontal"
            }
        },
        {
            name: "to",
            type: "textField",
            label: t('offsettedFor'),
            params: {
                orientation: "horizontal"
            }
        },
        {
            name: "status",
            type: "select",
            label: t('status'),
            params: {
                orientation: "horizontal",
                options: transactionStatusValuesOption
            }
        }], [t, transaction?.status])

    return (
        <Stack gap={1}>
            <Typography variant="h5" >{t("projects.assets.transactionDetails")}</Typography>
            <Divider/>
            <Typography sx={{marginBottom : (theme) => `${theme.spacing(2)}`}}>{t("projects.assets.transactionId", { id: transaction?.id })}</Typography>
            <FormComposable fields={fields} formState={formState}/>
        </Stack>
    )
}