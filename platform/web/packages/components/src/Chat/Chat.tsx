import { Paper, Stack, StackProps } from '@mui/material'
import { useLocalStorage } from '@mantine/hooks';
import { Message, MessagesContainer } from './MessagesContainer';
import { MessageInput } from './MessageInput';
import { useCallback, useMemo, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export interface ChatProps extends StackProps {
    getResponse: (message: string) => Promise<string | undefined>
}

export const Chat = (props: ChatProps) => {
    const {getResponse} = props
    const [messages, setMessages] = useLocalStorage<Message[]>({ key: 'chat-history', defaultValue: [] });
    const [isLoading, setIsLoading] = useState(false)

    const onUserMessage = useCallback(
        async (message: string) => {
            setIsLoading(true)
            messages.push({
                id: uuidv4(),
                content: message,
                protagonist: 'user'
            })
            setMessages([...messages])
            const response = await getResponse(message)
            messages.push({
                id: uuidv4(),
                content: response ?? "No response were received",
                protagonist: 'ai'
            })
            setMessages([...messages])
            setIsLoading(false)
        },
        [messages, setMessages],
    )

    const reversedMessages = useMemo(() => [...messages].reverse(), [messages])


    return (
        <Stack
            {...props}
            gap={1}
            sx={{
                height: "100%",
                ...props.sx
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    overflow: "auto"
                }}
            >
                <MessagesContainer
                    messages={reversedMessages}
                    isLoading={isLoading}
                />
            </Paper>
            <MessageInput
                onSend={onUserMessage}
            />
        </Stack>
    )
}
