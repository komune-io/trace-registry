import {
    useCataloguesFilters,
    useCataloguePageQuery,
    CatalogueTable,
    ContributionModal
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage, Offset, OffsetPagination } from 'template'
import { useMemo } from "react"
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useRoutesDefinition, useToggleState } from 'components'


export const ContributionListPage = () => {
    const { i18n, t } = useTranslation()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const {cataloguesContributions} = useRoutesDefinition()

    const successfullContribution = searchParams.get('successfullContribution') === "true"

    const [open, _, toggle] = useToggleState({ defaultOpen: successfullContribution })

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

    const title = t("myContributions")
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
            <ContributionModal
                open={open}
                onClose={() => {navigate(cataloguesContributions()); toggle()}}
            />
        </AppPage>
    )
}