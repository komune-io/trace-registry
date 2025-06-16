import { AutoFormData, formatNumber, FormComposable, FormComposableField, getIn, setIn, useAutoFormState } from "@komune-io/g2"
import { Catalogue } from "../../model"
import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { TitleDivider } from "components"
import { Stack } from "@mui/material"

interface AutoDetailsFormProps {
    formData: AutoFormData
    fields: FormComposableField[]
    catalogue?: Catalogue
    title: string,
}

export const AutoDetailsForm = (props: AutoDetailsFormProps) => {
    const { fields, title, formData, catalogue } = props

    const { i18n } = useTranslation()

    const initialValues = useMemo(() => {
        let values = {}
        fields.map((field) => {
            const { name } = field
            const value = getIn(catalogue, name)
            if (value) {
                if (Array.isArray(value) && !!value[0] && !!value[0].id) {
                    values = setIn(values, name, value.map((ref) => ref.id))
                } else if (!isNaN(Number(value)) && Number(value) > 0) {
                    values = setIn(values, name, formatNumber(Number(value), i18n.language))
                } else {
                    values = setIn(values, name, value.id ?? value)
                }
            }
        })
        return values
    }, [fields, catalogue])

    const formstate = useAutoFormState({
        formData,
        initialValues
    })

    const areFieldsEmpty = useMemo(() => {
        return fields.every((field) => {
            const { name } = field
            const value = getIn(formstate.values, name)
            if (Array.isArray(value)) return value.length === 0
            return value == undefined || value === ''
        })
    }, [fields, formstate.values])

    const fieldsWithUrl = useMemo(() => {
        return fields.map((field) => {
            const { name, params } = field
            const value = getIn(initialValues, name)
            if (typeof value === 'string' && value.startsWith('http')) {
                return {
                    ...field,
                    params: {
                        ...params,
                        getReadOnlyTextUrl: () => value
                    }
                }
            }
            return field
        })
    }, [initialValues, fields])

    if (areFieldsEmpty) return null
    return <Stack
        gap={1.5}
    >
        {title && <TitleDivider size='subtitle1' title={title} />}
        <FormComposable
            fields={fieldsWithUrl}
            formState={formstate}
        />
    </Stack>
}
