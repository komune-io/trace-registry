import { AutoComplete, Option } from '@komune-io/g2'
import { Stack, Typography } from '@mui/material'
import { useMemo } from 'react'
import { SelectableChip } from '../SelectableChip'
import { TypeSelectableChip } from '../TypeSelectableChip'

interface SelectableChipGroupProps {
    title?: string
    values?: string[]
    onChange?: (values: string[]) => void
    options?: Option[]
    forTypes?: boolean
}

export const SelectableChipGroup = (props: SelectableChipGroupProps) => {
    const { title, onChange, options, values, forTypes = false } = props

    const withAutoComplete = (options?.length ?? 0) >= 10

    const chips = useMemo(() => options?.map((option) => {
        const isSelected = !!values?.find((value) => value === option.key.toString())
        const ChipComponent = forTypes ? TypeSelectableChip : SelectableChip
        if (withAutoComplete && !isSelected) return
        return (
            <ChipComponent
                key={option.key.toString()}
                label={option.label?.toString() ?? ""}
                isSelected={isSelected}
                icon={option.icon as JSX.Element}
                color={option.color}
                onChange={(isSelected) => {
                    if (isSelected) {
                        onChange && onChange([...(values ?? []), option.key.toString()])
                    } else {
                        onChange && onChange(values?.filter((value) => value !== option.key.toString()) ?? [])
                    }
                }}
            />
        )
    }), [values, options, onChange, forTypes])


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
                    onChangeValues={onChange}
                    //@ts-ignore
                    values={values}
                    options={options!}
                    multiple
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
