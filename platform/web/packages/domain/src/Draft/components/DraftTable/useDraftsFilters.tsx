import {languages, useCustomFilters} from 'components'
import {FilterComposableField} from '@komune-io/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {CatalogueDraftPageQuery, useCatalogueGetBlueprintsQuery} from 'domain-components'

interface UseDraftsFiltersParams {
    initialValues?: any
}

export const useDraftsFilters = (params?: UseDraftsFiltersParams) => {
    const {initialValues} = params ?? {}
    const {t, i18n} = useTranslation()

    const allowedSearchTypes = useCatalogueGetBlueprintsQuery({
        query: {
          language: i18n.language
        }
      }).data?.item

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
                options: allowedSearchTypes?.globalSearchTypes.map((type) => ({ key: allowedSearchTypes.types[type].identifier, label: allowedSearchTypes.types[type].identifier }))
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
