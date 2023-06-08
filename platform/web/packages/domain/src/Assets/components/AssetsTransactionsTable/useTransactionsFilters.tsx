import {useCustomFilters} from 'components'
import {FilterComposableField, Option} from '@smartb/g2'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {AssetTransactionPageQuery, TransactionTypeValues} from "domain-components";
import {transactionTypeValuesToColor} from "../AssetsTransactionType/AssetsTransactionType";

export const useTransactionsFilters = () => {

    const {t} = useTranslation()
     const typesOptions = useMemo(
         () => {
                    const types: Option[] = []
                    for (let key in TransactionTypeValues) {
                            types.push({
                                key: key,
                                label: t(key),
                                color: transactionTypeValuesToColor[key]
                            })

                    }
                    return types}, [t])

    const filters = useMemo((): FilterComposableField[] => [
        {
            name: 'id',
            type: 'textField',
            params: {
                textFieldType: 'search',
                placeholder: t("projects.assets.serial")
            }
        },
        {
            name: 'type',
            label: t("types"),
            type: 'select',
            params: {
                options: typesOptions,
                multiple: true
            }
        }
    ], [t])
    return useCustomFilters<AssetTransactionPageQuery>({filters: filters})
}
