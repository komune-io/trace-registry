import {useCustomFilters} from 'components'
import {FilterComposableField} from '@komune-io/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {CertificationPageQuery} from "../../api";

interface useProtocolsFiltersParams {
    initialValues?: any
}

export const useProtocolsFilters = (params?: useProtocolsFiltersParams) => {
    const {initialValues} = params ?? {}
    const {t} = useTranslation()

    const filters = useMemo((): FilterComposableField<keyof CertificationPageQuery>[] => [
        {
            name: 'protocolName',
            type: 'textField',
            params: { 
                textFieldType: 'search', 
                style: { width: "200px"},
                placeholder: t("name")
            },
            mandatory: true
        },
        //  {
        //     name: 'catalogue',
        //     type: 'textField',
        //     params: {
        //         textFieldType: 'search',
        //         style: { width: "200px"},
        //         placeholder: t("catalogue")
        //     },
        // },
        // {
        //     name: 'language',
        //     type: 'select',
        //     params: {
        //         label: t("langue"),
        //         options: Object.keys(languages).map((lang) => ({
        //             key: lang,
        //             label: lang
        //         }))
        //     }
        // }
    ], [t])
    return useCustomFilters({filters: filters, initialValues: initialValues})
}
