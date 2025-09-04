import {AutoProtocolTable, Certification, CertificationRef, useCertificationPageQuery, useProtocolsFilters} from 'domain-components'
import {useTranslation} from 'react-i18next'
import {AppPage, Offset, OffsetPagination} from 'template'
import {useCallback, useMemo} from "react"
import tableComposable from './autoTable.json'
import {G2Row, TableComposable} from "@komune-io/g2";
import {useRoutesDefinition} from "components";
import {LinkProps} from "react-router-dom";


export const ProtocolsToValidateListPage = () => {
    const { t, i18n } = useTranslation()

    const { submittedFilters, setOffset, component } = useProtocolsFilters({
    })

    const pagination = useMemo((): OffsetPagination => ({ offset: submittedFilters.offset ?? Offset.default.offset, limit: submittedFilters.limit ?? Offset.default.limit }), [submittedFilters.offset, submittedFilters.limit])

    const { protocolsCertificationIdVerify } = useRoutesDefinition()

    const getRowLink = useCallback((row: G2Row<Certification | CertificationRef>): LinkProps => ({
        to: protocolsCertificationIdVerify(row.id)
    }), [])

    const { data, isInitialLoading } = useCertificationPageQuery({
        query: {
            ...submittedFilters,
            language: i18n.language,
            status: ["SUBMITTED"]
        }
    })

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
                tableComposable={tableComposable as TableComposable<CertificationRef>}
                page={data}
                pagination={pagination}
                isLoading={isInitialLoading}
                onOffsetChange={setOffset}
                getRowLink={getRowLink}
            />
        </AppPage>
    )
}
