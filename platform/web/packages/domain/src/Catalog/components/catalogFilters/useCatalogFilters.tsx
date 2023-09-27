import {useCustomFilters} from 'components'
import {FilterComposableField} from '@smartb/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'

export const useCatalogFilters = () => {
    const {t} = useTranslation()
    const filters = useMemo((): FilterComposableField[] => [
        {
            name: 'name',
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
    return useCustomFilters({filters: filters})
}
