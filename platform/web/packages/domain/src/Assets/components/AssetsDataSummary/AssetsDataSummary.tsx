import {FormComposable, FormComposableField, FormComposableState} from "@smartb/g2";
import {Stack} from "@mui/material";
import React, {useMemo} from "react";
import {QuantityFormatter} from "./QuantityFormatter";


export interface ProjectDataSummaryProps {
    icon: React.ReactNode,
    label: string,
    formState: FormComposableState,
    name: string
}

export const AssetsDataSummary = (props: ProjectDataSummaryProps) => {
    const {icon, label, formState, name} = props

    const fields = useMemo((): FormComposableField[] => [{
        name: name,
        type: "textField",
        label: label,
        params: {
            readonlyType: "customElement",
            readonlyElement: QuantityFormatter
        }
    },
    ], [label])



    return (
        <Stack
            direction="row"
            gap={1}
            sx={{
                padding: "24px 32px",
                background: (theme) => theme.palette.background.default,
                borderRadius: (theme) => theme.shape.borderRadius + "px",
                "& .MuiFormLabel-root": {
                    fontSize: "1.25rem",
                    fontWeight: 500
                },
                "& .MuiStack-root": {
                    gap: (theme) => theme.spacing(1.5)
                }
            }}
        >
            {icon}
            <FormComposable formState={formState} fields={fields} fieldsStackProps={{ flexDirection: "row", justifyContent: "space-between" }} />
        </Stack>
    )

}