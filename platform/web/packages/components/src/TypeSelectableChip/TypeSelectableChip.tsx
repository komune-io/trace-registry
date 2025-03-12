import { useTheme } from '@komune-io/g2'
import { ToggleButtonProps, ToggleButton, Box } from '@mui/material'
import { useCallback } from 'react'
import { LocalTheme } from '../utils'

interface TypeSelectableChipProps extends Omit<ToggleButtonProps, "onChange" | "color" | "value"> {
    isSelected?: boolean
    onChange?: (isSelected: boolean) => void
    icon?: JSX.Element
    color?: string
    label?: string
}

export const TypeSelectableChip = (props: TypeSelectableChipProps) => {
    const { isSelected = false, onChange, sx, icon, color, label, ...other } = props

    const theme = useTheme<LocalTheme>()

    const onChangeMemo = useCallback(
        () => {
            onChange && onChange(!isSelected)
        },
        [onChange, isSelected],
    )

    return (
        //@ts-ignore
        <ToggleButton
            onChange={onChangeMemo}
            selected={isSelected}
            sx={{
                border: "none",
                borderRadius: 0,
                cursor: "pointer",
                position: "relative",
                transform: theme.local?.rotation,
                display: "flex",
                alignItems: "center",
                color: "black",
                backgroundColor: "transparent !important",
                gap: "7px",
                py: 0.5,
                px: 1.25,
                width: "150px",
                ...sx
            }}
            disableRipple
            {...other}
        >
            <Box
                sx={{
                    transition: "0.5s",
                    height: isSelected ? "100%" : "4px",
                    right: 0,
                    bottom: isSelected ? 0 : "-4px",
                    position: "absolute",
                    width: "100%",
                    background: color ?? "#F9DC44",
                    zIndex: -1,
                }}
            />
            {icon}
            {label}
        </ToggleButton>
    )
}
