import {Option, StatusTag} from '@smartb/g2'
import {TransactionStatusValues} from "../../model";
import {useTranslation} from "react-i18next";

export interface AssetsTransactionStatusProps {
    value: string
}


const yellow = "#EDBA27"
const blue = "#3C78D8"
const red = "#D33147"
const green = "#159D50"


export const transactionStatusValuesToColor={
    [TransactionStatusValues.cancelled()]: red,
    [TransactionStatusValues.deleted()]: red,
    [TransactionStatusValues.drafted()]: yellow,
    [TransactionStatusValues.pending()]: blue,
    [TransactionStatusValues.validated()]: green,
    [TransactionStatusValues.submitted()]: blue,
}

export const transactionStatusValuesOption: Option[]= [
  {label: "Cancelled", key: TransactionStatusValues.cancelled()},
    {label: "Deleted", key: TransactionStatusValues.deleted()},
    {label: "Drafted", key: TransactionStatusValues.drafted()},
    {label: "Pending", key: TransactionStatusValues.pending()},
    {label: "Validated", key: TransactionStatusValues.validated()},
    {label: "Submitted", key: TransactionStatusValues.submitted()}
]
export const AssetsTransactionStatus = (props: AssetsTransactionStatusProps) => {
    const { value } = props
    const {t} = useTranslation()

    return (
        <StatusTag label={t(value)} customColor={transactionStatusValuesToColor[value]} />
    )
}
