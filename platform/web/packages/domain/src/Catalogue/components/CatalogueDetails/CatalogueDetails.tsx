import {Stack} from '@mui/material'
import {
    AutoFormData,
    autoFormFormatter,
    BackAutoFormData,
    FormComposable,
    FormComposableField,
    getIn,
    setIn,
    useAutoFormState,
    useFormComposable
} from '@komune-io/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {Catalogue, CatalogueRef} from '../../model'
import {Co2Counter, TitleDivider} from 'components'
import {useCatalogueCo2Counter} from '../../api'

type simplifiedReadonlyFields = Record<string, {
    value?: any,
    values?: any[],
    label?: string,
    params?: any
}>

export interface CatalogueDetailsProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CatalogueDetails = (props: CatalogueDetailsProps) => {
    const { catalogue, isLoading } = props

    const { t } = useTranslation()

    const formData = useMemo(() => catalogue?.structure?.metadataForm ? autoFormFormatter(catalogue?.structure?.metadataForm as BackAutoFormData) : undefined, [catalogue])

    const metadataFields = useMemo(() => formData?.sections.map((section) => {
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
    }), [formData, catalogue])

    const publicationValues = useMemo((): simplifiedReadonlyFields => ({
        publisher: {
            value: catalogue?.creatorOrganization?.name,
            label: t("publisher"),
        },
        creationDate: {
            value: catalogue?.issued ? new Date(catalogue.issued).toLocaleDateString() : "",
            label: t("creation"),
        },
        updateDate: {
            value: catalogue?.modified ? new Date(catalogue.modified).toLocaleDateString() : "",
            label: t("update"),
        },
        validator: {
            value: catalogue?.validatorOrganization?.name,
            label: t("validator"),
        },
    }), [catalogue, t])

    const classificationValues = useMemo((): simplifiedReadonlyFields => ({
        access: {
            value: catalogue?.accessRights ?? "",
            label: t("access"),
        },
        licence: {
            value: catalogue?.license?.name ?? "",
            label: t("licence"),
            params: {
                getReadOnlyTextUrl: catalogue?.license?.url ? () => catalogue?.license?.url : undefined
            }
        },
    }), [catalogue, t])

    // const versionValues = useMemo((): simplifiedReadonlyFields => ({
    //     version: {
    //         value: "v1.8", //to find in catalogue
    //         label: t("version"),
    //     },
    //     lastVersion: {
    //         value: "v1.79", //to find in catalogue
    //         label: t("lastVersion"),
    //     },
    //     versionNote: {
    //         value: "Lorem ipsum une note de version, j’ai par exemple corrigé trois fautes sur la fiche et ajouté de belles illustrations.", //to find in catalogue
    //         label: t("versionNote"),
    //         params: {
    //             orientation: "vertical",
    //         }
    //     },
    // }), [catalogue, t])

    const count = useCatalogueCo2Counter(catalogue)
    return (
        <Stack
            gap={3}
            sx={{
                width: "280px",
                flexShrink: 0
            }}
        >
            <TitleDivider size='h3' title={t("informations")} />
            {count && <Co2Counter
                count={count}
            />}
            {metadataFields}
            <DetailsForm
                isLoading={isLoading}
                title={t("publication")}
                values={publicationValues}
            />
            <DetailsForm
                isLoading={isLoading}
                title={t("classification")}
                values={classificationValues}
            />
            {/*  <DetailsForm
                isLoading={isLoading}
                title={t("versionManagement")}
                values={versionValues}
            /> */}
        </Stack>
    )
}

interface AutoDetailsFormProps {
    formData: AutoFormData
    fields: FormComposableField[]
    catalogue?: Catalogue
    title: string
}

const AutoDetailsForm = (props: AutoDetailsFormProps) => {
    const { fields, title, formData, catalogue } = props

    const initialValues = useMemo(() => {
        let values = {}
        fields.map((field) => {
            const { name } = field
            const value = getIn(catalogue, name)
            if (value) {
                if (Array.isArray(value) && !!value[0].id) {
                    values = setIn(values, name, value.map((ref) => ref.id))
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
            if (Array.isArray(value)) return  value.length === 0
            return value == undefined || value === ''
        })
    }, [fields, formstate.values])

    if (areFieldsEmpty) return null
    return <Stack
        gap={1.5}
    >
        {title && <TitleDivider size='subtitle1' title={title} />}
        <FormComposable
            fields={fields}
            formState={formstate}
        />
    </Stack>
}


interface DetailsFormProps {
    title: string
    values: simplifiedReadonlyFields,
    isLoading?: boolean
}

const DetailsForm = (props: DetailsFormProps) => {
    const { title, values, isLoading } = props

    const initialValues = useMemo(() => {
        const res: Record<string, string> = {}
        Object.keys(values).forEach((key) => {
            res[key] = values[key].value ?? values[key].values
        })
        return res
    }, [])

    const formState = useFormComposable({
        isLoading,
        readOnly: true,
        formikConfig: {
            initialValues
        }
    })

    const fields = useMemo(() => Object.entries(values).map((value): FormComposableField => {
        const [key, { label, values, params }] = value
        return {
            name: key,
            type: !!values ? 'select' : "textField",
            label,
            params: {
                orientation: label ? "horizontal" : "vertical",
                ...params
            }
        }
    }), [values])

    return <Stack
        gap={1.5}
    >
        <TitleDivider size='subtitle1' title={title} />
        <FormComposable
            fields={fields}
            formState={formState}
        />
    </Stack>
}
