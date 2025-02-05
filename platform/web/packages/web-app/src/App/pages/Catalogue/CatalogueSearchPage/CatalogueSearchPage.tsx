import { Dialog } from '@mui/material'
import { SelectableChipGroup, useUrlSavedState } from 'components'
import { CatalogueSearchHeader, catalogueTypes } from 'domain-components'
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


  const { state, changeValueCallback } = useUrlSavedState<{query: string, type: string[]}>()

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
          gap: 2
        }
      }}
    >
      <CatalogueSearchHeader initialValue={state.query} onSearch={changeValueCallback("query")} goBackUrl={goBackUrl} />
      <SelectableChipGroup
        options={catalogueTypes.map((type) => ({
          key: type,
          label: t("catalogues.types." + type)
        }))}
        values={state.type}
        onChange={changeValueCallback('type')}
      />
    </Dialog>
  )
}
