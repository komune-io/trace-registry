import {
    AutoFormData,
    CommandWithFile,
    FormComposable,
    FormComposableField,
    FormComposableState,
    getIn,
    setIn,
    useAutoFormState
} from '@komune-io/g2'
import {Paper} from '@mui/material'
import {CustomButton, SearchIcon, useExtendedAuth} from 'components'
import {useCallback, useMemo, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {
    extractCatalogueIdentifierNumber,
    useCatalogueListAvailableParentsQuery,
    useCatalogueListAvailableThemesQuery,
    useLicenseListQuery
} from '../../api'
import {keepPreviousData} from '@tanstack/react-query'
import {CatalogueDraft} from '../../model'
import {useAutoCompleteCatalogue} from "../IndicatorBlock/useAutoCompleteCatalogue";
import {convertRelatedCataloguesToIds} from "../../model/RelatedCatalogue";
import {useAutoCompleteCatalogueOwners} from "../UseAutoCompleteCatalogueOwners/useAutoCompleteCatalgueOwners";

interface CatalogueMetadataFormProps {
    draft?: CatalogueDraft
    formData?: AutoFormData
    onSubmit?: (command: CommandWithFile<any>, values: any) => void
    formState?: FormComposableState
    type?: string
}

export const CatalogueMetadataForm = (props: CatalogueMetadataFormProps) => {
    const { onSubmit, formData, formState, draft, type = draft?.catalogue?.type } = props

    const { t, i18n } = useTranslation()
    const { policies } = useExtendedAuth()

    const [contextualFilters, setContextualFilters] = useState<Record<string, any>>({})

    //@ts-ignore
    const needParentList = useMemo(() => formData?.sections[0].fields.some((field) => field.type === "autoComplete-parents") ?? false, [formData])

    const parentListQuery = useCatalogueListAvailableParentsQuery({
        query: {
            language: draft?.language ?? i18n.language,
            type: type,
            ...contextualFilters["autoComplete-parents"]
        },
        options: {
            placeholderData: keepPreviousData,
            enabled: needParentList
        }
    })

    const filteredParents = useMemo(
        () =>
            parentListQuery.data?.items.filter((parent) => !!parent.title)
        , [parentListQuery.data?.items]
    )

    const catalogueThemesQuery = useCatalogueListAvailableThemesQuery({
        query: {
            language: draft?.language ?? i18n.language,
            ...contextualFilters["select-themes"]
        },
        options: {
            enabled: !!contextualFilters["select-themes"]
        }
    })

    const licenseListQuery = useLicenseListQuery({
        query: {
        }
    })

    const catalogueAutoComplete = useAutoCompleteCatalogue({
        fetchOnInitFocus: true
    })

    const ownersAutoComplete = useAutoCompleteCatalogueOwners({
        catalogueType: type!,
        fetchOnInitFocus: true
    })

    const fields = useMemo(() => formData?.sections[0].fields.map((field): FormComposableField => {
        type FieldType = typeof field.type | "autoComplete-parents" | "select-themes" | "autoComplete-catalogues" | "select-license" | "autoComplete-owners"

        const type = field.type as FieldType

        //@ts-ignore
        const filters = field.params?.filters ? JSON.parse(field.params.filters) : undefined

        if (type === "autoComplete-parents") {
            if (!contextualFilters["autoComplete-parents"] && filters) {
                setContextualFilters((prev) => ({
                    ...prev,
                    "autoComplete-parents": filters
                }))
            }

            return {
                ...field,
                type: "autoComplete",
                params: {
                    popupIcon: <SearchIcon style={{ transform: "none" }} />,
                    className: "autoCompleteField",
                    options: filteredParents?.map((cat) => {
                        const identifier = extractCatalogueIdentifierNumber(cat.id)
                        return {
                            key: cat.id,
                            label: `${identifier ? identifier + " -" : ""} ${cat.title}`
                        }
                    }),
                    noOptionsText: t("catalogues.noData"),
                    optionsResultLimit: 50
                }
            }
        }
        if (type === "select-themes") {
            if (!contextualFilters["select-themes"] && filters) {
                setContextualFilters((prev) => ({
                    ...prev,
                    "select-themes": filters
                }))
            }
            return {
                ...field,
                type: "select",
                params: {
                    options: catalogueThemesQuery.data?.items.map((theme) => ({
                        key: theme.id,
                        label: theme.prefLabel,
                    })),
                    singleInArray: true
                }
            }
        }
        if (type === "autoComplete-catalogues") {
            return {
                ...field,
                ...catalogueAutoComplete.getComposableField({
                    name: field.name,
                    label: field.label,
                    //@ts-ignore
                    params: field.params,
                }, filters)
            } as FormComposableField
        }
        if (type === "select-license") {
            return {
                ...field,
                type: "select",
                params: {
                    options: licenseListQuery.data?.items.map((license) => ({
                        key: license.id,
                        label: license.name
                    }))
                }
            }
        }
        if (type === "autoComplete-owners") {
            return {
                ...field,
                ...ownersAutoComplete.getComposableField({
                    name: field.name,
                    label: field.label,
                    //@ts-ignore
                    params: field.params,
                }, filters)
            } as FormComposableField
        }
        return field
    }), [formData, filteredParents, catalogueThemesQuery.data?.items, licenseListQuery.data?.items, catalogueAutoComplete.getComposableField, ownersAutoComplete.getComposableField])

    const onSubmitMemo = useCallback(
        async (command: CommandWithFile<any>, values: any) => {
            const { relatedCatalogues } = values
            formData?.sections.forEach((section) =>
                section.fields.forEach((field) => {
                    const fieldValue = getIn(values, field.name)

                    if (fieldValue != undefined) {
                        if (field.type === 'documentHandler') {
                            command.files.push({
                                file: fieldValue,
                                atrKey: field.name
                            })
                        } else {
                            setIn(command, field.name, fieldValue)
                        }
                    }
                })
            )
            if (onSubmit) {
                const relatedCataloguesToIds = convertRelatedCataloguesToIds(relatedCatalogues)
                await onSubmit({
                    ...command,
                    command: {
                        ...command.command,
                        relatedCatalogueIds: relatedCataloguesToIds,
                    }
                }, values)
            }
        },
        [onSubmit],
    )

    const localFormState = useAutoFormState({
        formData,
        onSubmit: onSubmitMemo,
        initialValues: {
            context: "creation",
            policies: {
                canUpdateOwner: policies.catalogue.canUpdateOwner(draft?.catalogue),
            }
        }
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
                fields={fields ?? []}
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
            {!formState && <CustomButton
                onClick={localFormState.submitForm}
                sx={{
                    alignSelf: "flex-end"
                }}
            >
                {t("create")}
            </CustomButton>}
        </Paper>
    )
}
