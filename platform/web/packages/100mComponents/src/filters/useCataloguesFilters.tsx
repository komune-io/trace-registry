import {languages, useCustomFilters} from 'components'
import {FilterComposableField} from '@komune-io/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import { CatalogueSearchQuery, catalogueTypes} from 'domain-components'

interface useCataloguesFiltersParams {
    initialValues?: any
    withPage?: boolean
    urlStorage?: boolean
}

export const useCataloguesFilters = (params?: useCataloguesFiltersParams) => {
    const {initialValues, withPage, urlStorage} = params ?? {}
    const {t} = useTranslation()
    const filters = useMemo((): FilterComposableField<keyof CatalogueSearchQuery>[] => [
        {
            name: 'query',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                style: { width: "200px"},
                placeholder: t("search")
            },
            mandatory: true
        },
        {
            name: 'type',
            type: 'select',
            params: {
                label: t("type"),
                style: { width: "120px"},
                multiple: true,
                options: catalogueTypes.map((type) => ({ key: type, label: t("catalogues.types." + type) }))
            }
        },
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
    ], [t])
    return useCustomFilters({filters: filters, initialValues: initialValues, withPage, urlStorage})
}
