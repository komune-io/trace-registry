import {getProjectTypesOptions, useCustomFilters} from 'components'
import {FilterComposableField} from '@smartb/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {ProjectPageQuery} from "../../api";

export const useProjectFilters = () => {
    const {t} = useTranslation()
    const filters = useMemo((): FilterComposableField[] => [
        {
            name: 'identifier',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: t("id")
            }
        },
        {
            name: 'name',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: t("name"), 
                style: { width: "170px" }
            },
            mandatory: true
        },
        {
            name: 'proponent',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                placeholder: t("proponent")
            }
        },
        {
            name: 'type',
            type: 'select',
            params: {
                label: t("type"),
                style: { width: "120px"},
                options: getProjectTypesOptions(t),
            },
            mandatory: true
        },
        {
            name: 'origin',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: t("origin")
            },
            mandatory: true
        },
        {
            name: 'estimatedReductions',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: t("avgReductions")
            }
        },
        {
            name: 'referenceYear',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: t("refYear")
            }
        },
        // {
        //     name: 'dueDate',
        //     type: 'datePicker',
        //     params: {
        //         label: t("dueDate")
        //     }
        // },
        {
            name: 'vintage',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: t("vintage")
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
