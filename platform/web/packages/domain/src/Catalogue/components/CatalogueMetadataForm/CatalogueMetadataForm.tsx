import { Button, FormComposable, FormComposableField, FormComposableState, useFormComposable } from '@komune-io/g2'
import { Paper } from '@mui/material'
import { SearchIcon } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useCatalogueListAvailableParentsQuery } from '../../api'
import { keepPreviousData } from '@tanstack/react-query'
import { CatalogueTypes } from '../../model'
import { CatalogueCreateCommand } from '../../api/command'

type MetadataField = FormComposableField<keyof CatalogueCreateCommand | "illustration">

interface CatalogueMetadataFormProps {
    type: CatalogueTypes
    onSubmit?: (values: CatalogueCreateCommand & {illustration: File}) => void
    formState?: FormComposableState
}

export const CatalogueMetadataForm = (props: CatalogueMetadataFormProps) => {
    const { type, onSubmit, formState } = props

    const { t, i18n } = useTranslation()

    // search on user input logic is commented first but saved for later evolutions
    // const [searchCatalogues, setSearchCatalogues] = useState("")

    const cataloguePageQuery = useCatalogueListAvailableParentsQuery({
        query: {
        //    title: searchCatalogues,
           language: i18n.language,
           type
        },
        options: {
            // enabled: !!searchCatalogues,
            placeholderData: keepPreviousData
        }
    })

    const fields = useMemo(():MetadataField[] => [{
        name: "parentId",
        type: "autoComplete",
        label: t("parentSheet"),
        params: {
            popupIcon: <SearchIcon style={{transform: "none"}}/>,
            className: "parentField",
            // onInputChange: (_, value) => setSearchCatalogues(value),
            options: cataloguePageQuery.data?.items.map((cat) => ({
                key: cat.id,
                label: cat.title
            })),
            // onBlur: () => setSearchCatalogues(""),
            noOptionsText: t("catalogues.noData"),
        },
        required: true
    }, {
        name: "description",
        type: "textField",
        label: t("description"),
        params: {
            multiline: true,
            rows: 7
        },
        required: true
    }, {
        name: "illustration",
        type: "documentHandler",
        label: t("illustration"),
        params: {
            fileTypesAllowed: ["png", "jpeg", "svg"],
            outterLabel: t("illustration"),
            isRequired: true
        },
        required: true
    },
    ...(type === "100m-solution" ? [{
        name: "themes",
        type: "autoComplete",
        label: t("category"),
        params: {

        },
        required: true
    }] as MetadataField[] : []), {
        name: "accessRights",
        type: "select",
        label: t("access"),
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
        name: "license",
        type: "autoComplete",
        label:  t("licence"),
        params: {

        },
        required: true
    }], [t, type, cataloguePageQuery.data?.items])

    const localFormState = useFormComposable({
        onSubmit
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
                formState={formState ?? localFormState}
                fieldsStackProps={{
                    sx: {
                        gap: 5,
                        "& .parentField .MuiAutocomplete-popupIndicator": {
                            transform: "none !important"
                        }
                    }
                }}
            />
            {!formState && <Button
            onClick={localFormState.submitForm} 
            sx={{
                alignSelf: "flex-end"
            }}
            >
                {t("create")}
            </Button>}
        </Paper>
    )
}
