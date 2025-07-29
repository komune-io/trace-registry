import { ProgressIndicator, TableComposable, TableV2, useTableComposable } from '@komune-io/g2'

import tableComposable from './autoTable.json'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useRoutesDefinition, useToggleState, WarningTicket } from 'components'
import { useCallback } from 'react'
import { ProtocolCompleteModal } from '../../../Protocol'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const extendingColumns = {
  progress: ProgressIndicator
}

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

  const tableState = useTableComposable({
    tableComposable: tableComposable as TableComposable,
    extendingColumns,
    data: [],
  })

  return (
    <>
      <WarningTicket severity='error' title={t("protocol.unvalidatedProtocol")} >
        <Typography variant="body2" color="inherit">{t("protocol.unvalidatedProtocolDetails")}</Typography>
      </WarningTicket>
      <TableV2
        tableState={tableState}
        isLoading={false}
        expectedSize={3}
      />
      <ProtocolCompleteModal open={open} onClose={onCloseModale} />
    </>
  )
}
