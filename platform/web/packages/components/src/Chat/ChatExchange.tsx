import { Stack, Typography } from '@mui/material'
import { Message } from './MessagesContainer'
import { ResponseText } from './ResponseText'
import { UserMessageChip } from './UserMessageChip'
import { formatDistance } from "date-fns"
import { CloseRounded } from '@mui/icons-material'

export interface ChatExchangeProps {
    message: Message
    response?: Message
    onRemove?: () => void
}

export const ChatExchange = (props: ChatExchangeProps) => {
    const { message, response, onRemove } = props
    return (
        <Stack
            sx={{
                position: "relative",
                padding: (theme) => theme.spacing(4, 1),
                paddingBottom: (theme) => theme.spacing(2),
                borderRadius: "4px",
                "&:hover": {
                    background: "#F9F9F9"
                },
                "&:hover .deleteContainer": {
                    display: "flex"
                }
            }}
            gap={2}
        >
            <Stack
                className='deleteContainer'
                direction="row"
                gap={1}
                sx={{
                    alignItems: "center",
                    position: "absolute",
                    display: "none",
                    top: 5,
                    right: 10
                }}
            >
                <Typography variant='caption' >{formatDistance(message.date, Date.now(), { addSuffix: true })}</Typography>
                {onRemove && <CloseRounded
                    sx={{
                        cursor: "pointer",
                    }}
                    onClick={onRemove}
                />}
            </Stack>
            <UserMessageChip
                label={message.content}
            />
            {response && <ResponseText >{response.content}</ResponseText>}
        </Stack>
    )
}
