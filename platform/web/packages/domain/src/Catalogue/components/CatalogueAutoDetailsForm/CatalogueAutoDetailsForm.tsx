import { AutoFormData, FormComposableField, getIn } from '@komune-io/g2'
import { Catalogue, CatalogueRef } from '../../model'
import { AutoDetailsForm } from './AutoDetailsForm'

export interface CatalogueAutoDetailsFormProps {
    formData?: AutoFormData
    catalogue?: Catalogue
}

export const CatalogueAutoDetailsForm = (props: CatalogueAutoDetailsFormProps) => {
    const { formData, catalogue } = props

    return <>
        {formData?.sections.map((section) => {
            const fields = section.fields.map((field) => {
                type FileType = typeof field.type | "autoComplete-catalogues"

                const type = field.type as FileType

                if (type === "autoComplete-catalogues") {
                    let values = getIn(catalogue, field.name) ?? []
                    values = Array.isArray(values) ? values : [values]
                    return {
                        ...field,
                        type: "select",
                        params: {
                            ...field.params,
                            options: values?.map((ref: CatalogueRef) => ({
                                label: ref.title,
                                key: ref.id,
                                color: ref.structure?.color,
                            })),
                            readOnlyType: "chip"
                        }
                    } as FormComposableField
                }
                return field
            })
            return (
                <AutoDetailsForm
                    key={section.id}
                    fields={fields}
                    formData={formData}
                    catalogue={catalogue}
                    title={section.label ?? ""}
                />
            )
        })}
    </>
}
