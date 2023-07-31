import { FilterComposableField, useFiltersComposable, Action, Option, FiltersComposable } from '@smartb/g2'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {OffsetPagination, Offset} from "template";

export interface useCustomFiltersParams {
    filters: FilterComposableField[]
    sortOptions?: Option[]
    defaultSortKey?: string
    withPage?: boolean
    actions?: Action[]
    initialValues?: any
}

export const useCustomFilters = <T extends {} = any>(params: useCustomFiltersParams) => {
    const { filters, withPage = true, actions, initialValues, sortOptions, defaultSortKey } = params
    const { t } = useTranslation()
    const onSubmit = useCallback(
        (values: any, submittedFilters: any) => {
            const pagination = withPage ? Offset.default: undefined
            if (values.offset === submittedFilters.offset) return { ...values, ...pagination }
        },
        [],
    )
    const { filtersCount, formState, submittedFilters, setAdditionalFilter } = useFiltersComposable<T & OffsetPagination>({
        onSubmit: onSubmit,
        formikConfig: {
            initialValues: {
                ...(withPage ? {
                    offset: 0,
                    limit: 10
                } : undefined),
                ...initialValues
            }
        }
    })

    const setOffset = useCallback(
        (newPage: OffsetPagination) => {
            setAdditionalFilter("offset", newPage.offset)
            setAdditionalFilter("limit", newPage.limit)
        },
        [setAdditionalFilter],
    )

    const component = useMemo(() => (
        <FiltersComposable
            formState={formState}
            filterButtonProps={{ children: t("toFilterCount", { count: withPage ? filtersCount - 2 : filtersCount }) }}
            fields={filters}
            actions={actions}
            filterStyleProps={{ color: "default", variant: "outlined" }}
            style={{
                width: "100%"
            }}
            responsiveFiltersProps={{
                drawerTitle: t("toFilter") as string,
                applyString: t("apply") as string,
                clearString: t("clearFilters") as string
            }}
        />
    ), [formState, filters, actions, filtersCount, sortOptions, defaultSortKey, t])

    return {
        component: component,
        submittedFilters,
        setOffset
    }
}