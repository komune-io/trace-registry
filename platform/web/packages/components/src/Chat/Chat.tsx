import { Paper, Stack, StackProps, Typography } from '@mui/material'
import { useLocalStorage } from '@mantine/hooks';
import { Message, MessagesContainer } from './MessagesContainer';
import { MessageInput } from './MessageInput';
import { useCallback, useMemo, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom';
import { ChatHeader } from './ChatHeader';

export interface ChatProps extends StackProps {
    selectedFiles?: string[]
    getResponse: (message: string, history: Message[], targetedFiles?: string[], projectId?: string) => Promise<string | undefined>
    quote?: { quote: string, fileName: string, pageNumber: number }
    removeQuote?: () => void
}

export const Chat = (props: ChatProps) => {
    const { selectedFiles, getResponse, quote, removeQuote, ...other } = props
    const { projectId } = useParams()
    const [messages, setMessages] = useLocalStorage<Message[]>({ key: `chat-history-${projectId}`, defaultValue: [] });
    const [isLoading, setIsLoading] = useState(false)


    const onUserMessage = useCallback(
        async (message: string) => {
            setIsLoading(true)
            removeQuote && removeQuote()
            const history = [...messages]
            messages.push({
                id: uuidv4(),
                content: message,
                date: Date.now(),
                type: 'HUMAN'
            })
            setMessages([...messages])
            const response = await getResponse(message, history, selectedFiles, projectId)
            messages.push({
                id: uuidv4(),
                content: response ?? "No response were received",
                date: Date.now(),
                type: 'AI'
            })
            setMessages([...messages])
            setIsLoading(false)
        },
        [messages, setMessages, removeQuote, projectId],
    )

    const reversedMessages = useMemo(() => [...messages].reverse(), [messages])

    const removeMessages = useCallback(
      (messageIds: string[]) => {
        setMessages(old => {
            const copy = [...old]
            return copy.filter((messsage) => !messageIds.includes(messsage.id))
        })
      },
      [setMessages],
    )
    
    const removeAllMessages = useCallback(
        () => {
          setMessages([])
        },
        [setMessages],
      )


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
                    overflow: "auto",
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <ChatHeader removeAll={removeAllMessages} />
                {
                    messages.length > 0 ? <MessagesContainer
                        messages={reversedMessages}
                        isLoading={isLoading}
                        removeMessages={removeMessages}
                    /> :
                        <Stack
                            direction="row"
                            alignItems="center"
                            height="100%"
                        >
                            <Typography align='center'>You haven't started the conversation with Tmate on this project yet</Typography>
                        </Stack>
                }
            </Paper>
            <MessageInput
                onSend={onUserMessage}
                quote={quote}
                removeQuote={removeQuote}
            />
        </Stack>
    )
}
