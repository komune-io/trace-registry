import { Stack, CircularProgress, Box, Skeleton } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'
import { ResponseText } from './ResponseText'
import { UserMessageChip } from './UserMessageChip'

export type Message = {
    id: string
    protagonist: "user" | "ai"
    content: string
}

export interface MessagesContainerProps {
    messages: Message[]
    isLoading?: boolean
}

export const MessagesContainer = (props: MessagesContainerProps) => {
    const { messages, isLoading = false } = props
    const [page, setPage] = useState(1)

    const next = useCallback(
        () => {
            setPage(page => page + 1)
        },
        [],
    )

    const displayList = useMemo(() => messages.slice(0, page * 20).map(
        (message) => message.protagonist === "ai" ? (
            <ResponseText key={message.id} >{message.content}</ResponseText>
        ) : (
            <UserMessageChip 
            key={message.id} 
            label={message.content} 
            sx={{
                marginTop: (theme) => theme.spacing(1)
            }}
            />
        )
    ), [page, messages])

    return (
        <Stack
            id="scrollableContainer"
            gap={2}
            flexDirection="column-reverse"
            sx={{
                height: "100%",
                overflow: 'auto',
                padding: (theme) => theme.spacing(2, 1)
            }}
        >
             {
                isLoading && (
                    <Skeleton 
                    animation="wave" 
                    variant="rounded" 
                    width="calc(100% - 32px)" 
                    height={100} 
                    sx={{
                        flexShrink: 0,
                        margin: (theme) => theme.spacing(0, 2),
                    }}
                    />
                )
            }
            <InfiniteScroll
                dataLength={messages.length}
                next={next}
                style={{ display: 'flex', flexDirection: 'column-reverse', gap: "16px" }}
                inverse
                hasMore={page * 20 < messages.length}
                loader={
                    <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                    >
                        <CircularProgress />
                    </Box>
                }
                scrollableTarget="scrollableContainer"
            >
                    {displayList}
            </InfiniteScroll>  
        </Stack>
    )
}
