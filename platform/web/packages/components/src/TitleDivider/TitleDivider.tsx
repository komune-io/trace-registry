import { Divider, Stack, IconButton, Box } from '@mui/material'
import { Chip } from "@komune-io/g2"
import { EditableTitle, EditableTitleProps } from '../EditableTitle'
import { useCallback, useState } from 'react'
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

    const [readOnly, setreadOnly] = useState(true)

    const onInputRef = useCallback(
        (ref: HTMLInputElement | null) => {
            ref?.focus()
        },
        [],
    )

    const editOnTitleClick = useCallback(
        () => {
            setreadOnly(false)
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
                    ref={onInputRef}
                    size={size}
                    title={title}
                    onChange={onChange}
                    onDebouncedChange={onDebouncedChange}
                    readOnly={readOnly}
                    onClick={editOnTitleClick}
                    {...other}
                />
                {readOnly && <IconButton
                    size="small"
                    onClick={editOnTitleClick}
                >
                    <EditRounded fontSize={size === "subtitle1" ? "small" : "medium"} />
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
