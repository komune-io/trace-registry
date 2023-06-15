import { Paper, Stack, StackProps } from '@mui/material'
import { useLocalStorage } from '@mantine/hooks';
import { Message, MessagesContainer } from './MessagesContainer';

export const Tchat = (props: StackProps) => {
    const [messages, _] = useLocalStorage<Message[]>({ key: 'chat-history' });
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
            >
                <MessagesContainer
                    messages={messages}
                />
            </Paper>
        </Stack>
    )
}
