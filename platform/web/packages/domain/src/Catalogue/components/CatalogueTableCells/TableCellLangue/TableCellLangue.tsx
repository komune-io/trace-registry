import { Stack } from '@mui/material'
import { languageToEmojiFlag } from 'components'

export interface TableCellLangueProps {
    value?: string[]
}

export const TableCellLangue = (props: TableCellLangueProps) => {
    const { value } = props
    return (
        <Stack
            direction="row"
            gap={0.5}
            alignItems="center"
        >
            {
                value?.map((lang) => languageToEmojiFlag[lang])
            }
        </Stack>
    )
}

