import { Stack, SvgIcon, Typography } from '@mui/material'
import { TmsPopUp } from 'components'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Svg from "./contribution.svg?react"

interface ContributionModalProps {
    open: boolean
    onClose: (event: React.ChangeEvent<{}>) => void
}

export const ContributionModal = (props: ContributionModalProps) => {
    const { open, onClose } = props

    const { t } = useTranslation()

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t("catalogues.thanksForContribution")}
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
                <Stack
                    gap={2}
                >
                    <Typography
                        variant='body2'
                    >
                        {t("catalogues.modificationsSaved")}
                    </Typography>
                    <Typography
                        variant='body2'
                    >
                        {t("catalogues.modificationsWillBeReviewed")}
                    </Typography>
                </Stack>
                <SvgIcon
                    sx={{
                        width: "260px",
                        height: "auto",
                        filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.20))"
                    }}
                    component={Svg}
                    inheritViewBox 
                />
            </Stack>
        </TmsPopUp>
    )
}

