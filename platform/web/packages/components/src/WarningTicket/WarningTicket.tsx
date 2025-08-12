import { Info, WarningRounded } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import React from 'react'

export interface WarningTicketProps {
    title: string
    severity?: "warning" | "error"
    children: React.ReactNode
}

export const WarningTicket = (props: WarningTicketProps) => {
    const {children, title, severity = "warning"} = props
  return (
    <Stack
    sx={{
      gap: 2,
      background: (theme) => 
      (
        severity == "error" ? theme.palette.error.main : theme.palette.warning.main
      ) + "0D",
        borderRadius: 1.5,
      p: 1.5,
      color: severity == "error" ? "error.main" : "warning.main"
    }}
  >
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      sx={{
        color: "inherit"
      }}
    >
      {severity == "error" ? (
        <Info color='inherit' />
      ):(
        <WarningRounded color='inherit' />
       )}
      <Typography variant="subtitle2" color="inherit">{title}</Typography>
    </Stack>
    {children}
  </Stack>
  )
}
