import { Divider, Stack, Typography } from '@mui/material'
import {Chip} from "@smartb/g2"

export interface TitleDividerProps {
    title: string
    status?: {
        label: string
        color: string
    }
}

export const TitleDivider = (props: TitleDividerProps) => {
    const { title, status } = props
    return (
        <Stack
            gap={2}
        >
            <Stack
                gap={2}
                direction="row"
                justifyContent="space-between"
            >
                <Typography
                    variant="h5"
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
