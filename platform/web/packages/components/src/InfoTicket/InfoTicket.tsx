import { InfoRounded } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export interface InfoTicketProps {
  title: string
  children?: React.ReactNode
}

export const InfoTicket = (props: InfoTicketProps) => {
  const { children, title } = props
  return (
    <Stack
    direction="row"
    alignItems="center"
      sx={{
        gap:1,
        background: (theme) => theme.palette.info.main + "0D",
        color: "info.main",
        borderRadius: 1.5,
        p: 1.5
      }}
    >
        <InfoRounded color='inherit' />
        <Typography variant="subtitle2" color="inherit">{title}</Typography>
        <Box flex={1} />
      {children}
    </Stack>
  )
}
