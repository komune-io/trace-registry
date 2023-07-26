import { DeleteRounded } from '@mui/icons-material'
import { Stack, Typography, IconButton } from '@mui/material'

export interface ChatHeaderProps {
    removeAll: () => void
}

export const ChatHeader = (props: ChatHeaderProps) => {
    const { removeAll } = props
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                padding: (theme) => theme.spacing(1, 2),
                borderBottom: "1px solid #E0E0E0",
                width: "100%"
            }}
            gap={2}
        >
            <Typography
                variant="h6"
            >
                Tmate
            </Typography>
            <IconButton
                onClick={removeAll}
            >
                <DeleteRounded />
            </IconButton>
        </Stack>
    )
}
