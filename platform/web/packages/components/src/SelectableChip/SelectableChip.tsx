import { Chip, ChipProps } from '@komune-io/g2'
import { useCallback } from 'react'

interface SelectableChipProps extends Omit<ChipProps, "onChange" > {
    isSelected?: boolean
    onChange?: (isSelected: boolean) => void
}

export const SelectableChip = (props: SelectableChipProps) => {
    const { isSelected = false, onChange, sx, ...other } = props

    const onDelete = useCallback(
        () => {
            onChange && onChange(false)
        },
        [onChange],
    )

    const onClick = useCallback(
        () => {
            if (!isSelected) {
                onChange && onChange(true)
            }
        },
        [onChange, isSelected],
    )

    return (
        <Chip
            color="#1F1F1F"
            onDelete={isSelected ? onDelete : undefined}
            onClick={onClick}
            sx={{
                border: isSelected ? "1px solid #BDBDBD" : "1px solid transparent",
                cursor: "pointer",
                height: "29.5px"
            }}
            {...other}
        />
    )
}
