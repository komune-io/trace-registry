import { Button, FormComposable, FormComposableField, FormComposableState, useFormComposable } from '@komune-io/g2'
import { Paper } from '@mui/material'
import { SearchIcon } from 'components'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { extractCatalogueIdentifierNumber, useCatalogueListAvailableParentsQuery, useCatalogueListAvailableThemesQuery, useLicenseListQuery } from '../../api'
import { keepPreviousData } from '@tanstack/react-query'
import { CatalogueDraft, CatalogueTypes } from '../../model'
import { CatalogueCreateCommand } from '../../api/command'

type MetadataField = FormComposableField<keyof CatalogueCreateCommand | "illustration">

interface CatalogueMetadataFormProps {
    draft?: CatalogueDraft
    type?: CatalogueTypes
    onSubmit?: (values: CatalogueCreateCommand & { illustration: File }) => void
    formState?: FormComposableState
    withTitle?: boolean
}

export const CatalogueMetadataForm = (props: CatalogueMetadataFormProps) => {
    const { type, onSubmit, formState, withTitle = false, draft } = props

    const { t, i18n } = useTranslation()

    // search on user input logic is commented first but saved for later evolutions
    // const [searchCatalogues, setSearchCatalogues] = useState("")

    const cataloguePageQuery = useCatalogueListAvailableParentsQuery({
        query: {
            //    title: searchCatalogues,
            language: draft?.language ?? i18n.language,
            type: type!
        },
        options: {
            enabled: !!type,
            placeholderData: keepPreviousData
        }
    })

    const catalogueThemesQuery = useCatalogueListAvailableThemesQuery({
        query: {
            language: draft?.language ?? i18n.language,
            type: type!
        },
        options: {
            enabled: type === "100m-solution"
        }
    })

    const licenseListQuery = useLicenseListQuery({
        query: {
        }
    })

    const fields = useMemo((): MetadataField[] => [...(withTitle ? [{
        name: "title",
        type: "textField",
        label: t("title"),
        required: true
    }] as MetadataField[] : []),{
        name: "parentId",
        type: "autoComplete",
        label: t("parentSheet"),
        params: {
            popupIcon: <SearchIcon style={{ transform: "none" }} />,
            className: "parentField",
            // onInputChange: (_, value) => setSearchCatalogues(value),
            options: cataloguePageQuery.data?.items.map((cat) => ({
                key: cat.id,
                label: `${extractCatalogueIdentifierNumber(cat.id)} - ${cat.title}` 
            })),
            // onBlur: () => setSearchCatalogues(""),
            noOptionsText: t("catalogues.noData"),
            optionsResultLimit: 50
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
            outterLabel: t("illustration")
        }
    },
    ...(type === "100m-solution" ? [{
        name: "themes",
        type: "select",
        label: t("category"),
        params: {
            options: catalogueThemesQuery.data?.items.map((theme) => ({
                key: theme.id,
                label: theme.prefLabel,
            }))
        },
        required: true
    }] as MetadataField[] : []), {
        name: "accessRights",
        type: "select",
        label: t("access"),
        params: {
            options: [{
                key: "public",
                label: t("public")
            }, {
                key: "private",
                label: t("private")
            }]
        },
        required: true
    }, {
        name: "license",
        type: "select",
        label: t("licence"),
        params: {
            options: licenseListQuery.data?.items.map((license) => ({
                key: license.id,
                label: license.name
            }))
        },
        required: true
    }], [t, type, withTitle, cataloguePageQuery.data?.items, catalogueThemesQuery.data?.items, licenseListQuery.data?.items])

    const onSubmitMemo = useCallback(
      async (values: any) => {
        if (onSubmit) {
            await onSubmit({...values, themes: values.themes ? [values.themes] : undefined})
        }
      },
      [onSubmit],
    )
    

    const localFormState = useFormComposable({
        onSubmit: onSubmitMemo
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
