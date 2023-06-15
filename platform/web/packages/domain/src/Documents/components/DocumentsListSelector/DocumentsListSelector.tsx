import {Evidence} from "domain-components";
import {Stack} from "@mui/material";
import {FormComposable, FormComposableField, useFormComposable} from "@smartb/g2";
import {useMemo} from "react";
import {useTranslation} from "react-i18next";

export interface DocumentsListSelectorProps {
    isLoading: boolean
}

export const DocumentsListSelector = (props: DocumentsListSelectorProps) => {
    const { isLoading } = props
    const { t } = useTranslation()
    const formState = useFormComposable({
        onSubmit: () => { },
        isLoading: isLoading,
        readonly: false,
    })

    const fields = useMemo((): FormComposableField<keyof Evidence>[] => [{
        name: "file",
        type: "select",
        params: {
            placeholder: t("chooseFile"),
            //options: getFileNameOptions(t)
        }
    }], [])

    return (
        <Stack>
            <FormComposable fields={fields} formState={formState} />
        </Stack>
    )
}
