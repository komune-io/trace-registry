import { StatusTag } from '@smartb/g2'
import {transactionTypeValues} from "../../model";

export interface ProjectTransactionStatusProps {
    value: string
}


const yellow = "#CCB43D"
const blue = "#147494"
const red = "#E44258"
const green = "#159D50"


export const transactionTypeValuestoColor={
    [transactionTypeValues.issue()]: blue,
    [transactionTypeValues.transfer()]: green,
    [transactionTypeValues.withdraw()]: red,
    [transactionTypeValues.offset()]: yellow,
}
export const ProjectTransactionStatus = (props: ProjectTransactionStatusProps) => {
    const { value } = props
    return (
        <StatusTag label={value} />
    )
}
