import { Stack, CircularProgress, Box } from '@mui/material'
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
}

export const MessagesContainer = (props: MessagesContainerProps) => {
    const { messages } = props
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
            <UserMessageChip key={message.id} label={message.content} />
        )
    ), [page])

    return (
        <Box
            id="scrollableContainer"
            sx={{
                height: "100%",
                overflow: 'auto',
                padding: (theme) => theme.spacing(0, 2)
            }}
        >
            <InfiniteScroll
                dataLength={messages.length}
                next={next}
                style={{ display: 'flex', flexDirection: 'column-reverse' }}
                inverse
                hasMore={page * 20 > messages.length}
                loader={<CircularProgress />}
                scrollableTarget="scrollableContainer"
            >
                <Stack
                    gap={2}
                    flexDirection="column-reverse"
                >
                    {displayList}
                </Stack>
            </InfiniteScroll>
        </Box>
    )
}
