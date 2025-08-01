import { useTheme } from '@komune-io/g2'
import { Dialog, Stack } from '@mui/material'
import { SelectableChipGroup, useUrlSavedState, LocalTheme, IconPack } from 'components'
import {
  CatalogueSearchHeader, CatalogueSearchModule, CatalogueSearchQuery,
  useCatalogueGetBlueprintsQuery,
  useCatalogueSearchQuery
} from 'domain-components'
import { useCallback, useEffect, useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { keepPreviousData } from '@tanstack/react-query'
import { FixedPagination, OffsetPagination } from 'template'

export const CatalogueSearchPage = () => {
  const { t, i18n } = useTranslation()
  const theme = useTheme<LocalTheme>()
  const [searchParams, setSearchParams] = useSearchParams()
  const [goBackUrl] = useState(searchParams.get("goBackUrl") ?? "/")
  const navigate = useNavigate()

  const allowedSearchTypes = useCatalogueGetBlueprintsQuery({
    query: {
      language: i18n.language
    }
  }).data?.item

  const onClose = useCallback(
    () => {
      navigate(goBackUrl)
    },
    [navigate, goBackUrl],
  )

  useEffect(() => {
    document.title = "WikiCO2 | " + t("search")
  }, [t])

  useEffect(() => {
    if (searchParams.get("goBackUrl")) {
      searchParams.delete("goBackUrl")
      setSearchParams(searchParams, { replace: true })
    }
  }, [])

  const { state, validatedState, changeValueCallback, onClear, onValidate } = useUrlSavedState<CatalogueSearchQuery>({
    initialState: {
      limit: 20,
      offset: 0
    }
  })

  const { data, isFetching } = useCatalogueSearchQuery({
    query: {
      type: allowedSearchTypes?.globalSearchTypes,
      ...validatedState,
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
  const facets = useMemo(() => data?.facets, [data?.facets])



  const typeFacet = useMemo(() => {
    if (!allowedSearchTypes) return []
    return Object.values(allowedSearchTypes.types).filter((type) => type.includeInGlobalSearch).map((type) => {
      const facetValue = facets?.find(f => f.key === "type")?.values.find(v => v.key === type.identifier)
      const Icon = IconPack[type.identifier]
      return {
        key: type.identifier,
        label: facetValue ? `${type.name} - ${facetValue?.count}` : type.name,
        color: theme.local?.colors[type.identifier],
        icon: <Icon />
      }
    })
  }, [theme, facets, allowedSearchTypes])


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
          flexDirection: "column",
          alignItems: "center",
          gap: 3
        }
      }}
    >
      <CatalogueSearchHeader initialValue={state.query} onSearch={changeValueCallback("query", true)} goBackUrl={goBackUrl} />
      <Stack
        sx={{
          maxWidth: 1200,
          width: "100%",
          gap: 3,
          pr: 3
        }}
      >
        <SelectableChipGroup
          options={typeFacet ?? []}
          values={state.type}
          onChange={changeValueCallback('type')}
          forTypes
        />
        <CatalogueSearchModule<CatalogueSearchQuery>
          changeValueCallback={changeValueCallback}
          state={state}
          data={data}
          isFetching={isFetching}
          onValidate={onValidate}
          onClear={onClear}
        />
      </Stack>
      <FixedPagination
        pagination={pagination}
        onOffsetChange={(offset) => {
          changeValueCallback('limit', true)(offset.limit)
          changeValueCallback('offset', true)(offset.offset)
        }}
        page={data}
      />
    </Dialog>
  )
}
