import { FormComposable, FormComposableField, FormComposableState, useFormComposable, validators } from '@komune-io/g2'
import { Paper } from '@mui/material'
import {maybeAddItem, SearchIcon, useExtendedAuth, CustomButton, maybeAddItems} from 'components'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { extractCatalogueIdentifierNumber, useCatalogueListAvailableParentsQuery, useCatalogueListAvailableThemesQuery, useLicenseListQuery } from '../../api'
import { keepPreviousData } from '@tanstack/react-query'
import { CatalogueDraft, CatalogueTypes } from '../../model'
import { CatalogueCreateCommand } from '../../api'
import {useAutoCompleteCatalogue} from "../IndicatorBlock/useAutoCompleteCatalogue";
import {convertRelatedCataloguesToIds} from "../../model/RelatedCatalogue";

type MetadataField = FormComposableField<keyof CatalogueCreateCommand | "relatedCatalogues.planetaryLimits" | "illustration" | "location.country" | "location.region">

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
    const parentListQuery = useCatalogueListAvailableParentsQuery({
        query: {
            language: draft?.language ?? i18n.language,
            type: type!
        },
        options: {
            enabled: !!type,
            placeholderData: keepPreviousData
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
            type: type!
        },
        options: {
            enabled: type === "100m-solution" || type === "100m-project"
        }
    })

    const licenseListQuery = useLicenseListQuery({
        query: {
        }
    })

    const catalogueAutoComplete = useAutoCompleteCatalogue({
        draft: draft,
        relations: [{
            key: "relatedCatalogues.planetaryLimits",
            title: t("catalogues.planetaryLimits") + " " + t("optional"),
            type: "100m-planetary-boundary",
            multiple: true,
        }],
        fetchOnInitFocus: true
    })


    const projectFields = useMemo((): MetadataField[] => [
        {
            name: "location.country",
            type: "textField",
            label: t("country"),
            validator: validators.requiredField(t)
        }, {
            name: "location.region",
            type: "textField",
            label: t("region") + " " + t("optional"),
        }, {
            name: "stakeholder",
            type: "textField",
            label: t("catalogues.projectOwner"),
            required: true
        },
        ...(catalogueAutoComplete.formComposableField as MetadataField[]),
    ], [t, catalogueAutoComplete.formComposableField])

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
            options: filteredParents?.map((cat) => {
                const identifier = extractCatalogueIdentifierNumber(cat.id)
                return {
                    key: cat.id,
                    label: `${identifier ? identifier + " -" : ""} ${cat.title}`
                }
            }),
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
            outterLabel: t("illustration") + " " + t("optional")
        }
    },
    ...maybeAddItem<MetadataField>(type === "100m-solution", {
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
    }),
    ...maybeAddItems<MetadataField>(type === "100m-project", projectFields),
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
    },
    ...maybeAddItem<MetadataField>(type === "100m-project", {
        name: "integrateCounter",
        type: "checkBox",
        label: t("catalogues.integrateInCounter")
    } )
], [t, type, withTitle, filteredParents, catalogueThemesQuery.data?.items, licenseListQuery.data?.items, projectFields, policies, draft])

    const onSubmitMemo = useCallback(
        async (values: any) => {
            const {relatedCatalogues, ...others} = values
            const relatedCataloguesToIds = convertRelatedCataloguesToIds(relatedCatalogues)
            const toSave = {
                ...others,
                relatedCatalogueIds: relatedCataloguesToIds,
            }
            if (onSubmit) {
                onSubmit(toSave)
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
