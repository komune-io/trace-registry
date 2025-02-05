import {languages, useCustomFilters} from 'components'
import {FilterComposableField} from '@komune-io/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import { CataloguePageQuery } from '../../api'

interface UseCatalogueFiltersParams {
    initialValues?: any
}

export const useCataloguesFilters = (params?: UseCatalogueFiltersParams) => {
    const {initialValues} = params ?? {}
    const {t} = useTranslation()
    const filters = useMemo((): FilterComposableField<keyof CataloguePageQuery>[] => [
        {
            name: 'catalogueId',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: t("identifier"), 
                style: { width: "170px" }
            }
        },
        {
            name: 'title',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: t("name")
            },
            mandatory: true
        },
        {
            //@ts-ignore
            name: 'type',
            type: 'select',
            params: {
                label: t("type"),
                style: { width: "120px"},
                options: []
            },
            mandatory: true
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
