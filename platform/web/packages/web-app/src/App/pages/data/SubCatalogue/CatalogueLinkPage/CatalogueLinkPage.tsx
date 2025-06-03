import { Dialog, Stack } from '@mui/material'
import { keepPreviousData } from '@tanstack/react-query'
import { LabeledSwitch, useUrlSavedState } from 'components'
import {
  CatalogueSearchFilters,
  CatalogueSearchQuery,
  CatalogueTable,
  useCatalogueSearchQuery
} from 'domain-components'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { OffsetPagination } from 'template'
import { RowSelectionState } from '@tanstack/react-table';


export const CatalogueLinkPage = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  const { state, changeValueCallback } = useUrlSavedState<CatalogueSearchQuery & {isSelected?: boolean}>({
    initialState: {
      limit: 20,
      offset: 0
    }
  })

  const { data, isFetching } = useCatalogueSearchQuery({
    query: {
      ...state,
      language: i18n.language,
    },
    options: {
      placeholderData: keepPreviousData,
      //prevent double fetching when goBackUrl is set
      //@ts-ignore
      enabled: !state.goBackUrl,
    }
  })
  const pagination = useMemo((): OffsetPagination => ({ offset: state.offset!, limit: state.limit! }), [state.offset, state.limit])

  const onClose = useCallback(
    () => {
      navigate("/")
    },
    [navigate],
  )

  return (
    <Dialog
      fullScreen
      open
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          p: 3,
          pb: 12,
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "start",
          gap: 3
        }
      }}
    >
      <Stack
        sx={{
          maxWidth: 400,
          width: "100%",
          gap: 3,
          pr: 3
        }}
      >
        <CatalogueSearchFilters
          additionnalfilters={
            <LabeledSwitch
            label={t('catalogues.selectedOnly')}
            checked={state.isSelected}
            onChange={(_, checked) => changeValueCallback("isSelected")(checked)}
          />
          }
          savedState={state}
          distributions={data?.distribution}
          //@ts-ignore
          onChangeDistribution={changeValueCallback}
        />
      </Stack>
      <Stack
        sx={{
          maxWidth: 1200,
          gap: 3,
          pr: 3
        }}
      >
        <CatalogueTable
          page={data}
          pagination={pagination}
          isLoading={isFetching}
          onOffsetChange={(offset) => {
            changeValueCallback('limit')(offset.limit)
            changeValueCallback('offset')(offset.offset)
          }}
          rowSelection={rowSelection}
          onRowSelectionChange={setRowSelection}
        />
      </Stack>
    </Dialog>
  )
}
