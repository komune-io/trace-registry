import {languages, useCustomFilters} from 'components'
import {FilterComposableField} from '@komune-io/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {CatalogueDraftPageQuery, useCatalogueListAllowedTypesQuery} from 'domain-components'

interface UseDraftsFiltersParams {
    initialValues?: any
}

export const useDraftsFilters = (params?: UseDraftsFiltersParams) => {
    const {initialValues} = params ?? {}
    const {t, i18n} = useTranslation()

    const allowedSearchTypes = useCatalogueListAllowedTypesQuery({
        query: {
          language: i18n.language,
          operation: "SEARCH"
        }
      }).data?.items

    const filters = useMemo((): FilterComposableField<keyof CatalogueDraftPageQuery>[] => [
        {
            name: 'search',
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
                options: allowedSearchTypes?.map((type) => ({ key: type.identifier, label: type.name }))
            }
        },
        {
            name: 'language',
            type: 'select',
            params: {
                label: t("langue"),
                options: Object.keys(languages).map((lang) => ({
                    key: lang,
                    label: lang
                }))
            }
        }
    ], [t, allowedSearchTypes])
    return useCustomFilters({filters: filters, initialValues: initialValues})
}
