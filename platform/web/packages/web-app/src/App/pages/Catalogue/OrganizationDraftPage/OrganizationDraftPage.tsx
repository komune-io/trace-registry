import {
    useDraftsFilters,
    DraftTable,
    useCatalogueDraftPageQuery
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage, Offset, OffsetPagination } from 'template'
import { useMemo } from "react"
import { useExtendedAuth } from 'components'


export const OrganizationDraftPage = () => {
    const { t } = useTranslation()
    const { service } = useExtendedAuth()

    const { submittedFilters, setOffset, component } = useDraftsFilters({
    })

    const pagination = useMemo((): OffsetPagination => ({ offset: submittedFilters.offset ?? Offset.default.offset, limit: submittedFilters.limit ?? Offset.default.limit }), [submittedFilters.offset, submittedFilters.limit])


    const { data, isInitialLoading } = useCatalogueDraftPageQuery({
        query: {
            ...submittedFilters,
            
            creatorId: service.getUserId()
        }
    })

    const title = t("mySheets")
    return (
        <AppPage
            title={title}
            sx={{
                paddingBottom: "90px"
            }}
        >
            {component}
            <DraftTable
                withStatus
                toEdit
                page={data}
                pagination={pagination}
                isLoading={isInitialLoading}
                onOffsetChange={setOffset}
            />
        </AppPage>
    )
}