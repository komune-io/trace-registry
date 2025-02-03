import { Button, InputForm } from '@komune-io/g2'
import { Stack } from '@mui/material'
import { TmsPopUp } from 'components'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface RejectModalProps {
    open: boolean
    onClose: (event: React.ChangeEvent<{}>) => void
    onReject: (reason: string) => Promise<any>
}

export const RejectModal = (props: RejectModalProps) => {
    const { open, onClose, onReject } = props

    const { t } = useTranslation()

    const [value, setValue] = useState("")

    const onRejectMemo = useCallback(
        () => {
            onReject(value)
        },
        [value],
    )


    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t("catalogues.rejectTheModification")}
        >
            <InputForm
            sx={{
                "& .AruiInputForm-label": {
                    whiteSpace: "normal"
                }
            }}
                inputType='textField'
                rows={5}
                multiline
                label={t("catalogues.addARejectComment")}
                onChange={setValue}
                value={value}
            />
            <Stack
                direction="row"
                gap={1}
                alignItems="center"
                justifyContent="flex-end"
            >
                <Button
                    variant='text'
                    onClick={onClose}
                >
                    {t("cancel")}
                </Button>

                <Button
                    color="error"
                    disabled={!value}
                    onClick={onRejectMemo}
                >
                    {t("reject")}
                </Button>
            </Stack>
        </TmsPopUp>
    )
}

