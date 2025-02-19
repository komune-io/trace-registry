import {languages, useCustomFilters} from 'components'
import {FilterComposableField} from '@komune-io/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import { CatalogueDraftPageQuery } from '../../api'
import { catalogueTypes } from '../../model'

interface UseDraftsFiltersParams {
    initialValues?: any
}

export const useDraftsFilters = (params?: UseDraftsFiltersParams) => {
    const {initialValues} = params ?? {}
    const {t} = useTranslation()
    const filters = useMemo((): FilterComposableField<keyof CatalogueDraftPageQuery>[] => [
        {
            name: 'originalCatalogueId',
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
                options: catalogueTypes.map((type) => ({ key: type, label: t("catalogues.types." + type) }))
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
