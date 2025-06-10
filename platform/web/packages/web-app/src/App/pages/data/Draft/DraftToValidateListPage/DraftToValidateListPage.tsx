import {
    DraftTable,
    useCatalogueDraftPageQuery,
    useDraftsFilters
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage, Offset, OffsetPagination } from 'template'
import { useMemo } from "react"


export const DraftToValidateListPage = () => {
    const { t } = useTranslation()

    const { submittedFilters, setOffset, component } = useDraftsFilters({
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
            <DraftTable
                withOperation
                page={data}
                pagination={pagination}
                isLoading={isInitialLoading}
                onOffsetChange={setOffset}
            />
        </AppPage>
    )
}