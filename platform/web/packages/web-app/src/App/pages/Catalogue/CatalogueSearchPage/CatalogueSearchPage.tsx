import { Dialog } from '@mui/material'
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
    >
    </Dialog>
  )
}
