import {StatusTag} from '@smartb/g2'
import {TransactionTypeValues} from "../../model/";
import {useTranslation} from "react-i18next";

export interface AssetTransactionTypeProps {
    value: string
}


const yellow = "#EDBA27"
const blue = "#3C78D8"
const red = "#D33147"
const green = "#159D50"


export const transactionTypeValuesToColor={
    [TransactionTypeValues.issued()]: green,
    [TransactionTypeValues.transferred()]: blue,
    [TransactionTypeValues.retired()]: red,
    [TransactionTypeValues.offset()]: yellow,
}
export const AssetsTransactionType = (props: AssetTransactionTypeProps) => {
    const { value } = props
    const {t} = useTranslation()

    return (
        <StatusTag label={t(value)} customColor={transactionTypeValuesToColor[value]} />
    )
}
