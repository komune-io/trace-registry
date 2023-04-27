import { useCustomFilters } from 'components'
import { FilterComposableField } from '@smartb/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ProjectPageQuery } from "../../api";

export const useTransactionsFilters = () => {
    const {t} = useTranslation()
    const filters = useMemo((): FilterComposableField[] => [
        {
            name: 'identifier',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: t("projects.assets.serial")
            }
        },
        {
            name: 'status',
            type: 'select',
            params: {
                label: t("status")
            }
        }
    ], [t])
    return useCustomFilters<ProjectPageQuery>({filters: filters})
}
