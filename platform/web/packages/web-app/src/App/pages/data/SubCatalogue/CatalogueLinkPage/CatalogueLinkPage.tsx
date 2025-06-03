import { Dialog, IconButton, Stack } from '@mui/material'
import { keepPreviousData } from '@tanstack/react-query'
import { LabeledSwitch, useRoutesDefinition, useUrlSavedState } from 'components'
import {
  CatalogueSearchFilters,
  CatalogueSearchQuery,
  CatalogueTable,
  useCatalogueSearchQuery
} from 'domain-components'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { OffsetPagination } from 'template'
import { RowSelectionState } from '@tanstack/react-table';
import { CloseRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useCataloguesFilters } from '100m-components'


export const CatalogueLinkPage = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const { catalogueId, draftId, tabId, subCatalogueId } = useParams()
  const { cataloguesCatalogueIdDraftIdEditTab } = useRoutesDefinition()
  const { submittedFilters, component } = useCataloguesFilters({
    withPage: false
  })

  const { state, changeValueCallback } = useUrlSavedState<CatalogueSearchQuery & { isSelected?: boolean }>({
    initialState: {
      limit: 20,
      offset: 0
    }
  })

  const { data, isFetching } = useCatalogueSearchQuery({
    query: {
      ...state,
      ...submittedFilters,
      language: i18n.language,
    },
    options: {
      placeholderData: keepPreviousData,
      //prevent double fetching when goBackUrl is set
      //@ts-ignore
      enabled: !state.goBackUrl,
    }
  })

  useEffect(() => {
    if (data?.items && subCatalogueId) {
      const selection: RowSelectionState = {}
      data.items.forEach(catalogue => {
        if ((catalogue.relatedCatalogues ?? {})[subCatalogueId]) {
          selection[catalogue.id] = true
        }
      });
      setRowSelection(selection)
    }
  }, [data, subCatalogueId])

  const pagination = useMemo((): OffsetPagination => ({ offset: state.offset!, limit: state.limit! }), [state.offset, state.limit])

  const onClose = useCallback(
    () => {
      navigate(cataloguesCatalogueIdDraftIdEditTab(catalogueId!, draftId!, tabId!))
    },
    [navigate, catalogueId, draftId, tabId],
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
          gap: 3
        }
      }}
    >
      <IconButton
        component={Link}
        to={cataloguesCatalogueIdDraftIdEditTab(catalogueId!, draftId!, tabId!)}
        sx={{
          color: "rgba(0, 0, 0, 0.54) !important",
          alignSelf: "flex-end"
        }}
      >
        <CloseRounded />
      </IconButton>
      <Stack
      direction="row"
      gap={3}
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
          {component}
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
      </Stack>
    </Dialog>
  )
}
