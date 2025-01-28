import { Button, FormComposable, FormComposableField, useFormComposable } from '@komune-io/g2'
import { Paper } from '@mui/material'
import { SearchIcon } from 'components'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCataloguePageQuery } from '../../api'
import { keepPreviousData } from '@tanstack/react-query'

interface CatalogueCreationFormProps {
    type: "solution" | "system" | "sector"
    onCreate: (values: any) => void
}

export const CatalogueCreationForm = (props: CatalogueCreationFormProps) => {
    const { type, onCreate } = props

    const { t } = useTranslation()

    const [searchCatalogues, setSearchCatalogues] = useState("")

    const cataloguePageQuery = useCataloguePageQuery({
        query: {
           title: searchCatalogues,
           limit: 20
        },
        options: {
            enabled: !!searchCatalogues,
            placeholderData: keepPreviousData
        }
    })

    const fields = useMemo((): FormComposableField[] => [{
        name: "parent",
        type: "autoComplete",
        label: "Fiche parente",
        params: {
            popupIcon: <SearchIcon style={{transform: "none"}}/>,
            className: "parentField",
            onInputChange: (_, value) => setSearchCatalogues(value),
            options: cataloguePageQuery.data?.items.map((cat) => ({
                key: cat.id,
                label: cat.title
            })),
            // onBlur: () => setSearchCatalogues("")
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
    }], [t, type, cataloguePageQuery.data?.items])

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
                        gap: 5,
                        "& .parentField .MuiAutocomplete-popupIndicator": {
                            transform: "none !important"
                        }
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
