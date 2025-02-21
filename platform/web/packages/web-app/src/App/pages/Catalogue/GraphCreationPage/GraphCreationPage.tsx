import { Dialog, Stack } from '@mui/material'
import {
  GraphCreationheader,
} from 'domain-components'
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import {ChartSelector, DataGrid, DataMapping} from "raw-graph"
import { dataGridProps } from './dataGridProps'
import { chartSelectorProps } from './chartSelectorProps'
import { dataMappingProps } from './dataMappingProps'

export const GraphCreationPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const onClose = useCallback(
    () => {
      navigate("/")
    },
    [navigate],
  )

  useEffect(() => {
    document.title = "WikiCO2 | " + t("search")
  }, [t])

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
      <GraphCreationheader title='Créer un draft' goBackUrl={"/"} />
      <Stack
        sx={{
          maxWidth: 1200,
          width: "100%",
          gap: 3,
          pr: 3
        }}
      >
      <DataGrid 
        {...dataGridProps}
      />
      <ChartSelector 
      {...chartSelectorProps}
      />
      <DataMapping {...dataMappingProps} />
      </Stack>
    </Dialog>
  )
}
