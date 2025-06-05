import { Dialog, IconButton, Stack } from '@mui/material'
import { keepPreviousData } from '@tanstack/react-query'
import { LabeledSwitch, useRoutesDefinition, useUrlSavedState } from 'components'
import {
  CatalogueSearchFilters,
  CatalogueSearchQuery,
  CatalogueTable,
  useCatalogueAddRelatedCataloguesCommand,
  useCatalogueGetQuery,
  useCatalogueRemoveRelatedCataloguesCommand,
  useCatalogueSearchQuery
} from 'domain-components'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { OffsetPagination } from 'template'
import { RowSelectionState } from '@tanstack/react-table';
import { CloseRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useCataloguesFilters } from '100m-components'
import { useDebouncedValue } from '@mantine/hooks'


export const CatalogueLinkPage = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [debouncedRowSelection] = useDebouncedValue(rowSelection, 300);
  const previouslySavedRowSelection = useRef<RowSelectionState>({})
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

  const getSubCatalogue = useCatalogueGetQuery({
    query: {
      id: subCatalogueId!,
      language: i18n.language
    }
  })

  const { data, isFetching } = useCatalogueSearchQuery({
    query: {
      ...state,
      ...submittedFilters,
      isSelected: undefined,
      relatedInCatalogueIds: state.isSelected ? { "content": [subCatalogueId] } : undefined,
      language: i18n.language,
    },
    options: {
      placeholderData: keepPreviousData,
    }
  })

  useEffect(() => {
    if (getSubCatalogue.data?.item?.relatedCatalogues && getSubCatalogue.data?.item?.relatedCatalogues["content"]) {
      const selection: RowSelectionState = {}
      getSubCatalogue.data?.item?.relatedCatalogues["content"].forEach((relatedCatalogue) => {
        selection[relatedCatalogue.id] = true
      })
      setRowSelection(selection)
      previouslySavedRowSelection.current = selection
    }
  }, [getSubCatalogue.data?.item])

  const addRelation = useCatalogueAddRelatedCataloguesCommand({})
  const removeRelation = useCatalogueRemoveRelatedCataloguesCommand({})

  useEffect(() => {
    if (debouncedRowSelection && Object.keys(debouncedRowSelection).length > 0) {
      //compare difference between initialSelection and debouncedRowSelection
      const selectedCatalogueIds = Object.keys(debouncedRowSelection).filter(id => debouncedRowSelection[id]);
      const initialSelectedCatalogueIds = previouslySavedRowSelection.current ? Object.keys(previouslySavedRowSelection.current || {}).filter(id => previouslySavedRowSelection.current[id]) : []
      const addedCatalogues = selectedCatalogueIds.filter(id => !initialSelectedCatalogueIds.includes(id));
      const removedCatalogues = initialSelectedCatalogueIds.filter(id => !selectedCatalogueIds.includes(id));
      if (addedCatalogues.length > 0) {
        addRelation.mutate({
          id: subCatalogueId!,
          relatedCatalogueIds: { "content": addedCatalogues }
        })
      }
      if (removedCatalogues.length > 0) {
        removeRelation.mutate({
          id: subCatalogueId!,
          relatedCatalogueIds: { "content": removedCatalogues },
        })
      }
      previouslySavedRowSelection.current = debouncedRowSelection;
    }
  }, [debouncedRowSelection])


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
            additionalFilters={
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
