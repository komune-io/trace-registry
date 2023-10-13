import { Divider, Stack, Typography } from '@mui/material'

export interface TitleDividerProps {
    title: string
}

export const TitleDivider = (props: TitleDividerProps) => {
    const {title} = props
    return (
        <Stack
            gap={2}
        >
            <Typography
                variant="h5"
            >
                {title}
            </Typography>
            <Divider
            />
        </Stack>
    )
}
