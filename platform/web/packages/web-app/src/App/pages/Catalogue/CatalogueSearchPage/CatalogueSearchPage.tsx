import { Dialog, Stack, Typography } from '@mui/material'
import { SelectableChipGroup, useUrlSavedState } from 'components'
import {
  CatalogueResultListByType,
  CatalogueSearchFilters,
  CatalogueSearchHeader, CatalogueSearchQuery, FacetDistribution,
  useCatalogueSearchQuery
} from 'domain-components'
import { useCallback, useEffect, useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FixedPagination, OffsetPagination } from 'template'

export const CatalogueSearchPage = () => {
  const { t, i18n } = useTranslation()
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
  }, [])

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

  const { data } = useCatalogueSearchQuery({
    query: {
      ...state,
      language: i18n.language,
    }
  })
  const pagination = useMemo((): OffsetPagination => ({ offset: state.offset!, limit: state.limit! }), [state.offset, state.limit])
  const distributions = useMemo((): Record<string, FacetDistribution[]> => (data?.distribution ?? {}), [data?.distribution])
  const typeDistribution = distributions["type"]?.map((distribution) => ({
    key: distribution.id,
    label: `${distribution.name} - ${distribution.size}`
  }))
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
          <Stack gap={3} flex={1}>
            {data && <Typography
              variant="subtitle1"
            >
              {t("resultNumber", { total: data.total })}
            </Typography>}
            <CatalogueResultListByType items={data?.items} />
          </Stack>
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
