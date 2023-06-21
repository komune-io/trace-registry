import { InputBaseProps, Paper, InputBase, IconButton, Stack } from '@mui/material'
import { SendRounded } from "@mui/icons-material"
import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react'

export interface MessageInputProps extends Partial<InputBaseProps> {
  onSend: (message: string) => void
  quote?: { quote: string, fileName: string, pageNumber: number }
  removeQuote?: () => void
}

export const MessageInput = (props: MessageInputProps) => {
  const { onSend, /* quote, */ removeQuote, ...other } = props
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
        flexDirection: "column",
        gap: (theme) => theme.spacing(1),
        border: "1px solid #C5C7D0"
      }}
    >
      {/* quote && (
        <Stack
          gap={0.5}
          maxHeight="100px"
        >
          <Stack
            direction="row"
            gap={1}
            alignItems="center"
          >
            <Typography color="divider" variant='subtitle2'>{quote.fileName}</Typography>
            <CloseRounded
              sx={{
                color: (theme) => theme.palette.divider,
                cursor: "pointer",
              }}
              onClick={removeQuote}
            />
          </Stack>

          <Typography
            color="text.secondary"
            variant='body2'
            component="blockquote"
            whiteSpace="pre-line"
            sx={{
              paddingLeft: "10px",
              borderLeft: (theme) => `0.25em solid ${theme.palette.divider}`,
              maxHeight: "100%",
              overflow: "auto"
            }}
          >
            {quote.quote}
          </Typography>
        </Stack>
      )
       */}
      <Stack
        flexDirection="row"
        alignItems="flex-end"
        sx={{
          gap: (theme) => theme.spacing(1.5),
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
      </Stack>

    </Paper >
  )
}
