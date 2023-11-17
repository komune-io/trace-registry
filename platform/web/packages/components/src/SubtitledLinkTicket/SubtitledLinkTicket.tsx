import { Paper, Typography } from '@mui/material'
import { Link } from '@smartb/g2'
import {Link as RouterLink, LinkProps} from 'react-router-dom'

export interface SubtitledLinkTicketProps {
    title: string
    activity: {
        label: string
        url: string
    }
}

export const SubtitledLinkTicket = (props: SubtitledLinkTicketProps) => {
    const {title, activity} = props
  return (
    <Paper
    elevation={0}
    sx={{
        background: (theme) => theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        gap: (theme) => theme.spacing(1),
        padding: (theme) => theme.spacing(1.5, 2)
    }}
    >
        <Typography variant='subtitle2' >{title}</Typography>
        <Link<LinkProps> component={RouterLink} componentProps={{to: activity.url}} sx={{color: "#666560"}} >{activity.label}</Link>
    </Paper>
  )
}
