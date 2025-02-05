import { IconButton, InputBase, InputBaseProps, Paper, PaperProps } from '@mui/material'
import { SearchIcon } from '../Icons'
import { ChangeEvent, useCallback, useState } from 'react'

export interface SearchFilterProps extends InputBaseProps {
    onSearch?: (value: string) => void
    rootProps?: PaperProps
    initialValue?: string
}

export const SearchFilter = (props: SearchFilterProps) => {
    const { sx, placeholder, onSearch, rootProps, initialValue, ...other } = props
    const [value, setValue] = useState(initialValue ?? '')

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
            sx={{
                py: "2px",
                pl: "12px",
                pr: "16px",
                display: 'flex',
                alignItems: 'center',
                maxWidth: 400,
                width: "100%",
                border: "2px solid #E4DEE7",
                borderRadius: 1.5,
                ...rootProps?.sx
            }}
        >
            <InputBase
                sx={{ 
                    ml: 1, 
                    flex: 1,
                    ...sx
                }}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyUp={upHandler}
                {...other}
                inputProps={{ 'aria-label': placeholder }}
            />
            <IconButton sx={{color: "black"}} onClick={onSearchMemo} type="button" aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}
