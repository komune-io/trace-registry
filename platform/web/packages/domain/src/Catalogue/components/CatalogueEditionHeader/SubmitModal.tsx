import { InputForm } from '@komune-io/g2'
import { Stack } from '@mui/material'
import { TmsPopUp, CustomButton } from 'components'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface SubmitModalProps {
    open: boolean
    onClose: (event: React.ChangeEvent<{}>) => void
    onSubmit?: (reason: string) => Promise<any>
}

export const SubmitModal = (props: SubmitModalProps) => {
    const { open, onClose, onSubmit } = props

    const { t } = useTranslation()

    const [value, setValue] = useState("")

    const onSubmitMemo = useCallback(
        async () => {
           if (onSubmit) {
            await onSubmit(value)
           }
        },
        [value],
    )


    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t("sendForValidation")}
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
                label={t("catalogues.addASubmitComment")}
                onChange={setValue}
                value={value}
            />
            <Stack
                direction="row"
                gap={1}
                alignItems="center"
                justifyContent="flex-end"
            >
                <CustomButton
                    variant='text'
                    onClick={onClose}
                >
                    {t("cancel")}
                </CustomButton>

                <CustomButton
                    disabled={!value}
                    onClick={onSubmitMemo}
                >
                    {t("submit")}
                </CustomButton>
            </Stack>
        </TmsPopUp>
    )
}

