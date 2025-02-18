import { Button } from '@komune-io/g2'
import { Typography } from '@mui/material'
import { TmsPopUp, WarningTicket } from 'components'
import React from 'react'

interface DraftReplacementModalProps {
    open: boolean
    onClose: (event: React.ChangeEvent<{}>) => void
    onCreate: () => Promise<any>
}

export const DraftReplacementModal = (props: DraftReplacementModalProps) => {
    const { open, onClose, onCreate } = props

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={"Contribuer"}
        >
            <WarningTicket
                title='Vous avez déjà une contribution en cours sur cette fiche'
            >
                <Typography
                    variant='caption'
                >
                    Créer une nouvelle contribution remplacera votre contribution existante
                </Typography>
            </WarningTicket>
            <Button
                sx={{
                    alignSelf: 'flex-end'
                }}
                onClick={onCreate}
            >
                Créer une nouvelle contribution
            </Button>
        </TmsPopUp>
    )
}

