import { useCustomFilters } from 'components'
import {FilterComposableField, Option} from '@smartb/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {AssetPageQuery, transactionTypeValues} from "domain-components";
import {transactionTypeValuestoColor} from "../ProjectTransactionInformations/ProjectTransactionStatus";

export const useTransactionsFilters = () => {

    const {t} = useTranslation()
     const typesOptions = useMemo(
         () => {
                    const types: Option[] = []
                    for (let key in transactionTypeValues) {
                            types.push({
                                key: key,
                                label: t(`projects.assets.${key}`),
                                color: transactionTypeValuestoColor[key]
                            })

                    }
                    return types}, [t])

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
            label: t("types"),
            type: 'select',
            params: {
                options: typesOptions,
                multiple: true
            }
        }
    ], [t])
    return useCustomFilters<AssetPageQuery>({filters: filters})
}
