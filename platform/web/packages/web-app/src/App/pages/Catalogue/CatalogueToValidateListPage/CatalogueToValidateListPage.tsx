import {
    useCataloguesFilters,
    useCataloguePageQuery,
    CatalogueTable
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage, Offset, OffsetPagination } from 'template'
import {  useMemo } from "react"


export const CatalogueToValidateListPage = () => {
    const { i18n, t } = useTranslation()

    const { submittedFilters, setOffset, component } = useCataloguesFilters({
    })

    const pagination = useMemo((): OffsetPagination => ({ offset: submittedFilters.offset ?? Offset.default.offset, limit: submittedFilters.limit ?? Offset.default.limit }), [submittedFilters.offset, submittedFilters.limit])


    const { data, isInitialLoading } = useCataloguePageQuery({
        query: {
            language: i18n.language,
            parentIdentifier: "standards",
            ...submittedFilters
        }
    })

    const title = t("sheetsToValidate")
    return (
        <AppPage
            title={title}
            sx={{
                paddingBottom: "90px"
            }}
        >
            {component}
            <CatalogueTable
                page={data}
                pagination={pagination}
                isLoading={isInitialLoading}
                onOffsetChange={setOffset}
            />
        </AppPage>
    )
}