import {Stack} from '@mui/material'
import React from "react";
import {QuantityLabel} from "components";

export interface TransactionDataHistoryProps {
    icon: React.ReactNode,
    count: number
}

export const TransactionDataHistory = (props: TransactionDataHistoryProps) => {
    const { icon, count } = props
    return (
        <Stack direction="row"
               alignItems="center"
               gap={1}
        >
            <QuantityLabel value={count}/>
            {icon}
        </Stack>
    )
}
