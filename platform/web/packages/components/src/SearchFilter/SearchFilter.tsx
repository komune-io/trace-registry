import { IconButton, InputBase, InputBaseProps, Paper, PaperProps } from '@mui/material'
import { IconPack } from '../Icons'
import { ChangeEvent, useCallback, useState } from 'react'
import { useTheme } from '@komune-io/g2'
import { LocalTheme } from '../utils'
import { useDidUpdate } from '@mantine/hooks'

export interface SearchFilterProps extends InputBaseProps {
    onSearch?: (value: string) => void
    rootProps?: PaperProps
    initialValue?: string
}

export const SearchFilter = (props: SearchFilterProps) => {
    const { sx, placeholder, onSearch, rootProps, initialValue, ...other } = props
    const [value, setValue] = useState(initialValue ?? '')
    const theme = useTheme<LocalTheme>()

    useDidUpdate(() => {
        if (!initialValue === undefined) {
            setValue("")
        }
    }, [initialValue])


    const onChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setValue(event.target.value)
        },
        [],
    )

    const onSearchMemo = useCallback(
        () => {
            onSearch && onSearch(value)
        },
        [onSearch, value],
    )

    const upHandler = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (event.key === 'Enter') {
                event.currentTarget.blur()
                onSearchMemo()
            }
        },
        [onSearch, onSearchMemo]
    )

    return (
        <Paper
            {...rootProps}
            elevation={0}
            sx={{
                py: "2px",
                pl: "12px",
                pr: "16px",
                display: 'flex',
                alignItems: 'center',
                width: "100%",
                border: "1px solid rgba(0, 0, 0, 0.10)",
                borderRadius: theme.local?.borderRadius ?? 0,
                ...rootProps?.sx
            }}
        >
            <InputBase
                sx={{
                    ml: 1,
                    flex: 1,
                    "& .MuiInputBase-input::placeholder": {
                        color: "#323338",
                        opacity: 1
                    },
                    ...sx
                }}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyUp={upHandler}
                {...other}
                inputProps={{ 'aria-label': placeholder }}
            />
            <IconButton sx={{ color: "black" }} onClick={onSearchMemo} type="button" aria-label="search">
                <IconPack.search size="big" />
            </IconButton>
        </Paper>
    )
}
