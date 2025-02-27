import { Button, FormComposable, FormComposableField, FormComposableState, useFormComposable, validators } from '@komune-io/g2'
import { Paper } from '@mui/material'
import { maybeAddItem, SearchIcon, useExtendedAuth } from 'components'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { extractCatalogueIdentifierNumber, useCatalogueListAvailableOwnersQuery, useCatalogueListAvailableParentsQuery, useCatalogueListAvailableThemesQuery, useLicenseListQuery } from '../../api'
import { keepPreviousData } from '@tanstack/react-query'
import { CatalogueDraft, CatalogueTypes } from '../../model'
import { CatalogueCreateCommand } from '../../api/command'

type MetadataField = FormComposableField<keyof CatalogueCreateCommand | "illustration" | "location.country" | "location.region">

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
    const {policies} = useExtendedAuth()

    // search on user input logic is commented first but saved for later evolutions
    // const [searchCatalogues, setSearchCatalogues] = useState("")

    const parentListQuery = useCatalogueListAvailableParentsQuery({
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

    const filteredParents = useMemo(() => parentListQuery.data?.items.filter((parent) => !!parent.title), [parentListQuery.data?.items])

    const catalogueThemesQuery = useCatalogueListAvailableThemesQuery({
        query: {
            language: draft?.language ?? i18n.language,
            type: type!
        },
        options: {
            enabled: type === "100m-solution" || type === "100m-project"
        }
    })

    const listAvailableOwners = useCatalogueListAvailableOwnersQuery({
        query: {
            type: type!
        },
        options: {
            enabled: type === "100m-project"
        }
    })

    const licenseListQuery = useLicenseListQuery({
        query: {
        }
    })

    const projectFields = useMemo((): MetadataField[] => [{
        name: "themes",
        type: "select",
        label: t("catalogues.planetaryLimits"),
        params: {
            options: catalogueThemesQuery.data?.items.map((theme) => ({
                key: theme.id,
                label: theme.prefLabel,
            })),
            multiple: true
        },
        required: true
    }, {
        name: "location.country",
        type: "textField",
        label: t("country"),
        validator: validators.requiredField(t)
    }, {
        name: "location.region",
        type: "textField",
        label: t("region") + " " + t("optionnal"),
    }, {
        name: "ownerOrganizationId",
        type: "autoComplete",
        label: t("catalogues.projectOwner"),
        params: {
            popupIcon: <SearchIcon style={{ transform: "none" }} />,
            className: "autoCompleteField",
            options: listAvailableOwners.data?.items?.map((org) => ({
                key: org.id,
                label: org.name
            })),
            noOptionsText: t("catalogues.noOrganization"),
            optionsResultLimit: 50
        },
        required: true
    }], [t, catalogueThemesQuery.data?.items, listAvailableOwners.data?.items])

    const fields = useMemo((): MetadataField[] => [...(withTitle ? [{
        name: "title",
        type: "textField",
        label: t("title"),
        required: true
    }] as MetadataField[] : []), {
        name: "parentId",
        type: "autoComplete",
        label: t("parentSheet"),
        params: {
            popupIcon: <SearchIcon style={{ transform: "none" }} />,
            className: "autoCompleteField",
            // onInputChange: (_, value) => setSearchCatalogues(value),
            options: filteredParents?.map((cat) => ({
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
            outterLabel: t("illustration") + " " + t("optionnal")
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
    }] as MetadataField[] : []),
    ...(type === "100m-project" ? projectFields : []),
    ...maybeAddItem<MetadataField>(draft ? policies.audit.canUpdateAccessRights(draft.catalogue) : true, {
        name: "accessRights",
        type: "select",
        label: t("access"),
        params: {
            options: [{
                key: "PUBLIC",
                label: t("public")
            }, {
                key: "PRIVATE",
                label: t("private")
            }]
        },
        required: true
    }), {
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
    }], [t, type, withTitle, filteredParents, catalogueThemesQuery.data?.items, licenseListQuery.data?.items, projectFields, policies, draft])

    const onSubmitMemo = useCallback(
        async (values: any) => {
            if (onSubmit) {
                await onSubmit({ ...values, themes: values.themes && type !== "100m-project" ? [values.themes] : values.themes })
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
                        "& .autoCompleteField .MuiAutocomplete-popupIndicator": {
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
