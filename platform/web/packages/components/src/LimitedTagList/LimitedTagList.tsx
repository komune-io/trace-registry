import { Stack, StackProps, Typography } from '@mui/material'
import { Chip } from '@smartb/g2'
import { useMemo } from 'react'

export type Tag = {
    key?: string
    label: string
    color: string
}

export interface LimitedTagListProps extends StackProps {
    tags?: Tag[]
    description?: string
    /**
     * @default 4
     */
    limit?: number
}

export const LimitedTagList = (props: LimitedTagListProps) => {
    const { tags = [], description, limit = 4, ...other } = props

    const tagsDisplay = useMemo(() => {
        const limited = tags.slice(0, limit)
        return limited.map((tag) => <Chip {...tag} key={tag.key ?? tag.label} />)
    }, [tags, limit])

    return (
        <Stack
            sx={{
                bgcolor: (theme) => theme.palette.background.default,
                borderRadius: "12px",
                // "&:hover .tagDescription": {
                //     display: "block"
                // }
            }}
            padding={1.5}
            gap={1.5}
            {...other}
        >
            <Typography
                className='tagDescription'
                variant='body2'
                sx={{
                    WebkitLineClamp: 5,
                    lineClamp: '5',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                }}
            >
                {description}
            </Typography>
            <Stack
                direction="row"
                gap={0.5}
                flexWrap="wrap"
            >
                {tagsDisplay}
                <Chip
                    label={`${tags.length - limit} +`}
                    sx={{
                        bgcolor: "primary.main",
                        color: "white"
                    }}
                />
            </Stack>
            
        </Stack>
    )
}
