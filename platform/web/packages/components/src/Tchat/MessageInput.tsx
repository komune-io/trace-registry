import {InputBaseProps, Paper, InputBase, IconButton} from '@mui/material'
import {SendRounded} from "@mui/icons-material"
import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react'

export interface MessageInputProps extends Omit<Partial<InputBaseProps>, "size"> {
    onSend: (message: string) => void
    size?: "medium" | "small"
}

export const MessageInput = (props: MessageInputProps) => {
    const {onSend, size = "medium", ...other} = props
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
        padding: (theme) => size === "medium" ? theme.spacing(3) : theme.spacing(2, 3),
        display: "flex",
        gap: (theme) => theme.spacing(1.5),
        alignItems: "flex-end"
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
            ...other.sx
        }}
        size={size}
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
