import {Box, Divider, Typography} from "@mui/material";
import {FormComposable, FormComposableField, useFormComposable} from "@smartb/g2";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {Project, Transaction} from "domain-components";
import {ArrowUpwardRounded, CompareArrowsRounded, DownloadRounded} from "@mui/icons-material";
import {TransactionDataHistory} from "./TransactionDataHistory";


export interface ProjectTransactionHistoryProps {
    isLoading: boolean
    project?: Project
    transaction?: Transaction
}

export const AssetsTransactionHistory = (props: ProjectTransactionHistoryProps) => {
    const { isLoading, project, transaction } = props

    const { t } = useTranslation()

    const formState = useFormComposable({
        isLoading: isLoading,
        readonly: true,
        emptyValueInReadonly: "-",
        formikConfig:{
            initialValues:{
                ...transaction // Pour l'instant inutile car je ne peux pas récupérer du back les différentes infos et il n'y a pas de paramètres aux noms correspondants dans TransactionDTO
            }
        }
    })

    const fields = useMemo((): FormComposableField[] => [{
        name: "dataTons1",
        type: "textField",
        //@ts-ignore
        label: <TransactionDataHistory icon={<ArrowUpwardRounded sx={{color: "#0000008A"}}/>} count={1000000} />,
        defaultValue : t('projects.assets.history1', {resultName: "Odilon", name: project?.name, country: project?.country}),
        params: {
            orientation: "horizontal"
        }
    },{
        name: "dataTons2",
        type: "textField",
        //@ts-ignore
        label: <TransactionDataHistory icon={<CompareArrowsRounded sx={{color: "#0000008A"}}/>} count={1000} />,
        defaultValue : t('projects.assets.sellTo', {name: "Phease"}),
        params: {
            orientation: "horizontal"
        }
    },{
        name: "dataTons3",
        type: "textField",
        //@ts-ignore
        label: <TransactionDataHistory icon={<DownloadRounded sx={{color: "#0000008A"}} />} count={10} />,
        defaultValue : t('projects.assets.retired', {name: "0x....3232"}),
        params: {
            orientation: "horizontal"
        }
    }], [transaction, t])


    return (
        <Box>
            <Typography variant="h5" >{t("projects.assets.transactionHistory")}</Typography>
            <Divider sx={{ margin: "8px 0" }} />

            <FormComposable sx={{
                "& .AruiInputForm-readonlyText" : {
                    textAlign: "right"
                }
            }} fields={fields} formState={formState} />

        </Box>
    )
}












