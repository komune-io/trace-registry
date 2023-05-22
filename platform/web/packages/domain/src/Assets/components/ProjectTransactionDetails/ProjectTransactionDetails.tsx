import {FormComposable, FormComposableField, Link, useFormComposable} from '@smartb/g2'
import {Box, Divider, Stack, Typography} from '@mui/material'
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {ProjectTransactionStatus, Transaction} from 'domain-components';
import {config} from "../../../config";

export interface ProjectTransactionDetailsProps {
    isLoading: boolean
    transaction?: Transaction
}

export const ProjectTransactionDetails = (props: ProjectTransactionDetailsProps) => {
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
                readonlyElement: ProjectTransactionStatus
            }
        },
        {
            name: "retirementDate", // même name en attendant le back
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
        <Box>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography variant="h5" >{t("projects.assets.transactionDetails")}</Typography>
            </Stack>
            <Divider sx={{ margin: "8px 0" }} />
            <Link
                sx={{ marginBottom: "40px"}}
                href={`${config().platform.url}/assetCertificateDownload?transactionId=${transaction?.id}`}
                target="_blank"
                rel="noopener"
                underline="hover"
            >
                {t("projects.assets.transactionId", { id: transaction?.id })}
            </Link>
            <FormComposable fields={fields} formState={formState} sx={{ margin: "40px 0" }}/>
        </Box>
    )
}