import {Stack} from '@mui/material'
import {useTranslation} from "react-i18next";
import React from "react";

export interface TransactionDataHistoryProps {
    icon: React.ReactNode,
    count: number
}

export const TransactionDataHistory = (props: TransactionDataHistoryProps) => {
    const { icon, count } = props
    const { t } = useTranslation()


    return (
        <Stack direction="row"
               alignItems="center"
               gap={1}
        >
            {t('dataTons', { count: count })}
            {icon}
        </Stack>
    )
}
