import { G2Row, TableComposable } from '@komune-io/g2'

import tableComposable from './autoTable.json'
import { LinkProps, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useRoutesDefinition, useToggleState, WarningTicket } from 'components'
import { useCallback, useMemo } from 'react'
import { AutoProtocolTable, Certification, CertificationRef, ProtocolCompleteModal } from '../../../Protocol'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { CatalogueDraft } from '../../model'
import { PageQueryResult } from 'template'

interface DraftCertificationPageProps {
  draft?: CatalogueDraft
  isLoading?: boolean
}

export const DraftCertificationPage = (props: DraftCertificationPageProps) => {
  const { draft, isLoading } = props
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const {t} = useTranslation()
  const { catalogueId, draftId, tab } = useParams()
  const { cataloguesCatalogueIdDraftsDraftIdTab, cataloguesCatalogueIdDraftIdTabProtocolIdCertificationIdProtocol } = useRoutesDefinition()

  const completedProtocol = searchParams.get('completed') === "true"

  const [open, _, toggle] = useToggleState({ defaultOpen: completedProtocol })

  const onCloseModale = useCallback(
    () => {
      navigate(cataloguesCatalogueIdDraftsDraftIdTab(catalogueId!, draftId!, tab!))
      toggle()
    },
    [catalogueId, draftId, tab, toggle],
  )

  const page = useMemo((): PageQueryResult<CertificationRef> => ({
    items: draft?.catalogue.certifications ?? [],
    total: draft?.catalogue.certifications.length ?? 0
  }), [draft?.catalogue.certifications])

  const getRowLink = useCallback(
    (row: G2Row<Certification | CertificationRef>): LinkProps => ({
      to: cataloguesCatalogueIdDraftIdTabProtocolIdCertificationIdProtocol(catalogueId!, draftId!, tab!, row.original.protocol.id, row.original.id)
    }),
    [catalogueId, draftId, tab],
  )

  const hasError = useMemo(() => {
    return draft?.catalogue.certifications.some(certification => certification.status === "REJECTED")
  }, [draft?.catalogue.certifications])

  return (
    <>
      {hasError && <WarningTicket severity='error' title={t("protocol.unvalidatedProtocol")} >
        <Typography variant="body2" color="inherit">{t("protocol.unvalidatedProtocolDetails")}</Typography>
      </WarningTicket>}
      <AutoProtocolTable
        tableComposable={tableComposable as TableComposable<CertificationRef>}
        isLoading={isLoading}
        expectedSize={3}
        page={page}
        getRowLink={getRowLink}
      />
      <ProtocolCompleteModal open={open} onClose={onCloseModale} />
    </>
  )
}
