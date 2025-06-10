import { languages, maybeAddItem, useCustomFilters } from 'components'
import { FilterComposableField } from '@komune-io/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { CatalogueSearchQuery, useCatalogueListAllowedTypesQuery } from 'domain-components'

interface useCataloguesFiltersParams {
    initialValues?: any
    withPage?: boolean
    urlStorage?: boolean
    noType?: boolean
}

export const useCataloguesFilters = (params?: useCataloguesFiltersParams) => {
    const { initialValues, withPage, urlStorage, noType = false } = params ?? {}
    const { t, i18n } = useTranslation()

    const allowedSearchTypes = useCatalogueListAllowedTypesQuery({
        query: {
            language: i18n.language,
            operation: "SEARCH"
        }
    }).data?.items

    const filters = useMemo((): FilterComposableField<keyof CatalogueSearchQuery>[] => [
        {
            name: 'query',
            type: 'textField',
            params: {
                textFieldType: 'search',
                style: { width: "200px" },
                placeholder: t("search")
            },
            mandatory: true
        },
        ...maybeAddItem(!noType, {
            name: 'type',
            type: 'select',
            params: {
                label: t("type"),
                style: { width: "120px" },
                multiple: true,
                options: allowedSearchTypes?.map((type) => ({ key: type.identifier, label: type.name }))
            }
        } as FilterComposableField<keyof CatalogueSearchQuery>),
        {
            name: 'availableLanguages',
            type: 'select',
            params: {
                label: t("langue"),
                multiple: true,
                options: Object.keys(languages).map((lang) => ({
                    key: lang,
                    label: lang
                }))
            }
        }
    ], [t, allowedSearchTypes])
    return useCustomFilters({ filters: filters, initialValues: initialValues, withPage, urlStorage })
}
