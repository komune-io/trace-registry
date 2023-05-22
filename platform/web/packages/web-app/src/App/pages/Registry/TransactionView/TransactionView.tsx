import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Transaction, TransactionCertificatePage, useProjectGetQuery} from "domain-components";
import {AppPage} from "template";
import {LinkButton, Section} from "@smartb/g2";
import {useRoutesDefinition} from "components";
import {ArrowBackIosNewRounded} from "@mui/icons-material";

export interface TransactionViewProps {
}

export const TransactionView = (_: TransactionViewProps) => { // Attente Back et rectifier
    const { projectId, /*transactionId*/ } = useParams()
    const { t } = useTranslation()
    const projectQuery = useProjectGetQuery({ query: { id: projectId! } })
    //const transactionQuery = useTransactionGetQuery({ query: { transactionId: transactionId! } })
    const project = projectQuery.data?.item
    //const transaction = transactionQuery.data.
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
                <TransactionCertificatePage isLoading={isLoading} transaction={transaction} project={project} />
            </Section>
        </AppPage>
    )
}

//Données temporaires
const isLoading = false
const transaction : Transaction = {
    id:'da16910d-ed9d-46bb-92df-1aa571b156ba',
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
