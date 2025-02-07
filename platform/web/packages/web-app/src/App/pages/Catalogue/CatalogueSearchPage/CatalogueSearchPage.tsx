import { Dialog, Stack, Typography } from '@mui/material'
import { SelectableChipGroup, useUrlSavedState } from 'components'
import { CataloguePageQuery, CatalogueResultList, CatalogueSearchFilters, CatalogueSearchHeader, catalogueTypes, useCataloguePageQuery } from 'domain-components'
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


  const { state, changeValueCallback } = useUrlSavedState<CataloguePageQuery & { licenses?: string[], accesses?: string[], themes?: string[] }>({
    initialState: {
      limit: 20,
      offset: 0
    }
  })

  const { data } = useCataloguePageQuery({
    query: {
      ...state,
      language: i18n.language,
      parentIdentifier: "objectif100m-systeme",
    }
  })

  const pagination = useMemo((): OffsetPagination => ({ offset: state.offset!, limit: state.limit! }), [state.offset, state.limit])

  return (
    <Dialog
      fullScreen
      open
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3
        }
      }}
    >
      <CatalogueSearchHeader initialValue={state.title} onSearch={changeValueCallback("title")} goBackUrl={goBackUrl} />
      <Stack
        sx={{
          maxWidth: 1200,
          width: "100%",
          gap: 3,
          pr: 3
        }}
      >
        <SelectableChipGroup
          options={catalogueTypes.map((type) => ({
            key: type,
            label: t("catalogues.types." + type)
          }))}
          values={state.type}
          onChange={changeValueCallback('type')}
        />
        <Stack
          direction="row"
          gap={3}
        >
          <CatalogueSearchFilters
            licences={state.licenses}
            accesses={state.accesses}
            themes={state.themes}
            onChangeAccesses={changeValueCallback('accesses')}
            onChangeLicenses={changeValueCallback('licenses')}
            onChangeThemes={changeValueCallback('themes')}
          />
          <Stack
            gap={3}
            flex={1}
          >
            {data && <Typography
              variant="subtitle1"
            >
              {t("resultNumber", { total: data.total })}
            </Typography>}
            <CatalogueResultList
              catalogues={data?.items}
              groupLabel={t("catalogues.types.100m-solution")}
            />
          </Stack>
        </Stack>
      </Stack>
      <FixedPagination
        pagination={pagination}
        onOffsetChange={changeValueCallback('offset')}
        page={data}
      />
    </Dialog>
  )
}
