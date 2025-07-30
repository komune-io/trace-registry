import { TableComposable } from '@komune-io/g2'

import tableComposable from './autoTable.json'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useRoutesDefinition, useToggleState, WarningTicket } from 'components'
import { useCallback } from 'react'
import { AutoProtocolTable, Protocol, ProtocolCompleteModal } from '../../../Protocol'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const DraftProtocolPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const {t} = useTranslation()
  const { catalogueId, draftId, tab } = useParams()
  const { cataloguesCatalogueIdDraftsDraftIdTab } = useRoutesDefinition()

  const completedProtocol = searchParams.get('completed') === "true"

  const [open, _, toggle] = useToggleState({ defaultOpen: completedProtocol })

  const onCloseModale = useCallback(
    () => {
      navigate(cataloguesCatalogueIdDraftsDraftIdTab(catalogueId!, draftId!, tab!))
      toggle()
    },
    [catalogueId, draftId, tab, toggle],
  )

  return (
    <>
      <WarningTicket severity='error' title={t("protocol.unvalidatedProtocol")} >
        <Typography variant="body2" color="inherit">{t("protocol.unvalidatedProtocolDetails")}</Typography>
      </WarningTicket>
      <AutoProtocolTable
        tableComposable={tableComposable as TableComposable<Protocol>}
        isLoading={false}
        expectedSize={3}
      />
      <ProtocolCompleteModal open={open} onClose={onCloseModale} />
    </>
  )
}
