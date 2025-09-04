import { Box, CircularProgress, IconButton, Stack, Typography } from '@mui/material'
import { keepPreviousData, useQueryClient } from '@tanstack/react-query'
import { LabeledSwitch, useRefetchOnDismount, useRoutesDefinition, useUrlSavedState } from 'components'
import {
  AutoCatalogueTable,
  CatalogueSearchFilters,
  CatalogueSearchQuery,
  useCatalogueAddRelatedCataloguesCommand,
  useCatalogueGetQuery,
  useCatalogueGetStructureQuery,
  useCatalogueRemoveRelatedCataloguesCommand,
  useCatalogueSearchQuery,
  useCataloguesFilters
} from 'domain-components'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { DialogPage, OffsetPagination } from 'template'
import { OnChangeFn, RowSelectionState } from '@tanstack/react-table';
import { CloseRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useDebouncedValue } from '@mantine/hooks'
import { SortOrder } from '@komune-io/g2'

export const CatalogueLinkPage = () => {
  const { t, i18n } = useTranslation()
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [debouncedRowSelection] = useDebouncedValue(rowSelection, 300);
  const previouslySavedRowSelection = useRef<RowSelectionState | undefined>(undefined)
  const [isSaving, setIsSaving] = useState(false)
  const { catalogueId, draftId, tab, subCatalogueId } = useParams()
  const { cataloguesCatalogueIdDraftsDraftIdTab } = useRoutesDefinition()
  const { submittedFilters, component } = useCataloguesFilters({
    withPage: false,
    noType: true,
  })

  const queryClient = useQueryClient()

  const { state, changeValueCallback, validatedState, onValidate, onClear } = useUrlSavedState<CatalogueSearchQuery & { isSelected?: boolean, sort: Record<string, SortOrder> }>({
    initialState: {
      limit: 20,
      offset: 0,
      sort: {}
    }
  })
  
  useEffect(() => {
    if ((submittedFilters.query || submittedFilters.availableLanguages) && state.offset && state.offset > 0)  {
      changeValueCallback("offset")(0)
    }
  }, [submittedFilters.query, submittedFilters.availableLanguages])
  

  const getSubCatalogue = useCatalogueGetQuery({
    query: {
      id: subCatalogueId!,
      language: i18n.language
    }
  })

  const subCatalogueTypes = getSubCatalogue.data?.item?.configuration?.relations?.content?.types ?? []

  const structure = useCatalogueGetStructureQuery({
      query: {
        type: subCatalogueTypes[0],
        language: i18n.language,
      }
    })

  const { data, isFetching } = useCatalogueSearchQuery({
    query: {
      query: submittedFilters.query,
      availableLanguages: submittedFilters.availableLanguages,
      ...validatedState,
      type: subCatalogueTypes,
      //@ts-ignore
      isSelected: undefined,
      relatedInCatalogueIds: state.isSelected ? { "content": [subCatalogueId!] } : undefined,
      language: i18n.language,
    },
    options: {
      placeholderData: keepPreviousData,
      enabled: !!getSubCatalogue.data?.item,
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
    } else if (getSubCatalogue.data?.item) {
      previouslySavedRowSelection.current = {}
    }
  }, [getSubCatalogue.data?.item])

  const addRelation = useCatalogueAddRelatedCataloguesCommand({})
  const removeRelation = useCatalogueRemoveRelatedCataloguesCommand({})

  const refetchData = useCallback(
    () => {
      queryClient.invalidateQueries({ queryKey: ["data/cataloguePage", { parentId: tab! }] })
      getSubCatalogue.refetch()
    },
    [queryClient.invalidateQueries, tab, getSubCatalogue.refetch],
  )

  const { doRefetchOnDismount } = useRefetchOnDismount({ refetch: refetchData })

  useEffect(() => {
    if (debouncedRowSelection && previouslySavedRowSelection.current) {
      //compare difference between initialSelection and debouncedRowSelection
      const selectedCatalogueIds = Object.keys(debouncedRowSelection).filter(id => debouncedRowSelection[id]);
      const initialSelectedCatalogueIds = previouslySavedRowSelection.current ? Object.keys(previouslySavedRowSelection.current || {}).filter(id => previouslySavedRowSelection.current![id]) : []
      const addedCatalogues = selectedCatalogueIds.filter(id => !initialSelectedCatalogueIds.includes(id));
      const removedCatalogues = initialSelectedCatalogueIds.filter(id => !selectedCatalogueIds.includes(id));
      if (addedCatalogues.length > 0) {
        addRelation.mutateAsync({
          id: subCatalogueId!,
          relatedCatalogueIds: { "content": addedCatalogues }
        }).then(() => {
          setIsSaving(false)
        })
        doRefetchOnDismount()
      }
      if (removedCatalogues.length > 0) {
        removeRelation.mutateAsync({
          id: subCatalogueId!,
          relatedCatalogueIds: { "content": removedCatalogues },
        }).then(() => {
          setIsSaving(false)
        })
        doRefetchOnDismount()
      }
      previouslySavedRowSelection.current = debouncedRowSelection;
    }
  }, [debouncedRowSelection])


  const pagination = useMemo((): OffsetPagination => ({ offset: state.offset!, limit: state.limit! }), [state.offset, state.limit])

  const goBackUrl = cataloguesCatalogueIdDraftsDraftIdTab(catalogueId!, draftId!, tab!)

  const onRowSelectionChange = useCallback<OnChangeFn<RowSelectionState>>(
    (fncOrValue) => {
      setRowSelection(fncOrValue)
      setIsSaving(true)
    },
    [],
  )

  return (
    <DialogPage
      goBackUrl={goBackUrl}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={2}
      >
        {isSaving && (
          <>
            <CircularProgress sx={{ ml: "424px" }} size={20} />
            <Typography
              variant="body2">
              {t('saving')}
            </Typography>
          </>
        )}
        <Box flex={1} />
        <IconButton
          component={Link}
          to={goBackUrl}
          sx={{
            color: "rgba(0, 0, 0, 0.54) !important",
          }}
        >
          <CloseRounded />
        </IconButton>
      </Stack>
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
            facets={data?.facets}
            //@ts-ignore
            onChangeFacet={changeValueCallback}
            onClear={onClear}
            onValidate={onValidate}
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
          <AutoCatalogueTable
            page={data}
            pagination={pagination}
            isLoading={isFetching || getSubCatalogue.isFetching || structure.isFetching}
            onOffsetChange={(offset) => {
              changeValueCallback('limit', true)(offset.limit)
              changeValueCallback('offset', true)(offset.offset)
            }}
            rowSelection={rowSelection}
            onRowSelectionChange={onRowSelectionChange}
            expectedSize={20}
            //@ts-ignore
            tableComposable={structure.data?.item?.table}
            sortState={state.sort}
            onSortingChange={changeValueCallback('sort')}
            sx={{
              width: "100%",
            }}
          />
        </Stack>
      </Stack>
    </DialogPage>
  )
}
