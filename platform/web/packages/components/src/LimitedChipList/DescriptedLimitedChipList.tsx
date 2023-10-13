import { Skeleton, Stack, StackProps, Typography } from '@mui/material'
import {Chip, LimitedList, Option} from "@smartb/g2"


export interface DescriptedLimitedChipListProps extends StackProps {
    tags?: Option[]
    description?: string
    /**
     * @default 4
     */
    limit?: number
    isLoading?: boolean
}

export const DescriptedLimitedChipList = (props: DescriptedLimitedChipListProps) => {
    const { tags = [], description, limit = 4, isLoading, ...other } = props

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
            {!isLoading ?
                <>
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
                    <LimitedList values={tags} listedComponent={Chip} limit={limit} />
                </>
                :
                <Skeleton animation="wave" height="230px" width="100%" sx={{
                    transform: "none"
                }} />
            }

        </Stack>
    )
}
