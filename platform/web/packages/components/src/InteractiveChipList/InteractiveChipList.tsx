import { Chip, Stack } from '@mui/material'
import { Option } from '@smartb/g2'
import { useMemo } from 'react'

export interface InteractiveChipList {
    values: Option[]
    onClick?: (value: string) => void
}

export const InteractiveChipList = (props: InteractiveChipList) => {
    const { values, onClick } = props

    const chips = useMemo(() => values.map((value) => (
        <Chip
            key={value.key.toString()}
            sx={{
                bgcolor: "#FBF0D3"
            }}
            label={value.label}
            onClick={() => onClick && onClick(value.key.toString())}
        />
    )), [values, onClick])

    return (
        <Stack
        gap={1}
        direction="row"
        >
            {chips}
        </Stack>

    )
}
