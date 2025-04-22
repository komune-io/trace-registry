import { useTheme } from '@komune-io/g2'
import { CircularProgress, Dialog, Stack, Typography } from '@mui/material'
import { SelectableChipGroup, useUrlSavedState, LocalTheme, IconPack } from 'components'
import {
  CatalogueResultListByType,
  CatalogueSearchFilters,
  CatalogueSearchHeader, CatalogueSearchQuery, catalogueTypes, FacetDistribution,
  useCatalogueSearchQuery
} from 'domain-components'
import { useCallback, useEffect, useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FixedPagination, OffsetPagination } from 'template'
import { keepPreviousData } from '@tanstack/react-query'

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
      setSearchParams(searchParams)
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
        <Stack
          direction="row"
          gap={3}
        >
          <CatalogueSearchFilters
            licences={state.licenseId}
            licencesDistribution={distributions["licenseId"]}
            accesses={state.accessRights}
            accessesDistribution={distributions["accessRights"]}
            themes={state.themeIds}
            themesDistribution={distributions["themeIds"]}
            onChangeAccesses={changeValueCallback('accessRights')}
            onChangeLicenses={changeValueCallback('licenseId')}
            onChangeThemes={changeValueCallback('themeIds')}
          />
          {isFetching ? <Stack direction="row" justifyContent="center" flex={1} pt={6}>
            <CircularProgress size={60} />
          </Stack> : <Stack gap={3} flex={1}>
            {data && <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold"
              }}
            >
              {t("resultNumber", { total: data.total })}
            </Typography>}
            <CatalogueResultListByType items={data?.items} />
          </Stack>}
        </Stack>
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
