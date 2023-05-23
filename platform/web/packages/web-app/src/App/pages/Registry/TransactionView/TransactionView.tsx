import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {
    Transaction,
    TransactionCertificateSummary,
    TransactionPdfCertificate,
    useProjectGetQuery
} from "domain-components";
import {AppPage} from "template";
import {LinkButton, Section} from "@smartb/g2";
import {useRoutesDefinition} from "components";
import {ArrowBackIosNewRounded} from "@mui/icons-material";
import {Stack} from "@mui/material";

export interface TransactionViewProps {
}

export const TransactionView = (_: TransactionViewProps) => { // Attente Back et rectifier
    const { projectId, /*transactionId*/ } = useParams()
    const { t } = useTranslation()
    const projectQuery = useProjectGetQuery({ query: { id: projectId! } })
    const project = projectQuery.data?.item
    //const transactionQuery = useTransactionGetQuery({ query: { transactionId: transactionId! } })
    //const transaction = transactionQuery.data?.item
    const { projects } = useRoutesDefinition()

    return (
        <AppPage title={t("projects.assets.transactionCertificate", { id: transaction?.id }) ?? t('transaction')} >
            <Section headerProps={{
                content: [{
                    leftPart: [
                        <LinkButton sx={{zIndex: 5}} key="goBack" variant="text" startIcon={<ArrowBackIosNewRounded />} to={projects()}>{t('back')}</LinkButton>
                    ],
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
                    <TransactionCertificateSummary isLoading={isLoading} transaction={transaction} project={project} />
                    <TransactionPdfCertificate transaction={transaction} />
                </Stack>
            </Section>
        </AppPage>
    )
}

//Données temporaires
const isLoading = false
const transaction : Transaction = {
    id:'d3aaf9f7-870f-4453-9ca0-18842dff889d',
    date: 12102003,
    poolId: "poolid",
    unit: "Ton",
    from: 'Rockfeller',
    by: "SmartB",
    type: "Complete",
    quantity: 12.033,
    vintage: "Vintage",
    to: "Odilon"
}
