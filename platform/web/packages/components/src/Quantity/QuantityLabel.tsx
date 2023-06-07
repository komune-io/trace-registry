import {formatNumber} from "@smartb/g2";
import {useTranslation} from "react-i18next";

export interface QuantityLabelProps {
    value: number
}

export const QuantityLabel = (props: QuantityLabelProps) => {
    const { value } = props
    const { t } = useTranslation()
    return (
        <>
            {formatNumber(value, "en")} {value > 1 ? t("tons") : t("ton")}
        </>
    )
}
