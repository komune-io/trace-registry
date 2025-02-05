import { Chip, ChipProps } from '@komune-io/g2'
import { useCallback } from 'react'

interface SelectionnableChipProps extends Omit<ChipProps, "onChange" > {
    isSelected?: boolean
    onChange?: (isSelected: boolean) => void
}

export const SelectionnableChip = (props: SelectionnableChipProps) => {
    const { isSelected = false, onChange, sx, ...other } = props

    const onDelete = useCallback(
        () => {
            onChange && onChange(false)
        },
        [onChange],
    )

    const onClick = useCallback(
        () => {
            onChange && onChange(true)
        },
        [onChange],
    )

    return (
        <Chip
            color="#1F1F1F"
            onDelete={isSelected ? onDelete : undefined}
            onClick={onClick}
            sx={{
                border: isSelected ? "1px solid #BDBDBD" : undefined
            }}
            {...other}
        />
    )
}
