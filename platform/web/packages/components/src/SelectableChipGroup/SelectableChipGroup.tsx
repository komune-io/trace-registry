import { AutoComplete, Option, SmartKey } from '@komune-io/g2'
import { Stack, Typography } from '@mui/material'
import { useCallback, useMemo } from 'react'
import { SelectableChip } from '../SelectableChip'

interface SelectableChipGroupProps {
    title?: string
    values?: string[]
    onChange?: (values: string[]) => void
    options?: Option[]
}

export const SelectableChipGroup = (props: SelectableChipGroupProps) => {
    const { title, onChange, options, values } = props

    const withAutoComplete = (options?.length ?? 0) >= 10

    const chips = useMemo(() => options?.map((option) => {
        const isSelected = !!values?.find((value) => value === option.key.toString())
        if (withAutoComplete && !isSelected) return
        return (
            <SelectableChip
                key={option.key.toString()}
                label={option.label?.toString() ?? ""}
                isSelected={isSelected}
                onChange={(isSelected) => {
                    if (isSelected) {
                        onChange && onChange([...(values ?? []), option.key.toString()])
                    } else {
                        onChange && onChange(values?.filter((value) => value !== option.key.toString()) ?? [])
                    }
                }}
            />
        )
    }), [values, options, onChange])

    const onAutoCompleteChange = useCallback(
        (key?: SmartKey) => {
            if (onChange && key) {
                onChange([...(values ?? []), key.toString()])
            }
        },
        [onChange, values],
    )

    const filteredOptions = useMemo(
        () => {
            return options?.filter((option) => !values?.includes(option.key.toString()))
        },
        [options, values],
    )


    return (
        <Stack
            gap={2.5}
        >
            {title && <Typography
                variant='subtitle2'
            >
                {title}
            </Typography>}
            {
                withAutoComplete && <AutoComplete<Option>
                    //@ts-ignore
                    onChangeValue={onAutoCompleteChange}
                    options={filteredOptions!}
                />
            }
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
