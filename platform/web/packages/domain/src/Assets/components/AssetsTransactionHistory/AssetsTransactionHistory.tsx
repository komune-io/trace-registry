import {Divider, Stack, Typography} from "@mui/material";
import {FormComposable, FormComposableField, useFormComposable} from "@smartb/g2";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {Project, Transaction} from "domain-components";
import {ArrowUpwardRounded, CompareArrowsRounded, DownloadRounded} from "@mui/icons-material";
import {TransactionDataHistory} from "./TransactionDataHistory";


export interface AssetsTransactionHistoryProps {
    isLoading: boolean
    project?: Project
    transaction?: Transaction
}

export const AssetsTransactionHistory = (props: AssetsTransactionHistoryProps) => {
    const { isLoading, project, transaction } = props

    const { t } = useTranslation()

    const formState = useFormComposable({
        isLoading: isLoading,
        readOnly: true,
        emptyValueInReadOnly: "-",
        formikConfig:{
            initialValues:{
                ...transaction,
                dataTons1 : t('projects.assets.history1', {resultName: "-", name: project?.name, country: project?.country}),
                dataTons2 : t('projects.assets.sellTo', {name: "-"}),
                dataTons3 : t('projects.assets.retired', {name: "-"})
            }
        }
    })

    const fields = useMemo((): FormComposableField[] => [{
        name: "dataTons1",
        type: "textField",
        //@ts-ignore
        label: <TransactionDataHistory icon={<ArrowUpwardRounded sx={{color: "#0000008A"}}/>} count={1000000} />,
        params: {
            orientation: "horizontal"
        }
    },{
        name: "dataTons2",
        type: "textField",
        //@ts-ignore
        label: <TransactionDataHistory icon={<CompareArrowsRounded sx={{color: "#0000008A"}}/>} count={1000} />,
        params: {
            orientation: "horizontal"
        }
    },{
        name: "dataTons3",
        type: "textField",
        //@ts-ignore
        label: <TransactionDataHistory icon={<DownloadRounded sx={{color: "#0000008A"}} />} count={10} />,
        params: {
            orientation: "horizontal"
        }
    }], [])


    return (
        <Stack gap={1}>
            <Typography variant="h5" >{t("projects.assets.transactionHistory")}</Typography>
            <Divider/>
            <FormComposable sx={{
                "& .AruiInputForm-readOnlyText" : {
                    textAlign: "right"
                }
            }} fields={fields} formState={formState} />
        </Stack>
    )
}












