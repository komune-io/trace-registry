
import { CloseRounded, Timeline } from '@mui/icons-material'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface GraphCreationheaderProps {
    title?: string
    goBackUrl: string
}

export const GraphCreationheader = (props: GraphCreationheaderProps) => {
    const {goBackUrl, title} = props
    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={1.5}
            sx={{
                width: "100%"
            }}
        >
            <Timeline />
            <Typography
            variant='h5'
            >
                {title}
            </Typography>
            <Box flex={1} />
            {/* @ts-ignore */}
            <IconButton
            component={Link}
            to={goBackUrl}
            sx={{
                color: "rgba(0, 0, 0, 0.54) !important"
            }}
            >
                <CloseRounded />
            </IconButton>
        </Stack>
    )
}
