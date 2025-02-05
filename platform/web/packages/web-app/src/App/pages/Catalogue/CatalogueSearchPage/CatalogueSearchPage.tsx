import { Dialog } from '@mui/material'
import { CatalogueSearchHeader } from 'domain-components'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'


export const CatalogueSearchPage = () => {

  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const [goBackUrl] = useState(searchParams.get("goBackUrl") ?? "")
  const navigate = useNavigate()

  const onClose = useCallback(
    () => {
      navigate(goBackUrl)
    },
    [navigate, goBackUrl],
  )


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
      <CatalogueSearchHeader goBackUrl={goBackUrl} />
    </Dialog>
  )
}
