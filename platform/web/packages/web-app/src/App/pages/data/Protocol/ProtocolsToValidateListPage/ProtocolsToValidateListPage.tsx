import {
    AutoProtocolTable,
    useProtocolsFilters
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage, Offset, OffsetPagination } from 'template'
import { useMemo } from "react"


export const ProtocolsToValidateListPage = () => {
    const { t } = useTranslation()

    const { submittedFilters, setOffset, component } = useProtocolsFilters({
    })

    const pagination = useMemo((): OffsetPagination => ({ offset: submittedFilters.offset ?? Offset.default.offset, limit: submittedFilters.limit ?? Offset.default.limit }), [submittedFilters.offset, submittedFilters.limit])


    // const { data, isInitialLoading } = useCatalogueDraftPageQuery({
    //     query: {
    //         ...submittedFilters,
    //         status: ["SUBMITTED"]
    //     }
    // })

    const title = t("protocolsToValidate")
    return (
        <AppPage
            title={title}
            sx={{
                paddingBottom: "90px"
            }}
        >
            {component}
            <AutoProtocolTable
                // page={data}
                pagination={pagination}
                // isLoading={isInitialLoading}
                onOffsetChange={setOffset}
            />
        </AppPage>
    )
}