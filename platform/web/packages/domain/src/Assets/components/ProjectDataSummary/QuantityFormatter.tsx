import {formatNumber} from "@smartb/g2";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

export interface QuantityFormatterProps {
    value: number
}

export const QuantityFormatter = (props: QuantityFormatterProps) => {
    const { value } = props
    const { t } = useTranslation()

    return (
        <Typography>
            {formatNumber(value, "en")} {t("tons")}
        </Typography>

    )
}
