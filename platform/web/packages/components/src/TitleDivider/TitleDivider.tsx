import { Divider, Stack, Typography } from '@mui/material'
import {Chip} from "@komune-io/g2"

export interface TitleDividerProps {
    title: string
    status?: {
        label: string
        color: string
    }
    size?: "h5" | "h6" | "subtitle1"
}

export const TitleDivider = (props: TitleDividerProps) => {
    const { title, status, size = "h5" } = props
    return (
        <Stack
            gap={size === "subtitle1" ? 1.5 : 2}
        >
            <Stack
                gap={size === "subtitle1" ? 1.5 : 2}
                direction="row"
                justifyContent="space-between"
            >
                <Typography
                    variant={size}
                >
                    {title}
                </Typography>
                {status && <Chip {...status} />}
            </Stack>
            <Divider
            />
        </Stack>
    )
}
