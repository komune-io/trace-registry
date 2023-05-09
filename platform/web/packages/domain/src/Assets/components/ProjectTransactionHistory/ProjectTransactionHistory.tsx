import {Box, Divider, Stack, Typography} from "@mui/material";
import {FormComposable, FormComposableField, useFormComposable} from "@smartb/g2";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {Project, Transaction} from "domain-components";
import {ArrowUpwardRounded, CompareArrowsRounded, DownloadRounded} from "@mui/icons-material";



export interface ProjectTransactionHistoryProps {
    isLoading: boolean
    project?: Project
    transaction?: Transaction
}

export const ProjectTransactionHistory = (props: ProjectTransactionHistoryProps) => {
    const { isLoading, project, transaction } = props

    const { t } = useTranslation()

    const formStatebis = useFormComposable({
        isLoading: isLoading,
        readonly: true,
        emptyValueInReadonly: "empty",
    })

    const fields = useMemo((): FormComposableField[] => [{
        name: "dataTons1",
        type: "textField",
        //@ts-ignore
        label:
            <Stack direction="row"
            alignItems="center"
            gap={1}
            >
                {t('projects.assets.dataTons', { count: 1000000 })}
                <ArrowUpwardRounded sx={{color: "#0000008A"}}/>
            </Stack> ,
        defaultValue : t('projects.assets.history1', {resultName: "Odilon", name: project?.name, country: project?.country}),
        params: {
            orientation: "horizontal"
        }
    },{
        name: "dataTons2",
        type: "textField",
        //@ts-ignore
        label:
            <Stack direction="row"
                   alignItems="center"
                   gap={1}
            >
                {t('projects.assets.dataTons', { count: 100 })}
                <CompareArrowsRounded sx={{color: "#0000008A"}}/>
            </Stack> ,
        defaultValue : t('projects.assets.sellTo', {name: "Phease"}),
        params: {
            orientation: "horizontal"
        }
    },{
        name: "dataTons3",
        type: "textField",
        //@ts-ignore
        label:
            <Stack direction="row"
                   alignItems="center"
                   gap={1}
            >
                {t('projects.assets.dataTons', { count: 10 })}
                <DownloadRounded sx={{color: "#0000008A"}} />
            </Stack> ,
        defaultValue : t('projects.assets.retired', {name: "0x....3232"}),
        params: {
            orientation: "horizontal"
        }
    }], [transaction])


    return (
        <Box>
            <Typography variant="h5" >{t("projects.assets.history")}</Typography>
            <Divider sx={{ margin: "8px 0" }} />

            <FormComposable sx={{
                "& .AruiInputForm-readonlyText" : {
                    textAlign: "right"
                }
            }} fields={fields} formState={formStatebis} />

        </Box>
    )
}












