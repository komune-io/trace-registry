import { Stack } from '@mui/material'
import { FormComposable, FormComposableField, useFormComposable } from '@komune-io/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Catalogue } from '../../model'
import { TitleDivider } from 'components'

type simplifiedReadonlyFields = Record<string, {
    value: string,
    label: string,
    params?: any
}>

export interface CatalogueDetailsProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CatalogueDetails = (props: CatalogueDetailsProps) => {
    const { catalogue, isLoading } = props

    const { t } = useTranslation()

    const publicationValues = useMemo((): simplifiedReadonlyFields => ({
        publisher: {
            value: "Objectif 100M", //to find in catalogue
            label: t("publisher"),
        },
        creationDate: {
            value: new Date().toLocaleDateString(), //to find in catalogue
            label: t("creation"),
        },
        updateDate: {
            value: catalogue?.modified ? new Date(catalogue.modified).toLocaleDateString() : "", //to find in catalogue
            label: t("update"),
        },
        validator: {
            value: "Nom Prénom", //to find in catalogue
            label: t("validator"),
        },
    }), [catalogue, t])

    const classificationValues = useMemo((): simplifiedReadonlyFields => ({
        access: {
            value: catalogue?.accessRights ?? "",
            label: t("access"),
        },
        licence: {
            value: catalogue?.license ?? "",
            label: t("licence"),
            params: {
                getReadOnlyTextUrl: () => "/" //put licence url
            }
        },
    }), [catalogue, t])

    const versionValues = useMemo((): simplifiedReadonlyFields => ({
        version: {
            value: "v1.8", //to find in catalogue
            label: t("version"),
        },
        lastVersion: {
            value: "v1.79", //to find in catalogue
            label: t("lastVersion"),
        },
        versionNote: {
            value: "Lorem ipsum une note de version, j’ai par exemple corrigé trois fautes sur la fiche et ajouté de belles illustrations.", //to find in catalogue
            label: t("versionNote"),
            params: {
                orientation: "vertical",
            }
        },
    }), [catalogue, t])

    return (
        <Stack
            gap={3}
            sx={{
                width: "320px",
                flexShrink: 0
            }}
        >
            <TitleDivider size='h6' title={t("informations")} />
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
            <DetailsForm
                isLoading={isLoading}
                title={t("versionManagement")}
                values={versionValues}
            />
        </Stack>
    )
}


interface DetailsFormProps {
    title: string
    values: Record<string, {
        value: string,
        label: string,
        params?: any
    }>,
    isLoading?: boolean
}

const DetailsForm = (props: DetailsFormProps) => {
    const { title, values, isLoading } = props

    const initialValues = useMemo(() => {
        const res: Record<string, string> = {}
        Object.keys(values).forEach((key) => {
            res[key] = values[key].value
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
        const [key, { label, params }] = value
        return {
            name: key,
            type: "textField",
            label,
            params: {
                orientation: "horizontal",
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