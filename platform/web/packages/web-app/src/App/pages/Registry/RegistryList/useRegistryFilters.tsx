import { useCustomFilters } from 'components'
import { FilterComposableField } from '@smartb/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const useRegistryFilters = () => {
    const {t} = useTranslation()

    const filters = useMemo((): FilterComposableField[] => [
        {
            name: 'id',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: "ID", 
                style: { width: "120px" } }
        },
        {
            name: 'name',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: "Name", 
                style: { width: "170px" } }
        },
        {
            name: 'proponent',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: "Proponent", 
                style: { width: "170px" } }
        }
    ], [t])
    return useCustomFilters({filters: filters})
}
