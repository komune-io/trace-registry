import { FormComposable, FormComposableField, FormComposableState } from '@komune-io/g2'
import { SearchIcon, TitleDivider } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

interface GraphDatasetFormProps {
    formState: FormComposableState
}

export const GraphDatasetForm = (props: GraphDatasetFormProps) => {
    const { formState } = props

    const { t } = useTranslation()

    const name = useMemo((): FormComposableField[] => [{
        name: "name",
        label: t("name"),
        type: "textField",
        required: true
    }], [t])

    const projects = useMemo((): FormComposableField[] => [{
        name: "dataset",
        type: "autoComplete",
        label: t("co2Projects"),
        params: {
            popupIcon: <SearchIcon style={{ transform: "none" }} />,
            className: "autoCompleteField",
            options: [],
            noOptionsText: t("catalogues.noOrganization"),
            optionsResultLimit: 50
        },
        required: true
    }], [t])

    return (
        <>
            <FormComposable
                fields={name}
                formState={formState}
                sx={{
                    "& .autoCompleteField .MuiAutocomplete-popupIndicator": {
                        transform: "none !important"
                    }
                }}
            />
            <TitleDivider
                title={"1. " + t("catalogues.chooseDataset")}
                size="subtitle1"
            />
            <FormComposable
                fields={projects}
                formState={formState}
            />
        </>
    )
}
