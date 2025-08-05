import { useTheme } from '@komune-io/g2'
import { Stack } from '@mui/material'
import { SelectableChipGroup, useUrlSavedState, LocalTheme, IconPack } from 'components'
import {
  CatalogueSearchHeader, CatalogueSearchModule, CatalogueSearchQuery,
  useCatalogueGetBlueprintsQuery,
  useCatalogueSearchQuery
} from 'domain-components'
import { useEffect, useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { keepPreviousData } from '@tanstack/react-query'
import { DialogPage, FixedPagination, OffsetPagination } from 'template'

export const CatalogueSearchPage = () => {
  const { t, i18n } = useTranslation()
  const theme = useTheme<LocalTheme>()
  const [searchParams, setSearchParams] = useSearchParams()
  const [goBackUrl] = useState(searchParams.get("goBackUrl") ?? "/")

  const allowedSearchTypes = useCatalogueGetBlueprintsQuery({
    query: {
      language: i18n.language
    }
  }).data?.item

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
    <DialogPage
      goBackUrl={goBackUrl}
      sx={{
        "& .MuiDialog-paper": {
          flexDirection: "column",
          alignItems: "center",
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
          chipType='type'
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
    </DialogPage>
  )
}
