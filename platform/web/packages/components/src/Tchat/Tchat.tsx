import { Paper, Stack, StackProps } from '@mui/material'
import { useLocalStorage } from '@mantine/hooks';
import { Message, MessagesContainer } from './MessagesContainer';
import { MessageInput } from './MessageInput';
import { useCallback } from "react"
import { v4 as uuidv4 } from 'uuid'

const aiResponse = `A PDD, or Product Definition Document, is a concise written summary that outlines the key details and specifications of a product or project. 
It typically includes information such as the product's purpose, features, target audience, and technical requirements, serving as a foundation for development and decision-making processes.

You can see examples here at smartsheet.com/content/project-description.`

export const Tchat = (props: StackProps) => {
    const [messages, setMessages] = useLocalStorage<Message[]>({ key: 'tchat-history', defaultValue: [] });

    const onUserMessage = useCallback(
        (message: string) => {
            setMessages(old => {
                const copy = [...old.reverse()]
                copy.push({
                    id: uuidv4(),
                    content: message,
                    protagonist: 'user'
                })
                copy.push({
                    id: uuidv4(),
                    content: aiResponse,
                    protagonist: 'ai'
                })
                return copy.reverse()
            })
        },
        [],
    )

    console.log(messages)

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
                    messages={messages}
                />
            </Paper>
            <MessageInput
                onSend={onUserMessage}
            />
        </Stack>
    )
}
