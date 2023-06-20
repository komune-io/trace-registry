import { Paper, Stack, StackProps } from '@mui/material'
import { useLocalStorage } from '@mantine/hooks';
import { Message, MessagesContainer } from './MessagesContainer';
import { MessageInput } from './MessageInput';
import { useCallback, useMemo, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export interface ChatProps extends StackProps {
    getResponse: (message: string, history: Message[]) => Promise<string | undefined>
    quote?: { quote: string, fileName: string, pageNumber: number }
}

export const Chat = (props: ChatProps) => {
    const {getResponse, ...other} = props
    const [messages, setMessages] = useLocalStorage<Message[]>({ key: 'chat-history', defaultValue: [] });
    const [isLoading, setIsLoading] = useState(false)

    const onUserMessage = useCallback(
        async (message: string) => {
            setIsLoading(true)
            const history = [...messages]
            messages.push({
                id: uuidv4(),
                content: message,
                type: 'HUMAN'
            })
            setMessages([...messages])
            const response = await getResponse(message, history)
            messages.push({
                id: uuidv4(),
                content: response ?? "No response were received",
                type: 'AI'
            })
            setMessages([...messages])
            setIsLoading(false)
        },
        [messages, setMessages],
    )

    const reversedMessages = useMemo(() => [...messages].reverse(), [messages])


    return (
        <Stack
            {...other}
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
