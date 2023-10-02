import { Stack, StackProps } from '@mui/material'
import { Chip } from '@smartb/g2'
import { useMemo } from 'react'

export type Tag = {
    key?: string
    label: string
    color: string
}

export interface LimitedChipListProps extends StackProps {
    tags?: Tag[]
    /**
     * @default 4
     */
    limit?: number
}

export const LimitedChipList = (props: LimitedChipListProps) => {
    const { tags = [], limit = 4, ...other } = props

    const tagsDisplay = useMemo(() => {
        const limited = tags.slice(0, limit)
        return limited.map((tag) => <Chip {...tag} key={tag.key ?? tag.label} />)
    }, [tags, limit])

    return (
        <Stack
        direction="row"
        gap={0.5}
        flexWrap="wrap"
        {...other}
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
    )
}
