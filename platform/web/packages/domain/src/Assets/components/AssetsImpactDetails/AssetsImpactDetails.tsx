import {FormComposable, FormComposableField, useFormComposable} from '@smartb/g2'
import {Divider, Stack, Typography} from '@mui/material'
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {Transaction} from 'domain-components';

export interface AssetImpactDetailsProps {
    isLoading: boolean
    transaction?:  Transaction
}

export const AssetsImpactDetails = (props: AssetImpactDetailsProps) => {
    let { isLoading, transaction } = props
    const { t } = useTranslation()

    const formState = useFormComposable({
        isLoading: isLoading,
        readOnly: true,
        emptyValueInReadOnly: "-",
        formikConfig:{
            initialValues:{
                vintage: transaction?.vintage,
                amount : transaction ? transaction?.quantity + " " + transaction?.unit : "-"
            }
        }
    })

    const fields = useMemo((): FormComposableField[] =>  {
        const values: FormComposableField[] = [
            {
                name: "amount",
                type: "textField",
                label: t('amount'),
                params: {
                    orientation: "horizontal"
                }
            },
            {
                name: "vintage",
                type: "textField",
                label: t('vintage'),
                params: {
                    orientation: "horizontal",
                    hidden:  !!transaction?.vintage
                }
            }
        ]
        return values
    }, [t])

    return (
        <Stack gap={1}>
            <Typography variant="h5" >{t("projects.assets.titles.impactDetails")}</Typography>
            <Divider />
            <FormComposable fields={fields} formState={formState} />
        </Stack>
    )
}
