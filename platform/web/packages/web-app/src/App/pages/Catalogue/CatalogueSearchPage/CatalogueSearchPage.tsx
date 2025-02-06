import { Dialog, Stack } from '@mui/material'
import { SelectableChipGroup, useUrlSavedState } from 'components'
import { CatalogueSearchFilters, CatalogueSearchHeader, catalogueTypes } from 'domain-components'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'


export const CatalogueSearchPage = () => {

  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [goBackUrl] = useState(searchParams.get("goBackUrl") ?? "/")
  const navigate = useNavigate()

  console.log(searchParams.get("query"))
  console.log(goBackUrl)

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


  const { state, changeValueCallback } = useUrlSavedState<{ query: string, type: string[], licenses: string[], accesses: string[], themes: string[] }>()

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
        </Stack>
      </Stack>
    </Dialog>
  )
}
