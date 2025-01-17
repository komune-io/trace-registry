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
            label: "Publicateur",
        },
        creationDate: {
            value: new Date().toLocaleDateString(), //to find in catalogue
            label: "Création",
        },
        updateDate: {
            value: new Date().toLocaleDateString(), //to find in catalogue
            label: "Mise à jour",
        },
        validator: {
            value: "Nom Prénom", //to find in catalogue
            label: "Validateur",
        },
    }), [catalogue])

    const classificationValues = useMemo((): simplifiedReadonlyFields => ({
        access: {
            value: "Public", //to find in catalogue
            label: "Accès",
        },
        licence: {
            value: "ODBL 1.0", //to find in catalogue
            label: "Licence",
            params: {
                getReadOnlyTextUrl: () => "/" //put licence url
            }
        },
    }), [catalogue])

    const versionValues = useMemo((): simplifiedReadonlyFields => ({
        version: {
            value: "v1.8", //to find in catalogue
            label: "Version",
        },
        lastVersion: {
            value: "v1.79", //to find in catalogue
            label: "Version précédente",
        },
        versionNote: {
            value: "Lorem ipsum une note de version, j’ai par exemple corrigé trois fautes sur la fiche et ajouté de belles illustrations.", //to find in catalogue
            label: "Version note",
            params: {
                orientation: "vertical",
            }
        },
    }), [catalogue])

    return (
        <Stack
            gap={3}
            sx={{
                width: "320px"
            }}
        >
            <TitleDivider size='h6' title={t("informations")} />
            <DetailsForm
                isLoading={isLoading}
                title='Publication'
                values={publicationValues}
            />
            <DetailsForm
                isLoading={isLoading}
                title='Classification'
                values={classificationValues}
            />
            <DetailsForm
                isLoading={isLoading}
                title='Version Management'
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