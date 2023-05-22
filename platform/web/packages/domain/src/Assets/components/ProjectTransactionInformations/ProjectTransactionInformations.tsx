import {Button, FormComposable, FormComposableField, Link, useFormComposable} from '@smartb/g2'
import {Box, Divider, IconButton, Stack, Typography} from '@mui/material'
import {useCallback, useMemo} from "react";
import {useTranslation} from "react-i18next";
import {ProjectTransactionStatus} from "./ProjectTransactionStatus";
import {CloseRounded} from "@mui/icons-material";
import {Project, Transaction} from 'domain-components';
import {config} from "../../../config";
import {useRoutesDefinition} from "components";
import {useNavigate} from "react-router-dom";

export interface ProjectTransactionInformationsProps {
    isLoading: boolean
    transaction?: Transaction
    onBack: () => void
    project : Project
}

export const ProjectTransactionInformations = (props: ProjectTransactionInformationsProps) => {
    let { isLoading, transaction, project, onBack } = props

    const { t } = useTranslation()
    const { projectsProjectIdTransactionsTransactionIdView } = useRoutesDefinition()
    const navigate = useNavigate();
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

    const fields = useMemo((): FormComposableField<keyof Transaction | "issuanceDate" | "retirementDate">[] =>
        [{ // enlever | "issuanceDate" | "retirementDate", quand back accessible
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
        }], [transaction, t])

    const transactionLink = useCallback( () => {
                navigate(projectsProjectIdTransactionsTransactionIdView(project.id, transaction ? transaction.id : "null"))
        },[])

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
                    <Button onClick={transactionLink} >
                        {t("projects.assets.certificate")}
                    </Button>
                </Box>
    )
}
