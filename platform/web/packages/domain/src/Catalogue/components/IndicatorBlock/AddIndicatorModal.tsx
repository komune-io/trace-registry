import { FormComposable, FormComposableField, useFormComposable } from '@komune-io/g2'
import { TmsPopUp, SearchIcon } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { CatalogueDraft } from '../../model'

interface AddIndicatorModalProps {
    open: boolean
    onClose: () => void
    draft?: CatalogueDraft
}

export const AddIndicatorModal = (props: AddIndicatorModalProps) => {
    const { open, onClose, draft } = props
    const { t } = useTranslation()

    const contextualFields = useMemo(() => ({
        minValue: {
            name: "minValue",
            type: "textField",
            label: t("minValue"),
            required: true
        } as FormComposableField,
        maxValue: {
            name: "maxValue",
            type: "textField",
            label: t("maxValue"),
            required: true
        } as FormComposableField,
        value: {
            name: "value",
            type: "textField",
            label: t("value"),
            required: true
        } as FormComposableField,
        context: {
            name: "context",
            type: "textField",
            label: t("context") + " " + t("optional"),
            required: false
        } as FormComposableField
    }), [t])

    const formState = useFormComposable({
        onSubmit: () => onClose()
    })

    const fields = useMemo((): FormComposableField[] => [{
        name: "type",
        type: "autoComplete",
        label: t("type"),
        params: {
            popupIcon: <SearchIcon style={{ transform: "none" }} />,
            className: "autoCompleteField",
            options: [],
            noOptionsText: t("catalogues.noSolution"),
            optionsResultLimit: 50
        },
        required: true
    }], [t, draft, formState.values.type])


    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t("catalogues.createIndicatorBlock")}
            onSave={formState.submitForm}
            onCancel={onClose}
        >
            <FormComposable
                fields={fields}
                formState={formState}
                fieldsStackProps={{
                    sx: {
                        gap: 4,
                        "& .autoCompleteField .MuiAutocomplete-popupIndicator": {
                            transform: "none !important"
                        }
                    }
                }}
            />
        </TmsPopUp>
    )
}

