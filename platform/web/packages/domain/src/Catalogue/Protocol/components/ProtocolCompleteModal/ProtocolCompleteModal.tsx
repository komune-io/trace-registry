import { Box, Stack, Typography } from '@mui/material'
import { TmsPopUp } from 'components'
import React from 'react'
import { useTranslation } from 'react-i18next'
import imageSrc from "./decoration.png"

interface ProtocolCompleteModalProps {
    open: boolean
    onClose: (event: React.ChangeEvent<{}>) => void
}

export const ProtocolCompleteModal = (props: ProtocolCompleteModalProps) => {
    const { open, onClose } = props

    const { t } = useTranslation()

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t('referential.completedReferentialTitle')}
            sx={{
                width: "700px"
            }}
        >
            <Stack
                direction="row"
                gap={3}
                alignItems="center"
                flex={1}
            >
                <Typography
                    variant='body2'
                >
                    {t('referential.completedReferentialDescription')}
                </Typography>
                <Box
                    sx={{
                        width: "260px",
                        height: "auto",
                    }}
                    component={"img"}
                    src={imageSrc}
                />
            </Stack>
        </TmsPopUp>
    )
}

