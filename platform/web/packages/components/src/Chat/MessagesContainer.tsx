import { Stack, CircularProgress, Box, Skeleton } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ChatExchange } from './ChatExchange'

export type Message = {
    id: string
    type: "HUMAN" | "AI"
    date: number
    content: string
}

export interface MessagesContainerProps {
    messages: Message[]
    isLoading?: boolean
    removeMessages: (messageIds: string[]) => void
}

export const MessagesContainer = (props: MessagesContainerProps) => {
    const { messages, isLoading = false, removeMessages } = props
    const [page, setPage] = useState(1)

    const next = useCallback(
        () => {
            setPage(page => page + 1)
        },
        [],
    )

    const displayList = useMemo(() => {
        const display: JSX.Element[] = []
        const paginatedMessages = messages.slice(0, page * 20)
        let startIndex = 0
        if (paginatedMessages[0]?.type === "HUMAN") {
            display.push(
                <ChatExchange
                    message={paginatedMessages[0]}
                    key={paginatedMessages[0].id}
                />
            )
            startIndex = 1
        }
        for (let i = startIndex; i < paginatedMessages.length; i += 2) {
            display.push(
                <ChatExchange
                    response={paginatedMessages[i]}
                    message={paginatedMessages[i + 1]}
                    key={`${paginatedMessages[i].id}-${paginatedMessages[i + 1]?.id}`}
                    onRemove={() => removeMessages([paginatedMessages[i].id, paginatedMessages[i + 1].id])}
                />
            )
        }
        return display
    }, [page, messages, removeMessages])

    return (
        <Stack
            id="scrollableContainer"
            gap={2}
            flexDirection="column-reverse"
            sx={{
                height: "100%",
                overflow: 'auto',
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
                            marginBottom: (theme) => theme.spacing(2),
                            marginTop: (theme) => theme.spacing(1),
                        }}
                    />
                )
            }
            <InfiniteScroll
                dataLength={messages.length}
                next={next}
                style={{ display: 'flex', flexDirection: 'column-reverse' }}
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
