import { Option } from '@komune-io/g2'
import { Stack, Typography } from '@mui/material'
import { useMemo } from 'react'
import { SelectableChip } from '../SelectableChip'

interface SelectableChipGroupProps {
    title?: string
    values?: string[]
    onChange?: (values: string[]) => void
    options?: Option[]
}

export const SelectableChipGroup = (props: SelectableChipGroupProps) => {
    const { title, onChange, options, values } = props

    const chips = useMemo(() => options?.map((option) => (
        <SelectableChip 
        key={option.key.toString()}
        label={option.label?.toString() ?? ""}
        isSelected={!!values?.find((value) => value === option.key.toString())}
        onChange={(isSelected) => {
            if (isSelected) {
                onChange && onChange([...(values ?? []), option.key.toString()])
            } else {            
                onChange && onChange(values?.filter((value) => value !== option.key.toString()) ?? [])
            }
        }}
        />
    )), [values, options, onChange])

    return (
        <Stack
            gap={2.5}
        >
            <Typography
                variant='subtitle2'
            >
                {title}
            </Typography>
            <Stack
                direction="row"
                gap={1.5}
                alignItems="center"
                flexWrap="wrap"
            >
                {chips}
            </Stack>
        </Stack>
    )
}
