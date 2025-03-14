import { InputBase, InputBaseProps, Typography } from '@mui/material'
import { ChangeEvent, useCallback, forwardRef, ForwardedRef } from 'react'
import { useDebouncedCallback } from '@mantine/hooks'

export interface EditableTitleProps extends Omit<InputBaseProps, "onChange" | "size"> {
    title?: string
    onChange?: (title: string) => void
    onDebouncedChange?: (title: string) => void
    size?: "h3" | "h5" | "h6" | "subtitle1"
    readOnly?: boolean
}

export const EditableTitle = forwardRef((props: EditableTitleProps, ref?: ForwardedRef<HTMLInputElement>) => {
    const { title, onChange, onDebouncedChange, placeholder, inputProps, sx, size = "h5", readOnly = false, onClick, ...other } = props

    const debounced = useDebouncedCallback(async (value: string) => {
        onDebouncedChange && onDebouncedChange(value)
    }, 500);

    const onChangeMemo = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const value = event.target.value
            onChange && onChange(value)
            debounced(value)
        },
        [onChange],
    )

    if (readOnly) return <Typography onClick={onClick} variant={size}>{title}</Typography>
    return (
        <InputBase
            inputRef={ref}
            onClick={onClick}
            sx={{
                width: "100%",
                fontSize: size === "h3" ? "2.625rem" : size === "h5" ? "1.5rem" : size === "h6" ? "1.25rem" : "1rem",
                fontWeight: size === "subtitle1" ? 600 : 700,
                "& .MuiInputBase-input::placeholder": {
                    color: "#CBC9C4"
                },
                "& .MuiInputBase-input": {
                    p: 0
                },
                ...sx
            }}
            readOnly={readOnly}
            onChange={onChangeMemo}
            defaultValue={title}
            placeholder={placeholder}
            inputProps={{ 'aria-label': placeholder, ...inputProps }}
            {...other}
        />
    )
})
