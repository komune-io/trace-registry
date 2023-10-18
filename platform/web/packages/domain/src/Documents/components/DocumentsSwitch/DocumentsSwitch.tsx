import { Stack, StackProps, Typography } from '@mui/material'
import { Option } from '@smartb/g2'
import { InteractiveChipList } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export interface DocumentsSwitchProps extends StackProps {
    files: string[]
    onClickDocument?: (file: string) => void
}

export const DocumentsSwitch = (props: DocumentsSwitchProps) => {
    const { files, onClickDocument, sx,  ...other } = props
    const {t} = useTranslation()

    const values = useMemo(() => files.map((file): Option => ({key: file, label: file})), [files])
    return (
        <Stack
            direction={"row"}
            gap={1}
            width="100%"
            overflow="auto"
            sx={{
                bgcolor: "white",
                padding: (theme) => theme.spacing(1.5, 1),
                ...sx
            }}
            {...other}
        >
            <Typography
            variant="body2"
            
            >
                {t("switchTo")}
            </Typography>
            <InteractiveChipList
            values={values} 
            onClick={onClickDocument}
            />
        </Stack>
    )
}
