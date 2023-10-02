import { Stack, StackProps, Typography } from '@mui/material'
import { LimitedChipList, Tag } from './LimitedChipList'


export interface DescriptedLimitedChipListProps extends StackProps {
    tags?: Tag[]
    description?: string
    /**
     * @default 4
     */
    limit?: number
}

export const DescriptedLimitedChipList = (props: DescriptedLimitedChipListProps) => {
    const { tags = [], description, limit = 4, ...other } = props

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
            <LimitedChipList tags={tags} limit={limit} />
            
        </Stack>
    )
}
