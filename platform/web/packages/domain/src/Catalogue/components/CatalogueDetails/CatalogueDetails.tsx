import {Stack} from '@mui/material'
import {autoFormFormatter, BackAutoFormData, FormComposable, FormComposableField, useFormComposable,} from '@komune-io/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {Catalogue} from '../../model'
import {Co2Counter, TitleDivider} from 'components'
import {useCatalogueCo2Counter} from '../../api'
import {CatalogueAutoDetailsForm} from '../CatalogueAutoDetailsForm'

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
            value: t(catalogue?.accessRights ?? ""),
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
            <CatalogueAutoDetailsForm 
                formData={formData}
                catalogue={catalogue}
            />
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
