import { useTranslation } from "react-i18next";
import React, { useCallback, useMemo, useState } from "react";
import { ConfirmationPopUpVariant } from "@komune-io/g2";
import { Typography } from "@mui/material";
import { TmsConfirmationPopUp } from "../TmsPopUp";

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
  const { onSubmit, variant, title, description } = props
  const { t } = useTranslation()
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
    <TmsConfirmationPopUp title={title} variant={variant} open={isOpen} onClose={handleClose} onConfirm={onConfirm} validateText={t("confirm")} cancelText={t("cancel")}>
      <Typography sx={{ marginTop: "16px", whiteSpace: "pre-line" }}>{description}</Typography>
    </TmsConfirmationPopUp>
  ), [isOpen, handleClose, onConfirm, t, title, description])

  return {
    popup,
    isOpen,
    setOpen,
    handleClose,
    handleOpen
  }
}