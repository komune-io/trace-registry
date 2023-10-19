import { PictureAsPdfOutlined } from "@mui/icons-material"
import { Stack, Typography } from "@mui/material"



export interface TableCellFileNameProps {
    text: string
}

export const TableCellFileName = (props: TableCellFileNameProps) => {
    const { text } = props
    
    return (
        <Stack direction="row"
               alignItems="center"
               gap={1}
        >
            <PictureAsPdfOutlined fontSize="small" />
            <Typography>{text}</Typography>
        </Stack>
    )
}
