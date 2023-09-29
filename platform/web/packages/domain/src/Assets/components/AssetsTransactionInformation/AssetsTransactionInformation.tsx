import {FormComposable, FormComposableField, Link, useFormComposable} from '@smartb/g2'
import {Divider, IconButton, Stack, Typography} from '@mui/material'
import {useCallback, useMemo} from "react";
import {useTranslation} from "react-i18next";
import {CloseRounded} from "@mui/icons-material";
import {AssetsTransactionType, Project, Transaction} from 'domain-components';
import {useRoutesDefinition} from "components";
import {useNavigate} from "react-router-dom";

export interface AssetsTransactionInformationProps {
    isLoading: boolean
    transaction?: Transaction
    onBack: () => void
    project : Project
}

export const AssetsTransactionInformation = (props: AssetsTransactionInformationProps) => {
    let { isLoading, transaction, project, onBack } = props

    const { t } = useTranslation()
    // REMOVE From Here Add GoBack Link
    const { projectsProjectIdTransactionsTransactionIdView } = useRoutesDefinition()
    const navigate = useNavigate();
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

    const fields = useMemo((): FormComposableField<keyof Transaction | "issuanceDate" | "retirementDate">[] =>
        [{ // enlever | "issuanceDate" | "retirementDate", quand back accessible
            name: "type",
            type: "textField",
            label: t('status'),
            params: {
                orientation: "horizontal",
                readOnlyType: "customElement",
                readOnlyElement: AssetsTransactionType
            }
        },
        {
            name: "issuanceDate",
            type: "textField",
            label: t('issuanceDate'),
            params: {
                orientation: "horizontal"
            }
        },
        {
            name: "retirementDate",
            type: "textField",
            label: t('retirementDate'),
            params: {
                orientation: "horizontal"
            }
        }], [t])

    const transactionLink = useCallback( () => {
                navigate(projectsProjectIdTransactionsTransactionIdView(project.id, transaction ? transaction.id : "undefined"))
        },[])

    return (    <Stack gap={1}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Typography variant="h5" >{t("projects.assets.transactionInformation")}</Typography>
                        <IconButton aria-label="close" onClick={onBack} >
                            <CloseRounded />
                        </IconButton>
                    </Stack>
                    <Divider />
                    {t("projects.assets.transactionId", { id: transaction?.id })}
                    <FormComposable fields={fields} formState={formState} sx={{margin : (theme) => `${theme.spacing(2)} 0`}}/>
                    {
                        transaction?.file &&
                        <Link onClick={transactionLink} sx={{cursor: 'pointer'}}>
                            {t("projects.assets.certificate")}
                        </Link>
                    }
                </Stack>
    )
}
