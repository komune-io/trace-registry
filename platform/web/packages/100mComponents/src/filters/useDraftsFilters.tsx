import {languages, useCustomFilters} from 'components'
import {FilterComposableField} from '@komune-io/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {CatalogueDraftPageQuery, catalogueTypes} from 'domain-components'

interface UseDraftsFiltersParams {
    initialValues?: any
}

export const useDraftsFilters = (params?: UseDraftsFiltersParams) => {
    const {initialValues} = params ?? {}
    const {t} = useTranslation()
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
                options: catalogueTypes.map((type) => ({ key: type, label: t("catalogues.types." + type) }))
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
    ], [t])
    return useCustomFilters({filters: filters, initialValues: initialValues})
}
