import {InputBaseProps, Paper, InputBase, IconButton} from '@mui/material'
import {SendRounded} from "@mui/icons-material"
import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react'

export interface MessageInputProps extends Partial<InputBaseProps> {
    onSend: (message: string) => void
}

export const MessageInput = (props: MessageInputProps) => {
    const {onSend, ...other} = props
    const [message, setMessage] = useState<string>("")

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value)
      },
      [],
    )

    const onSendMemo = useCallback(
      () => {
        const trimmed = message?.trim() 
        if (trimmed) {
            onSend(trimmed)
            setMessage("")
        }
      },
      [onSend, message],
    )

    const onEnter = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            onSendMemo()
            event.preventDefault()
          }
      },
      [onSendMemo],
    )
    
  return (
    <Paper
    elevation={0}
    sx={{
        padding: (theme) => theme.spacing(2, 3),
        display: "flex",
        gap: (theme) => theme.spacing(1.5),
        alignItems: "flex-end",
        border: "1px solid #C5C7D0"
    }}
    >
        <InputBase
        {...other}
        value={message}
        onChange={onChange}
        placeholder='Write down your message'
        multiline
        maxRows={5} 
        sx={{
            flexGrow: 1,
            padding: "8px 0 8px",
            ...other.sx
        }}
        onKeyDown={onEnter}
        />
        <IconButton
        sx={{
            color: "#424242"
        }}
        onClick={onSendMemo}
        disabled={!message?.trim()}
        >
            <SendRounded />
        </IconButton>
    </Paper>
  )
}
