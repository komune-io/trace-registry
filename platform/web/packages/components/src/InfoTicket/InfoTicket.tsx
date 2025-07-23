import { DoneRounded, InfoRounded } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export interface InfoTicketProps {
  title: string
  children?: React.ReactNode
  severity?: 'info' | 'success'
}

export const InfoTicket = (props: InfoTicketProps) => {
  const { children, title, severity = "info" } = props
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        gap: 1,
        background: (theme) => theme.palette[severity].main + "1A",
        color: severity + ".main",
        borderRadius: 1.5,
        p: 1.5
      }}
    >
      {severity === "info" ? <InfoRounded color='inherit' /> :
        <Box
          sx={{
            p: "1px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 0.5,
            bgcolor: severity + ".main",
            color: "white"
          }}
        >
          <DoneRounded color='inherit' />
        </Box>
      }
      <Typography variant="subtitle2" color="inherit">{title}</Typography>
      <Box flex={1} />
      {children}
    </Stack>
  )
}