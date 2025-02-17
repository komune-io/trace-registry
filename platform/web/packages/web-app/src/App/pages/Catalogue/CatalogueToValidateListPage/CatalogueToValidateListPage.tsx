import {
    useCataloguesFilters,
    CatalogueTable,
    useCatalogueDraftPageQuery
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage, Offset, OffsetPagination } from 'template'
import {  useMemo } from "react"


export const CatalogueToValidateListPage = () => {
    const { t } = useTranslation()

    const { submittedFilters, setOffset, component } = useCataloguesFilters({
    })

    const pagination = useMemo((): OffsetPagination => ({ offset: submittedFilters.offset ?? Offset.default.offset, limit: submittedFilters.limit ?? Offset.default.limit }), [submittedFilters.offset, submittedFilters.limit])


    const { data, isInitialLoading } = useCatalogueDraftPageQuery({
        query: {
           ...submittedFilters,
           status: ["SUBMITTED"]
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