import { AutoFormData, CommandWithFile, FormComposable, FormComposableField, FormComposableState, useAutoFormState } from '@komune-io/g2'
import { Paper } from '@mui/material'
import { SearchIcon, CustomButton } from 'components'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { extractCatalogueIdentifierNumber, useCatalogueListAvailableParentsQuery, useCatalogueListAvailableThemesQuery, useLicenseListQuery } from '../../api'
import { keepPreviousData } from '@tanstack/react-query'
import { CatalogueDraft } from '../../model'
import { useAutoCompleteCatalogue } from "../IndicatorBlock/useAutoCompleteCatalogue";
import { convertRelatedCataloguesToIds } from "../../model/RelatedCatalogue";

interface CatalogueMetadataFormProps {
    draft?: CatalogueDraft
    formData?: AutoFormData
    onSubmit?: (command: CommandWithFile<any>, values: any) => void
    formState?: FormComposableState
}

export const CatalogueMetadataForm = (props: CatalogueMetadataFormProps) => {
    const { onSubmit, formData, formState, draft } = props

    const { t, i18n } = useTranslation()

    const [contextualFilters, setContextualFilters] = useState<Record<string, any>>({})

    const parentListQuery = useCatalogueListAvailableParentsQuery({
        query: {
            language: draft?.language ?? i18n.language,
            ...contextualFilters["autoComplete-parents"]
        },
        options: {
            placeholderData: keepPreviousData,
            enabled: !!contextualFilters["autoComplete-parents"]
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

    const fields = useMemo(() => formData?.sections[0].fields.map((field): FormComposableField => {
        type FileType = typeof field.type | "autoComplete-parents" | "select-themes" | "autoComplete-catalogues" | "select-license"

        const type = field.type as FileType

        if (type === "autoComplete-parents") {
            setContextualFilters((prev) => ({
                ...prev,
                "autoComplete-parents": {
                    //@ts-ignore
                    ...field.params?.filters,
                }
            }))

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
                },
                    //@ts-ignore
                    field.params?.filters)
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
        return field
    }), [formData, filteredParents, catalogueThemesQuery.data?.items, catalogueAutoComplete.queryResult.data?.items, licenseListQuery.data?.items, catalogueAutoComplete.getComposableField])

    const onSubmitMemo = useCallback(
        async (command: CommandWithFile<any>, values: any) => {
            const { relatedCatalogues } = values

            if (onSubmit) {
                const relatedCataloguesToIds = convertRelatedCataloguesToIds(relatedCatalogues)
                onSubmit({
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
        formikConfig: {
            initialValues: {
                context: "creation"
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
