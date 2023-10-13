import {useCustomFilters} from 'components'
import {FilterComposableField} from '@smartb/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import { CataloguePageQuery } from '../../api'

interface UseCatalogueFiltersParams {
    initialValues?: any
}

export const useCatalogueFilters = (params?: UseCatalogueFiltersParams) => {
    const {initialValues} = params ?? {}
    const {t} = useTranslation()
    const filters = useMemo((): FilterComposableField<keyof CataloguePageQuery>[] => [
        {
            name: 'title',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: t("name"),
                style: {
                    width: "300px"
                }
            }
        }
    ], [t])
    return useCustomFilters({filters: filters, initialValues: initialValues})
}
