import { ProgressIndicator, TableComposable, TableV2, useTableComposable } from '@komune-io/g2'

import tableComposable from './autoTable.json'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useRoutesDefinition, useToggleState } from 'components'
import { ReferentialCompleteModal } from '../ReferentialCompleteModal'
import { useCallback } from 'react'

const extendingColumns = {
  progress: ProgressIndicator
}

export const DraftReferentialPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const {catalogueId, draftId, tab} = useParams()
  const { cataloguesCatalogueIdDraftsDraftIdTab } = useRoutesDefinition()

  const completedReferential = searchParams.get('completed') === "true"

  const [open, _, toggle] = useToggleState({ defaultOpen: completedReferential })

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
      <TableV2
        tableState={tableState}
        isLoading={false}
        expectedSize={3}
      />
      <ReferentialCompleteModal open={open} onClose={onCloseModale} />
    </>
  )
}
