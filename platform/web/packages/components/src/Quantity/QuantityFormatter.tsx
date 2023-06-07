import {Typography} from "@mui/material";
import {QuantityLabel} from "./QuantityLabel";

export interface QuantityFormatterProps {
    value: number
}

export const QuantityFormatter = (props: QuantityFormatterProps) => {
    const { value } = props
    return (
        <Typography>
            <QuantityLabel value={value} />
        </Typography>
    )
}
