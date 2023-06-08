import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {
    TransactionCertificateSummary,
    TransactionPdfCertificate,
    useAssetTransactionGetQuery,
} from "domain-components";
import {AppPage} from "template";
import {Button, Section} from "@smartb/g2";
import {useRoutesDefinition} from "components";
import {ArrowBackIosNewRounded} from "@mui/icons-material";
import {Stack} from "@mui/material";
import {useCallback} from "react";
import {config} from "domain-components/src/config";

export interface TransactionViewProps {
}

export const TransactionView = (_: TransactionViewProps) => {
    const { projectId, transactionId } = useParams()
    const { t } = useTranslation()
    const transactionQuery = useAssetTransactionGetQuery({ query: { transactionId: transactionId ?? "" }, options: { enabled: !!transactionId } })
    const transaction = transactionQuery.data?.item
    const navigate = useNavigate()
    const { projectsProjectIdViewTabAll } = useRoutesDefinition()

    const navigateAssets = useCallback(
        () => {
            projectId && navigate(projectsProjectIdViewTabAll(projectId, "assets"))
        },
        [projectId],
    )


    return (
        <AppPage title={transaction ? t("projects.assets.transactionCertificate", { id: transaction.id }) : t('transaction')} >
            <Section headerProps={{
                content: [{
                    leftPart: projectId ? [
                        <Button sx={{zIndex: 5}} key="goBack" variant="text" startIcon={<ArrowBackIosNewRounded />} onClick={navigateAssets}>{t('back')}</Button>
                    ] : [],
                    rightPart: transaction?.file ? [
                        <Button sx={{
                            color: "white"
                        }} aria-label="download" href={`${config().platform.url}/assetCertificateDownload?transactionId=${transaction.id}`} >
                            {t('download')}
                        </Button>
                    ] : [],
                }],
                sx: {
                    "& .AruiHeader-leftPartContainer": {
                        marginBottom: "-6px"
                    }
                }
            }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"

                >
                    <TransactionCertificateSummary isLoading={transactionQuery.isLoading} transaction={transaction} />
                    <TransactionPdfCertificate transaction={transaction} />
                </Stack>
            </Section>
        </AppPage>
    )
}


