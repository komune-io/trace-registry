import {ConfirmationPopUpVariant} from "@smartb/g2-layout/dist/PopUp/ConfirmationPopUp";
import {useTranslation} from "react-i18next";
import React, {useCallback, useMemo, useState} from "react";
import {ConfirmationPopUp} from "@smartb/g2";
import {Typography} from "@mui/material";

export interface UseConfirmationPopUpProps {
  onSubmit?: () => any 
  variant?: ConfirmationPopUpVariant
  title?: string
  description: string
}

export interface UseConfirmationPopUpType {
  popup: React.ReactNode
  isOpen: boolean
  setOpen: (open: boolean) => void
  handleOpen: () => void
  handleClose: () => void
}

export const useConfirmationPopUp = (props: UseConfirmationPopUpProps): UseConfirmationPopUpType => {
  const {onSubmit, variant, title, description} = props
  const {t} = useTranslation()
  const [isOpen, setOpen] = useState(false)

  const handleClose = useCallback(
    () => {
      setOpen(false)
    },
    [],
  )
  const handleOpen = useCallback(
    () => {
      setOpen(true)
    },
    [],
  )

  const onConfirm = useCallback(
    async () => {
      onSubmit && await onSubmit()
      setOpen(false)
    },
    [onSubmit],
  )

  const popup = useMemo(() => (
    <ConfirmationPopUp variant={variant} open={isOpen} onClose={handleClose} onConfirm={onConfirm} validateText={t("confirm")} cancelText={t("cancel")}>
      {title && <Typography sx={{ whiteSpace: "pre-line" }} variant="h4">{title}</Typography>}
      <Typography sx={{ marginTop: "16px", whiteSpace: "pre-line" }}>{description}</Typography>
    </ConfirmationPopUp>
  ), [isOpen, handleClose, onConfirm, t, title, description])

  return {
    popup,
    isOpen,
    setOpen,
    handleClose,
    handleOpen
  }
}