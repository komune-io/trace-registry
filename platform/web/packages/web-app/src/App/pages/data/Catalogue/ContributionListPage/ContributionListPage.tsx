import {
    DraftTable,
    ContributionModal,
    useCatalogueDraftPageQuery,
    useDraftsFilters
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage, Offset, OffsetPagination } from 'template'
import { useMemo } from "react"
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useExtendedAuth, useRoutesDefinition, useToggleState } from 'components'

export const ContributionListPage = () => {
    const { t } = useTranslation()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const { cataloguesContributions } = useRoutesDefinition()
    const { service } = useExtendedAuth()

    const successfullContribution = searchParams.get('successfullContribution') === "true"

    const [open, _, toggle] = useToggleState({ defaultOpen: successfullContribution })

    const { submittedFilters, setOffset, component } = useDraftsFilters({
    })

    const pagination = useMemo((): OffsetPagination => ({ offset: submittedFilters.offset ?? Offset.default.offset, limit: submittedFilters.limit ?? Offset.default.limit }), [submittedFilters.offset, submittedFilters.limit])


    const { data, isInitialLoading } = useCatalogueDraftPageQuery({
        query: {
            ...submittedFilters,
            creatorId: service.getUserId()
        }
    })

    const title = t("myContributions")
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
                page={data}
                pagination={pagination}
                isLoading={isInitialLoading}
                onOffsetChange={setOffset}
            />
            <ContributionModal
                open={open}
                onClose={() => { navigate(cataloguesContributions()); toggle() }}
            />
        </AppPage>
    )
}