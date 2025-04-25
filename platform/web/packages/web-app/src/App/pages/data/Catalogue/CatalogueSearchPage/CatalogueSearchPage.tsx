import { useTheme } from '@komune-io/g2'
import { Dialog, Stack } from '@mui/material'
import { SelectableChipGroup, useUrlSavedState, LocalTheme, IconPack } from 'components'
import {
  CatalogueSearchHeader, CatalogueSearchModule, CatalogueSearchQuery, catalogueTypes, FacetDistribution,
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
      setSearchParams(searchParams, {replace: true})
    }
  }, [])

  const { state, changeValueCallback } = useUrlSavedState<CatalogueSearchQuery>({
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
  const distributions = useMemo((): Record<string, FacetDistribution[]> => (data?.distribution ?? {}), [data?.distribution])
  const typeDistribution = useMemo(() => {
    return catalogueTypes.map((type) => {
      const distribution = distributions["type"]?.find((distribution) => distribution.id === type)
      const typeSimple = type.split("-").pop() ?? ""
      const typeLabel = t("catalogues.types." + type)
      const Icon = IconPack[typeSimple]
      return {
        key: type,
        label: distribution ? `${typeLabel} - ${distribution?.size}` : typeLabel,
        color: theme.local?.colors[typeSimple],
        icon: <Icon />
      }
    })
  }, [theme, distributions])


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
      <CatalogueSearchHeader initialValue={state.query} onSearch={changeValueCallback("query")} goBackUrl={goBackUrl} />
      <Stack
        sx={{
          maxWidth: 1200,
          width: "100%",
          gap: 3,
          pr: 3
        }}
      >
        <SelectableChipGroup
          options={typeDistribution}
          values={state.type}
          onChange={changeValueCallback('type')}
          forTypes
        />
        <CatalogueSearchModule<CatalogueSearchQuery>
          changeValueCallback={changeValueCallback}
          state={state}
          data={data}
          isFetching={isFetching}

        />
      </Stack>
      <FixedPagination
        pagination={pagination}
        onOffsetChange={(offset) => {
          changeValueCallback('limit')(offset.limit)
          changeValueCallback('offset')(offset.offset)
        }}
        page={data}
      />
    </Dialog>
  )
}
