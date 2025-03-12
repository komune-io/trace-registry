import { Typography } from '@mui/material'
import { TmsPopUp, WarningTicket, CustomButton } from 'components'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface DraftReplacementModalProps {
    open: boolean
    onClose: (event: React.ChangeEvent<{}>) => void
    onCreate: () => Promise<any>
}

export const DraftReplacementModal = (props: DraftReplacementModalProps) => {
    const { open, onClose, onCreate } = props
    const {t} = useTranslation()

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={"Contribuer"}
        >
            <WarningTicket
                title={t("catalogues.alreadyHaveActiveContribution")}
            >
                <Typography
                    variant='caption'
                >
                    {t("catalogues.newContributionReplace")}
                </Typography>
            </WarningTicket>
            <CustomButton
                sx={{
                    alignSelf: 'flex-end'
                }}
                onClick={onCreate}
            >
                {t("catalogues.createNewContribution")}
            </CustomButton>
        </TmsPopUp>
    )
}

