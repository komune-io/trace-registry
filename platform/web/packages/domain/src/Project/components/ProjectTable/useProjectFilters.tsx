import { useCustomFilters } from 'components'
import { FilterComposableField } from '@smartb/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ProjectPageQuery } from "../../api";

export const useProjectFilters = () => {
    const {t} = useTranslation()
    const filters = useMemo((): FilterComposableField[] => [
        {
            name: 'id',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: "ID", 
                style: { width: "120px" }
            }
        },
        {
            name: 'name',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: "Name", 
                style: { width: "170px" }
            }
        },
        {
            name: 'proponent',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: "Proponent", 
                style: { width: "170px" }
            }
        },
        {
            name: 'type',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: "Type",
                style: { width: "120px" }
            }
        },
        {
            name: 'estimatedReductions',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: "AVG Reductions",
                style: { width: "170px" }
            }
        },
        {
            name: 'referenceYear',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: "Ref Year",
                style: { width: "170px" }
            }
        },
        {
            name: 'dueDate',
            type: 'datePicker',
            label: "Due Date",
            params: {
                label: "Due Date",
                style: { width: "170px" }
            }
        },
        {
            name: 'vintage',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: "Vintage",
                style: { width: "170px" }
            }
        },
        {
            name: 'status',
            type: 'select',
            params: {
                label: "Status",
                style: { width: "170px" },
            }
        }
    ], [t])
    return useCustomFilters<ProjectPageQuery>({filters: filters})
}
