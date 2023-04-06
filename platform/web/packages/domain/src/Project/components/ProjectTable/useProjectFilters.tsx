import { useCustomFilters } from 'components'
import { FilterComposableField } from '@smartb/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ProjectPageQuery } from "../../api";

export const useProjectFilters = () => {
    const {t} = useTranslation()
    const filters = useMemo((): FilterComposableField[] => [
        {
            name: 'identifier',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: t("id"), 
                style: { width: "120px" }
            }
        },
        {
            name: 'name',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: t("name"), 
                style: { width: "170px" }
            }
        },
        {
            name: 'proponent',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: t("proponent"), 
                style: { width: "170px" }
            }
        },
        {
            name: 'type',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: t("type"),
                style: { width: "120px" }
            }
        },
        {
            name: 'origin',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: t("origin"),
                style: { width: "170px" }
            }
        },
        {
            name: 'estimatedReductions',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: t("avgReductions"),
                style: { width: "170px" }
            }
        },
        {
            name: 'referenceYear',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: t("refYear"),
                style: { width: "170px" }
            }
        },
        {
            name: 'dueDate',
            type: 'datePicker',
            params: {
                label: t("dueDate"),
                style: { width: "170px" }
            }
        },
        {
            name: 'vintage',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: t("vintage"),
                style: { width: "170px" }
            }
        },
        {
            name: 'status',
            type: 'select',
            params: {
                label: t("status"),
                style: { width: "170px" },
            }
        }
    ], [t])
    return useCustomFilters<ProjectPageQuery>({filters: filters})
}
