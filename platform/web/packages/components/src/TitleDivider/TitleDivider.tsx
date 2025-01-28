import { Divider, Stack, IconButton, Box } from '@mui/material'
import { Chip } from "@komune-io/g2"
import { EditableTitle, EditableTitleProps } from '../EditableTitle'
import { useRef, useCallback } from 'react'
import { EditRounded } from '@mui/icons-material'

export interface TitleDividerProps extends Omit<EditableTitleProps, "ref"> {
    title: string
    status?: {
        label: string
        color: string
    }
    size?: "h5" | "h6" | "subtitle1"
}

export const TitleDivider = (props: TitleDividerProps) => {
    const { title, status, size = "h5", onDebouncedChange, onChange, ...other } = props

    const inputRef = useRef<HTMLInputElement | null>(null)
    const readOnly = !onDebouncedChange && !onChange

    const focusOnClick = useCallback(
      () => {
        inputRef.current?.focus()
      },
      [],
    )
    

    return (
        <Stack
            gap={size === "subtitle1" ? 1.5 : 2}
        >
            <Stack
                gap={size === "subtitle1" ? 1.5 : 2}
                direction="row"
                alignItems="center"
            >
                <EditableTitle
                    size={size}
                    title={title}
                    onChange={onChange}
                    onDebouncedChange={onDebouncedChange}
                    readOnly={readOnly}
                    {...other}
                />
                {!readOnly && <IconButton
                    size={size === "subtitle1" ? "small" : "medium"}
                    onClick={focusOnClick}
                >
                    <EditRounded />
                </IconButton>
                }
                <Box flex={1} />
                {status && <Chip {...status} />}
            </Stack>
            <Divider
            />
        </Stack>
    )
}
