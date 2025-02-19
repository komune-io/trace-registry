import { WarningRounded } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import React from 'react'

export interface WarningTicketProps {
    title: string
    children: React.ReactNode
}

export const WarningTicket = (props: WarningTicketProps) => {
    const {children, title} = props
  return (
    <Stack
    sx={{
      gap: 2,
      background: (theme) => theme.palette.warning.main + "0D",
        borderRadius: 1.5,
      p: 1.5
    }}
  >
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      sx={{
        color: "warning.main"
      }}
    >
      <WarningRounded color='inherit' />
      <Typography variant="subtitle2" color="inherit">{title}</Typography>
    </Stack>
    {children}
  </Stack>
  )
}
