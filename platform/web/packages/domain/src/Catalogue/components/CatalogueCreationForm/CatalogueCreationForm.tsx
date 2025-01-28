import { Button, FormComposable, FormComposableField, useFormComposable } from '@komune-io/g2'
import { Paper } from '@mui/material'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

interface CatalogueCreationFormProps {
    type: "solution" | "system" | "sector"
    onCreate: (values: any) => void
}

export const CatalogueCreationForm = (props: CatalogueCreationFormProps) => {
    const { type, onCreate } = props

    const { t } = useTranslation()

    const fields = useMemo((): FormComposableField[] => [{
        name: "parent",
        type: "autoComplete",
        label: "Fiche parente",
        params: {

        },
        required: true
    }, {
        name: "description",
        type: "textField",
        label: "description",
        params: {
            multiline: true,
            rows: 7
        },
        required: true
    }, {
        name: "illustration",
        type: "documentHandler",
        label: "Illustration",
        params: {
            fileTypesAllowed: ["png", "jpeg", "svg"],
            isRequired: true
        },
        required: true
    },
    ...(type === "solution" ? [{
        name: "category",
        type: "autoComplete",
        label: "catégorie",
        params: {

        },
        required: true
    }] as FormComposableField[] : []), {
        name: "access",
        type: "select",
        label: "Accès",
        params: {
            options: [{
                key: "public",
                label: "Public"
            }, {
                key: "private",
                label: "Privé"
            }]
        },
        required: true
    }, {
        name: "licence",
        type: "autoComplete",
        label: "Licence",
        params: {

        },
        required: true
    }], [t, type])

    const formState = useFormComposable({
        onSubmit: onCreate
    })

    return (
        <Paper
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                p: 4
            }}
        >
            <FormComposable
                fields={fields}
                formState={formState}
                fieldsStackProps={{
                    sx: {
                        gap: 5
                    }
                }}
            />
            <Button
            onClick={formState.submitForm} 
            sx={{
                alignSelf: "flex-end"
            }}
            >
                {t("create")}
            </Button>
        </Paper>
    )
}
