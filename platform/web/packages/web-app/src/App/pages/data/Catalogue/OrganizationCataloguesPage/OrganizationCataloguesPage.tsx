import {CatalogueTable, useCatalogueSearchQuery, useCataloguesFilters} from 'domain-components'
import {useTranslation} from 'react-i18next'
import {AppPage, Offset, OffsetPagination} from 'template'
import {useMemo} from "react"
import {useExtendedAuth} from 'components'


export const OrganizationCataloguesPage = () => {
    const { t, i18n } = useTranslation()
    const { service } = useExtendedAuth()

    const { submittedFilters, setOffset, component } = useCataloguesFilters({
    })

    const pagination = useMemo((): OffsetPagination => ({ offset: submittedFilters.offset ?? Offset.default.offset, limit: submittedFilters.limit ?? Offset.default.limit }), [submittedFilters.offset, submittedFilters.limit])


    const { data, isInitialLoading } = useCatalogueSearchQuery({
        query: {
            ...submittedFilters,
            language: i18n.language,
            ownerOrganizationId: service.getUser()?.memberOf,
            otherLanguageIfAbsent: true
        },
        options: {
            enabled: !!service.getUser()?.memberOf
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
            <CatalogueTable
                page={data}
                pagination={pagination}
                isLoading={isInitialLoading}
                onOffsetChange={setOffset}
            />
        </AppPage>
    )
}
